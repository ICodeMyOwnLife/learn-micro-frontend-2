module.exports = app => {
  app.use((req, res, next) => {
    console.log(
      `remote: ${req.connection.remoteAddress}:${req.connection.remotePort} - originalUrl: ${req.originalUrl}`,
    );
    res.header('Access-Control-Allow-Origin', '*');
    setTimeout(next, 2000);
  });
};
