module.exports = (req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.status(404).end();
  } else {
    next();
  }
};
