const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/tenKdb');

//id field is automatically created in the schema and populated with the objectId type.
const sessionSchema = mongoose.Schema ({
    user: String,
    date: Number, // using a number for date so I can just use the date object instantiation and methods with unix epoch.
    length: Number, //the number of ms practiced
    category: String,
    activity: String,
    notes: String,
    createMethod: String
});

const Session = mongoose.model('Session', sessionSchema);

//save method
//all creation methods for sessions will be singular so there wont need to be any batch saving
//take the single created document and save it to the db
async function save (doc) {
    const session = new Session ({
        user: doc.user,
        date: doc.date,
        length: doc.length,
        category: doc.category,
        activity: doc.activity,
        notes: doc.notes,
        createMethod: doc.createMethod
    });
    const saved = await session.save();
    return saved;
};

//retrieve method
//find all sessions with the current users username on it
async function retrieve(user) {
    const sessions = await Session.find({ user: user });
    return sessions;
};

exports.retrieve = retrieve;
exports.save = save;