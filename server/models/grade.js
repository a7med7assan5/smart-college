const mongoose = require('mongoose');
const gradeSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: 'Please Enter students ID'
    },
    courseId: { type: String, required: 'Please Enter course ID' },
    semester_time: { type: String },
    gradeType: { type: String, required: 'Please Enter grade type' },
    score: { type: Number, required: true }

});
module.exports = mongoose.model('grade', gradeSchema);