const handelHomeGetController = (async = (req, res, next) => {
  try {
    return res.status(200).json({ msg: "Hello from home!" });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  handelHomeGetController,
};
