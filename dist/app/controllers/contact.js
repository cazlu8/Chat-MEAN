module.exports = function() {
    var Contact = app.models.contact,
        sanitize = require('mongo-sanitize');
    var contactController = {
        listContacts: function(request, response) {
            Contact.find().populate('emergency').exec()
                .then(function(contacts) {
                    response.json(contacts);
                })
                .end(function(error) {
                    console.log(error);
                    res.status(500).json(error);
                });
        },
        getContact: function(request, response) {
            var _id = request.params.id;
            Contact.findById(_id).exec()
                .then(function(contact) {
                    if (!contact)
                        throw new Error('Contact not found!');
                    response.json(contact);
                })
                .end(function(error) {
                    console.log(error);
                    res.status(404).json(error);
                });
        },
        removeContact: function(request, response) {
            var _id = sanitize(request.params.id);
            Contact.remove({
                    '_id': _id
                }).exec()
                .then(function() {
                    response.status(204).end();
                })
                .end(function(error) {
                    console.log(error);
                });
        },
        saveContact: function(request, response) {
            var _id = request.body._id;
            var data = {
                name: request.body.name,
                email: request.body.email,
                emergency: request.body.emergency || null
            }
            if (_id) {
                contactController.update(response, _id, data);
            } else {
                contactController.create(response, data);
            }
        },
        create: function(response, data) {
            Contact.create(data)
                .then(function(contact) {
                    response.status(201).json(contact);
                })
                .end(function(error) {
                    console.log(error);
                    response.status(500).json(error);
                });
        },
        update: function(response, _id, data) {
            Contact.findByIdAndUpdate(_id, data).exec()
                .then(function(contact) {
                    response.json(contact);
                })
                .end(function(error) {
                    console.log(error);
                    response.status(500).json(error);
                });
        }
    };
    return contactController;
};