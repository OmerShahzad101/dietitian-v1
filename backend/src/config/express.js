const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const frontRoutes = require('../api/routes/v1/front/index');
const error = require('../api/middlewares/error');
const path = require('path');
const rateLimit = require("express-rate-limit");
const bearerToken = require('express-bearer-token');
const compression = require('compression');
const  env = require ("./vars")
/**
* Express instance
* @public
*/
const app = express();



app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bearerToken());

app.use(methodOverride());
const apiRequestLimiterAll = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 90000
});

app.use("/v1/", apiRequestLimiterAll);

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// compress all responses
app.use(compression());

app.listen( function () {
  console.log("Listening on Port " + env.port);
  console.log("Database Connected");
});


// mount admin api v1 routes
app.use('/v1/front', frontRoutes);



// Front Site Build Path
app.use('/', express.static(path.join(__dirname, '../../build')))
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});



// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;


