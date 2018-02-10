const express = require('express');


const app = require('../express');

const router = express.Router();

router.get('/health', (req, res) => res.json('OK'));

module.exports = router;

