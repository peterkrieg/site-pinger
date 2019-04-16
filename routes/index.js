const express = require('express');

const validate = require('express-validation');

const Joi = require('joi');

const router = express.Router();

const testValidation = {
	body: {
		message: Joi.string().required(),
	},
};

router.get('/health', (req, res) => res.json('OK'));

router.post('/test', validate(testValidation), (req, res) => {
	console.log(req.body);
	res.send('hello');
});


module.exports = router;

