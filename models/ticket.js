let mongoose = require('mongoose');

let ticketSchema = new mongoose.Schema({
    ticket: Number,
    Requestor: Number,
    RequestorSeniority: String,
    ITOwner: Number,
    FiledAgainst: String,
    TicketType: String,
    Severity: String,
    Priority: String,
    daysOpen: Number,
    Satisfaction: String,
    "Ticket Creation Date": String
});

let ticketModel = mongoose.model('tickets', ticketSchema);
module.exports = ticketModel;
