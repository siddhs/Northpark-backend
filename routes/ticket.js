const express = require('express');
const router = express.Router();
const ticketTable = require('../controllers/ticketTable');
const cors = require('cors');

router.get('/', async function (req, res, next) {
        const data = await ticketTable.getAllData();
        res.send(JSON.stringify(data));
});

router.get('/filedagainst', cors({origin: 'http://localhost:8080'}), async function (req, res, next) {
    const data = await ticketTable.getFiledAgainstChartData();
    res.send(JSON.stringify(data));
});

router.get('/severitychart', cors({origin: 'http://localhost:8080'}), async function (req, res, next) {
    const data = await ticketTable.getSeverityChartData();
    res.send(JSON.stringify(data));
});

router.get('/prioritychart', cors({origin: 'http://localhost:8080'}), async function (req, res, next) {
   const data = await ticketTable.getPriorityChartData();
   res.send(JSON.stringify(data))
});

router.get('/satisfactionchart', cors({origin: 'http://localhost:8080'}), async function (req, res, next) {
    const data = await ticketTable.getSatisfactionChartData();
    res.send(JSON.stringify(data));
});
module.exports = router;
