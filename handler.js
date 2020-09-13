'use strict'
const app = require('./index');
Contact = require('./contactModel');
const connectToDatabase = require('./db');

exports.index = function (event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    connectToDatabase().then(() => {
        Contact.find()
        .then(contacts => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(contacts)
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' }
            });
        });
    });
};

exports.new = function (event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    connectToDatabase().then(() => {
        Contact.create(JSON.parse(event.body))
        .then(contact => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(contact)
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the contact.'
            })
        })
    })
};

exports.view = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    connectToDatabase().then(() => {
        Contact.findById(event.pathParameters.id)
        .then(contact => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(contact)
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: {'Content-Type': 'text/plain'},
                body: 'Could not fetch the contact.'
            })
        })
    })
};

exports.update = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    connectToDatabase().then(() => {
        Contact.findByIdAndUpdate(event.pathParameters.id,
            JSON.parse(event.body), {new:true})
        .then(contact => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(contact)
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: {'Content-Type': 'text/plain'},
                body: 'Could not update the contact.'
            })
        })
    })
};

exports.delete = function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    connectToDatabase().then(() => {
        Contact.findByIdAndRemove(event.pathParameters.id)
        .then(contact => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Removed the contact!',
                    contact: contact
                })
            })
        })
        .catch(err => {
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: {'Content-Type': 'text/plain'},
                body: 'Could not delete the contact.'
            })
        })
    })
};
