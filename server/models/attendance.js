const mongoose = require('mongoose');
const attendanceSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: 'Please Enter students ID'
    },
    courseId: { type: String, required: 'Please Enter course ID' },
    semester_time: { type: String },
    lectureNumber: { type: Number, required: 'Please Enter Lecture Number' },
    Date: { type: Date, default: Date.now() },
    status: { type: Boolean, default: false },
    beacon_id: { type: String }
});
module.exports = mongoose.model('attendance', attendanceSchema);