'use strict';

const express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
	res.render('sample/sample.html');
});

module.exports = router;
