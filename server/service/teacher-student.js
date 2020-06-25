const User = require('../models/user');
const Course = require('../models/course');
const Grade = require('../models/grade');
const Attendance = require('../models/attendance');


class teacherService {


    static getMyCourses(id, status) {
        return User.findOne({ _id: id, 'courses.status': status }, { password: 0, })
    }
    static getCourseData(code) {
        return Course.findOne({ courseCode: code })
    }

    // ---
    static searchfortask(courseId, semester_time, taskname) {
        return Course.findOne({ courseCode: courseId, 'semesters.semester_time': semester_time, 'semesters.tasks.type': { $in: taskname } }, { semesters: { $elemMatch: { semester_time: semester_time } } })
    }

    static addTask(courseId, semester_time, taskType, taskPath) {
        var task = { type: taskType, path: taskPath };
        return Course.findOne({ courseCode: courseId }).updateOne(
            { courseCode: courseId, "semesters.semester_time": semester_time }, // your query, usually match by _id
            { $push: { "semesters.$.tasks": task } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        )
    }

    static deleteTask(courseId, semester_time, taskname) {
        return Course.findOne({ courseCode: courseId }).updateOne(
            { courseCode: courseId, "semesters.semester_time": semester_time }, // your query, usually match by _id
            { $pull: { "semesters.$.tasks": { type: taskname } } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        )

    }

    static viewTasks(courseId) {
        return Course.findOne({ courseCode: courseId }, { 'tasks': 1, _id: 0 })
    }


    static addLecture(courseCode, semester_time, lectureNumber, lectureLocation, beacon_id) {
        var lecture = { lectureNumber, lectureLocation, beacon_id };
        return Course.findOne({ courseCode }).updateOne(
            { courseCode, "semesters.semester_time": semester_time }, // your query, usually match by _id
            { $push: { "semesters.$.lectures": lecture } }, // item(s) to match from array you want to pull/remove
            { multi: true } // set this to true if you want to remove multiple elements.
        )
    }

    static getCourseSemesterStudents(courseCode, semester_time) {
        return User.find({ 'courses.Id': { $in: [courseCode] }, 'courses.semester_time': { $in: [semester_time] }, role: 'student' }, { _id: 1 });

    }
    static addSemesterAttendance(studentId, courseId, semester_time, lectureNumber, beacon_id) {
        const newAttendance = new Attendance({ studentId, courseId, semester_time, lectureNumber, beacon_id });
        return newAttendance.save();
    }


    static async viewAttendance(studentId, courseId, semester_time, lectureNumber) {
        let fakedata = { "_id": "5eba5bb7900576e5c44f34b2", "studentId": studentId, "courseId": courseId, "lectureNumber": lectureNumber, "status": "no attendance", "__v": 0 }

        let checkforattendance = await Attendance.findOne({ studentId, courseId, semester_time, lectureNumber });
        if (checkforattendance) {
            return checkforattendance;
        }
        else if (checkforattendance == null) {
            return fakedata;
        }
    }
    static async viewGrades(studentId, courseId, semester_time, gradeType) {
        let fakedata = { "_id": "5eba5bb7900576e5c44f34b2", "studentId": studentId, "courseId": courseId, "semester_time": semester_time, "gradeType": gradeType, "score": "no grade", "__v": 0 }
        let checkforgarde = await Grade.findOne({ studentId, courseId, semester_time, gradeType });
        if (checkforgarde) {
            return checkforgarde;
        }
        else if (checkforgarde == null) {
            return fakedata;
        }
    }

    // ------------------------------------------------------Student---Service--------------------------------

    static async MyGrades(studentId, courseId, semester_time, gradeType) {
        let fakedata = { "_id": "5eba5bb7900576e5c44f34b2", "studentId": studentId, "courseId": courseId, "semester_time": semester_time, "gradeType": gradeType, "score": "no grade", "__v": 0 }
        let checkforgarde = await Grade.findOne({ studentId, courseId, semester_time, gradeType });
        if (checkforgarde) {
            return checkforgarde;
        }
        else if (checkforgarde == null) {
            return fakedata;
        }
    }

    static attendme(studentId, courseId, semester_time, lectureNumber, beacon_id) {
        return Attendance.findOne({ studentId, courseId, semester_time, lectureNumber, beacon_id }).updateOne(
            {},
            { $set: { status: true } },
            { multi: true }
        )
    }
    static viewMyAttendance(id, courseId, semester_time) {
        return Attendance.find({ studentId: id, courseId, semester_time });
    }





}
module.exports = teacherService;