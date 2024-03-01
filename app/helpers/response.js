const success = (res, message = "Success", data = [], code = 200) => {
  return res.json(
    {
      status: true,
      message: message,
      data: data,
    },
    code
  );
};

const error = (res, message = "Error", code = 400) => {
  return res.json(
    {
      status: false,
      message: message
    },
    code
  );
};

const message = (res, message = "Success", status) => {
  return res.json(
    {
      status: status,
      message: message,
    },
    200
  );
};

module.exports = {
  success,
  error,
  message
};
