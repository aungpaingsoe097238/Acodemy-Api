const bcrypt = require("../../../helpers/bcrypt");
const jwt = require("../../../helpers/jwt");
const response = require("../../../helpers/response");
const User = require("../../../models").User;
const Role = require("../../../models").Role;
const Permission = require("../../../models").Permission;

const login = async (req, res) => {

  const { email, password } = req.body;

  let user = await User.findOne({
    where: { email },
    include: {
      model: Role,
      as: "roles",
      attributes: ["name"],
      through: {
        attributes: [],
      },
      include: {
        model: Permission,
        as: "permissions",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    },
  });

  if (!user) {
    return response.error(res, "Invalid Credential");
  }

  const decodePassword = bcrypt.decode(password, user.password);

  if (!decodePassword) {
    return response.error(res, "Invalid Credential");
  }

  user = {
    id: user.id,
    name: user.name,
    email: user.email,
    roles: user.roles,
  };

  const generateToken = jwt.encode(user);
  user.token = generateToken;

  await User.update({ token : generateToken }, { where: { id: user.id } });

  return response.success(res, "Success", user);
};

module.exports = { login };
