'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./paths/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use('/api', _routes2.default);

app.listen(3000, function () {
    console.log('Application listening on port 3000');
});