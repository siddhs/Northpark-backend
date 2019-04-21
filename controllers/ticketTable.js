let ticketModel =  require('../models/ticket');
let db = require('../database');

async function getAllData() {
    try {
        return await ticketModel.find({});
    }
    catch (err) {
        console.log(err);
    }
}

async function getTopRowData() {
    try{
        let doc = await ticketModel.findOne({});
        console.log(doc);
        return doc;
    }
    catch(err){
        console.log(err);
    }
}

async function getFiledAgainstChartData() {
    chartData = [];
    try {
        let systems = await ticketModel.find({"FiledAgainst":"Systems"}).count();
        systemsData = {"key":"Systems", "value":systems};
        let access = await ticketModel.find({"FiledAgainst":"Access/Login"}).count();
        accessData = {"key":"Access/Login", "value":access};
        let software = await ticketModel.find({"FiledAgainst":"Software"}).count();
        softwareData = {"key":"Software", "value":software};
        let hardware = await ticketModel.find({"FiledAgainst":"Hardware"}).count();
        hardwareData = {"key":"Hardware", "value":hardware};
        chartData.push(systemsData);
        chartData.push(accessData);
        chartData.push(softwareData);
        chartData.push(hardwareData);
        return chartData;
    }
    catch (err) {
        console.log(err);
    }
}

async function getSeverityChartData() {
    chartData = [];
    try {
        let unclassified = await ticketModel.find({"Severity":"0 - Unclassified"}).count();
        unclassifiedData = {"type":"Unclassified", "count": unclassified};
        let minor = await ticketModel.find({"Severity":"1 - Minor"}).count();
        minorData = {"type":"Minor", "count": minor};
        let normal = await ticketModel.find({"Severity":"2 - Normal"}).count();
        normalData = {"type":"Normal", "count": normal};
        let major = await ticketModel.find({"Severity":"3 - Major"}).count();
        majorData = {"type":"Major", "count": major};
        let critical = await ticketModel.find({"Severity":"4 - Critical"}).count();
        criticalData = {"type":"Critical", "count": critical};

        chartData.push(unclassifiedData);
        chartData.push(minorData);
        chartData.push(normalData);
        chartData.push(majorData);
        chartData.push(criticalData);
        return chartData;
    }
    catch (e) {
        console.log(e);
    }
}

async function getPriorityChartData() {
    charData = [];
    try {
        let unassigned = await ticketModel.find({"Priority":"0 - Unassigned"}).count();
        unassignedData = {"priorityType":"Unassigned", "priorityCount":unassigned};
        let low = await ticketModel.find({"Priority":"1 - Low"}).count();
        lowData = {"priorityType":"Low", "priorityCount":low};
        let medium = await ticketModel.find({"Priority":"2 - Medium"}).count();
        mediumData = {"priorityType":"Medium", "priorityCount":medium};
        let high = await ticketModel.find({"Priority":"3 - High"}).count();
        highData = {"priorityType":"High", "priorityCount":high};

        charData.push(unassignedData);
        charData.push(lowData);
        charData.push(mediumData);
        charData.push(highData);
        return charData;
    }
    catch (err) {
        console.log(err);
    }
}

async function getSatisfactionChartData() {
    chartData = [];
    try {
        let unknown = await ticketModel.find({"Satisfaction":"0 - Unknown"}).count();
        unknownData = {"satisfactionType":"unknown", "satisfaction": unknown}
        let unsatisfied = await ticketModel.find({"Satisfaction":"1 - Unsatisfied"}).count();
        unsatisfiedData = {"satisfactionType":"Unsatisfied", "satisfaction": unsatisfied}
        let satisfied = await ticketModel.find({"Satisfaction":"2 - Satisfied"}).count();
        satisfiedData = {"satisfactionType":"Satisfied", "satisfaction": satisfied}
        let highlySatisfied = await ticketModel.find({"Satisfaction":"3 - Highly satisfied"}).count();
        highlySatisfiedData = {"satisfactionType":"Highly Satisfied", "satisfaction": highlySatisfied}

        chartData.push(unknownData);
        chartData.push(unsatisfiedData);
        chartData.push(satisfiedData);
        chartData.push(highlySatisfiedData)
        return chartData;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.getTopRowData = getTopRowData;
module.exports.getAllData = getAllData;
module.exports.getFiledAgainstChartData = getFiledAgainstChartData;
module.exports.getSeverityChartData = getSeverityChartData;
module.exports.getPriorityChartData = getPriorityChartData;
module.exports.getSatisfactionChartData = getSatisfactionChartData;

