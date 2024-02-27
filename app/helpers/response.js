const success = (res, message = "Success", data = []) => {
  return res.json(
    {
      status: true,
      message: message,
      data: data,
    },
    200
  );
};

const error = (res, message = "Error") => {
  return res.json(
    {
      status: false,
      message: message,
    },
    400
  );
};

const message = (res, message = "Success") => {
  return res.json(
    {
      status: true,
      message: message,
    },
    200
  );
};

module.exports = {
  success,
  error,
  message,
};
