const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: { type: String, required: 'please enter id' },
    role: { type: String, default: 'student', enum: ["student", "teacher", "admin"] },
    name: { type: String, required: 'Please Enter Student Name' },
    email: { type: String, required: 'Please Enter Student Email' },
    password: { type: String, required: 'Please Enter Student Password', min: 8 },
    dataOfJoin: { type: String },
    accessToken: { type: String },
    courses: [
        {
            Id: { type: String },
            status: { type: String, default: 'new', enum: ["new", "pass", "fail",] },
            semester_time: { type: String },
        }
    ]
});

module.exports = mongoose.model('user', userSchema);