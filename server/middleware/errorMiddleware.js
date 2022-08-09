const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log("LOggRD TO ERRPR");
  res.status(statusCode);
  res.json({
    message: err.message,
  });

  // next();
};

module.exports = errorHandler;
