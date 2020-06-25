const User = require('../models/user');
const Course = require('../models/course');
const Grade = require('../models/grade');
const Attendance = require('../models/attendance');

const teacherService = require('../service/teacher-student');
const course = require('../models/course');

// ----------------------My Courses-----------------------
exports.myCourses = async(req, res, next) => { //[]
    let id = req.params.id;
    try {
        let emptyarr = []
        let newattribute = 'new';
        // let usercourses = await User.findOne({ _id: id, courses: { $elemMatch: { status: newattribute } } }, {  'courses': 1 })
        let usercourses = await User.aggregate([
            // find the relevant documents in the collection
            // uses index, if defined on documents.x
            { $match: { _id: id, courses: { $elemMatch: { "status": newattribute } } } },
            // flatten array documennts
            { $unwind: "$courses" },
            // match for elements, "documents" is no longer an array
            { $match: { _id: id, "courses.status": newattribute } },
            // re-create documents array

        ]);
        if (usercourses) {
            let arr = [];
            for (let i = 0; i < usercourses.length; i++) {
                arr[i] = usercourses[i].courses
            }
            res.json(arr);
        } else if (!usercourses) {
            res.json(emptyarr)
        }

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Adding");
    }
}
exports.myCoursesByStatus = async(req, res, next) => { //[]
        let id = req.params.id;
        let coursestatus = req.params.status;
        try {
            let emptyarr = []
            let newattribute = coursestatus;
            // let usercourses = await User.findOne({ _id: id, 'courses.status': newattribute }, { password: 0, })
            let usercourses = await User.aggregate([
                // find the relevant documents in the collection
                // uses index, if defined on documents.x
                { $match: { _id: id, courses: { $elemMatch: { "status": newattribute } } } },
                // flatten array documennts
                { $unwind: "$courses" },
                // match for elements, "documents" is no longer an array
                { $match: { _id: id, "courses.status": newattribute } },
                // re-create documents array

            ]);
            if (usercourses) {
                let arr = [];
                for (let i = 0; i < usercourses.length; i++) {
                    arr[i] = usercourses[i].courses
                }
                res.json(arr);
            } else if (!usercourses) {
                res.json(emptyarr)
            }


        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Adding");
        }
    }
    // -------------------Add Task--------------------------
exports.addSemesterTask = async(req, res, next) => { //[]
    let taskType = req.body.type;
    let taskPath = req.body.path;
    let courseId = req.params.id;
    let semester_time = req.params.semester;
    try {
        let checkCourseId = await Course.findOne({
            courseCode: courseId
        });
        let checkfortask = await teacherService.searchfortask(courseId, semester_time, taskType);
        if (!checkCourseId) {
            return res.status(400).json({

                msg: "course Not Found"
            });
        } else if (checkfortask) {
            return res.status(400).json({

                msg: "this name of task was added before"
            });
        } else {
            teacherService.addTask(courseId, semester_time, taskType, taskPath).then((courseId) => {
                if (courseId) {
                    res.json({ msg: 'Task Added Successfuly' });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: 'Internal Server Error' });
            })
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Adding");
    }
}

// -------------------Delete Semester Task--------------------------
exports.deleteSemesterTask = async(req, res, next) => { //[]
    let code = req.params.id;
    let taskname = req.params.taskname;
    let semester_time = req.params.semester;
    try {
        let checkforcourse = await Course.findOne({
            courseCode: code
        });
        if (!checkforcourse) {
            return res.status(400).json({

                msg: "Course Not Found"
            });
        } else {
            teacherService.deleteTask(code, semester_time, taskname).then((task) => {
                if (task) {
                    res.status(201).json({ msg: 'Task Deleted Successfuly' });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "Internal Server Error" });
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Deleting");
    }
}



// -------------------Add Semester Lecture--------------------------
exports.addSemesterLecture = async(req, res, next) => { //[]
    const { lectureNumber, lectureLocation, beacon_id } = req.body
    let courseCode = req.params.id;
    let semester_time = req.params.semester;
    // Course.findOne({ courseCode: courseId, 'semesters.semester_time': semester_time, 'semesters.tasks.type': { $in: taskname } }, { semesters: { $elemMatch: { semester_time: semester_time }
    try {
        let checkCourseId = await Course.findOne({
            courseCode
        });
        let checklectureNumber = await Course.findOne({
            courseCode,
            'semesters.semester_time': semester_time,
            'semesters.lectures.lectureNumber': { $in: lectureNumber }
        }, { semesters: { $elemMatch: { semester_time: semester_time } } });
        if (!checkCourseId) {
            return res.status(400).json({
                msg: "course Not Found"
            });
        } else if (checklectureNumber) {
            return res.status(400).json({
                msg: "This Number Of Lecture Was Added Before"
            });
        } else {
            teacherService.addLecture(courseCode, semester_time, lectureNumber, lectureLocation, beacon_id).then((lecture) => {
                if (lecture) {
                    res.json({ msg: 'Lecture Added Successfuly' });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: 'Internal Server Error' });
            })
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Adding");
    }
}


// -------------------Add Semester Attendance--------------------------
exports.addSemesterAttendance = async(req, res, next) => { //[]
    const { lectureNumber, beacon_id } = req.body
    let courseId = req.params.id;
    let semester_time = req.params.semester;
    try {
        let Students = await teacherService.getCourseSemesterStudents(courseId, semester_time);

        let checkCourseId = await Course.findOne({
            courseCode: courseId
        });
        let checkAttendance = await Attendance.findOne({
            courseId,
            lectureNumber,
            semester_time
        });
        let checklectureNumber = await Course.findOne({
            courseCode: courseId,
            'semesters.semester_time': semester_time,
            'semesters.lectures.lectureNumber': { $in: lectureNumber }
        }, { semesters: { $elemMatch: { semester_time: semester_time } } });
        let checkbeacon_id = await Course.findOne({
            courseCode: courseId,
            'semesters.semester_time': semester_time,
            'semesters.lectures.lectureNumber': { $in: lectureNumber },
            'semesters.lectures.beacon_id': { $in: beacon_id }
        }, { semesters: { $elemMatch: { semester_time: semester_time } } });
        if (!checkCourseId) {
            return res.status(400).json({

                msg: "course Not Found"
            });
        }
        if (checkAttendance) {
            return res.status(400).json({

                msg: "This Lecture Attendance Was Added Before"
            });
        } else if (!checklectureNumber) {
            return res.status(400).json({

                msg: "No Lecture With This Number"
            });
        } else if (!checkbeacon_id) {
            return res.status(400).json({

                msg: "The Beacon ID Is Wrong"
            });
        } else {
            for (var i = 0; i < Students.length; i++) {
                let stu = Students[i];
                teacherService.addSemesterAttendance(stu._id, courseId, semester_time, lectureNumber, beacon_id);
            }
            res.status(200).json({
                icon: '&#xE876;',
                style: 'success',
                msg: "Lecture Attendance Added Successfuly"
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Adding");
    }
}

// -------------------get Student Total Attendance Attendance--------------------------
exports.semesterStudentTotalAttendance = async(req, res, next) => { //[]
    let courseId = req.params.courseCode
    let studentId = req.params.id;
    let semester_time = req.params.semester;
    try {
        let numberofattendance = await Attendance.find({ courseId, studentId, semester_time, status: 'true' });
        let userdata = await User.findOne({ _id: studentId }, { password: 0, accessToken: 0 });
        if (numberofattendance) {
            total = { totalattendance: numberofattendance.length };
            res.json({ user: userdata, totalattendance: total });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}

// -------------------View Attendance--------------------------
exports.viewSemesterAttendance = async(req, res, next) => { //[]
    let courseId = req.params.courseCode;
    let lectureNumber = req.params.lectureNumber;
    let studentId = req.params.id;
    let semester_time = req.params.semester;
    try {
        teacherService.viewAttendance(studentId, courseId, semester_time, lectureNumber).then((attendance) => {
            if (attendance) {
                res.json(attendance);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}

exports.viewSemesterGrades = async(req, res, next) => { //[]
    let courseId = req.params.courseCode;
    let gradeType = req.params.gradeType;
    let studentId = req.params.id;
    let semester_time = req.params.semester;

    try {
        teacherService.viewGrades(studentId, courseId, semester_time, gradeType).then((grade) => {
            if (grade) {
                res.json(grade);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}
exports.studentTotalGrades = async(req, res, next) => { //[]
    let courseId = req.params.courseCode
    let studentId = req.params.id;
    let semester_time = req.params.semester;
    try {
        let totalGrades = await Grade.find({ courseId, studentId, semester_time });
        let userdata = await User.findOne({ _id: studentId }, { password: 0, accessToken: 0 });
        if (totalGrades) {
            let totalg = 0;
            for (let i = 0; i < totalGrades.length; i++) {
                totalg = totalg + totalGrades[i].score;
            }
            total = { totalGrades: totalg };
            res.json({ user: userdata, totalGrades: total });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}
exports.totalCourseSemesterGrades = async(req, res, next) => { //[]
    let courseCode = req.params.courseCode;
    let semester_time = req.params.semester;
    try {
        let totalGrades = await Course.findOne({ courseCode }, { _id: 0, courseCode: 1, semesters: { $elemMatch: { semester_time: semester_time } } })
        let totalSemesterGrades = totalGrades.semesters[0];
        if (totalGrades) {
            let totalg = 0;
            for (let i = 0; i < totalSemesterGrades.grades.length; i++) {
                totalg = totalg + totalSemesterGrades.grades[i].grade;
            }
            total = { totalGrades: totalg };
            res.json(total);
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }
}



// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------Student--------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

exports.mySemesterGrades = async(req, res, next) => { //[]
    let id = req.params.id;
    let courseId = req.params.courseCode;
    let gradeType = req.params.gradeType;
    let semester_time = req.params.semester;
    teacherService.MyGrades(id, courseId, semester_time, gradeType).then((Grades) => {
        if (Grades) {
            res.json(Grades);
        } else {
            res.status(404).json({ msg: 'Your Courses Not Found' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}


exports.semesterAttendme = async(req, res, next) => { //[]
    let studentId = req.params.id
    let courseId = req.params.courseCode;
    let lectureNumber = req.body.lectureNumber;
    let beacon_id = req.body.beacon_id;
    let semester_time = req.params.semester;
    try {
        let checkbeacon_id = await Attendance.findOne({
            studentId,
            courseId,
            semester_time,
            lectureNumber,
            beacon_id
        });
        if (!checkbeacon_id) {
            return res.status(400).json({

                msg: "Lecture Number Or Beacon ID Is Wrong"
            });
        } else {
            teacherService.attendme(studentId, courseId, semester_time, lectureNumber, beacon_id).then((data) => {
                if (data) {
                    res.json({ msg: 'You Attended successfuly' });
                } else {
                    res.status(500).json({ msg: "something wrong in your data" });
                }
            });
        }

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }
}


exports.viewMySemesterAttendance = async(req, res, next) => { //[]
    let id = req.params.id;
    let courseId = req.params.courseCode;
    let semester_time = req.params.semester;
    try {
        teacherService.viewMyAttendance(id, courseId, semester_time).then((sheet) => {
            if (sheet) {
                res.json(sheet);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}


exports.viewSemesterAttendanceReport = async(req, res, next) => { //[]
    let courseId = req.params.courseCode;
    let semester_time = req.params.semester;
    try {


        let getCourseLectures = await Course.findOne({ courseCode: courseId, 'semesters.semester_time': semester_time }, { "semesters.lectures.lectureNumber": 1, _id: 0, semesters: { $elemMatch: { semester_time: semester_time } } });
        if (getCourseLectures) {

            let courselectures = getCourseLectures.semesters[0].lectures;
            let arrayoflectures = [];
            for (let i = 0; i < courselectures.length; i++) {
                arrayoflectures[i] = courselectures[i].lectureNumber;
            }
            let arrayofattendance = [];
            for (let y = 0; y < arrayoflectures.length; y++) {
                arrayofattendance[y] = await Attendance.find({ courseId, semester_time, lectureNumber: arrayoflectures[y] });
            }
            let arrayoftrueattendance = [];
            for (let y = 0; y < arrayoflectures.length; y++) {
                arrayoftrueattendance[y] = await Attendance.find({ courseId, semester_time, lectureNumber: arrayoflectures[y], status: true });
            }
            let arrayoffalseattendance = [];
            for (let y = 0; y < arrayoflectures.length; y++) {
                arrayoffalseattendance[y] = await Attendance.find({ courseId, semester_time, lectureNumber: arrayoflectures[y], status: false });
            }

            let arrayofreport = [];

            for (let z = 0; z < arrayoflectures.length; z++) {
                let lectureNumber = arrayoflectures[z];

                let attendance = arrayofattendance[z];
                let numberOfAttendance = attendance.length;

                let trueAttendance = arrayoftrueattendance[z];
                let numberOfTrueAttendance = trueAttendance.length;

                let FalseAttendance = arrayoffalseattendance[z];
                let numberOfFalseAttendance = FalseAttendance.length;

                arrayofreport[z] = { lectureNumber, numberOfAttendance, numberOfTrueAttendance, numberOfFalseAttendance }
            }

            return res.status(200).json(
                arrayofreport
            );
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}



exports.viewSemesterGradesReport = async(req, res, next) => { //[]
    let courseId = req.params.courseCode;
    let semester_time = req.params.semester;

    try {
        let getCourseGrades = await Course.findOne({ courseCode: courseId, 'semesters.semester_time': semester_time }, { _id: 0, semesters: { $elemMatch: { semester_time: semester_time } } });
        if (getCourseGrades) {

            let courseGrades = getCourseGrades.semesters[0].grades;
            let arrayofGrades = [];
            for (let i = 0; i < courseGrades.length; i++) {
                arrayofGrades[i] = [courseGrades[i].type, courseGrades[i].grade];
            }
            let arrayofStudentsGades = [];
            for (let y = 0; y < arrayofGrades.length; y++) {
                arrayofStudentsGades[y] = await Grade.find({ courseId, semester_time, gradeType: arrayofGrades[y][0] });
            }

            let arrayOfGradesUnder50Percent = [];
            for (let y = 0; y < arrayofGrades.length; y++) {
                let Percent_50 = (arrayofGrades[y][1] * 50) / 100;
                arrayOfGradesUnder50Percent[y] = await Grade.find({ courseId, semester_time, gradeType: arrayofGrades[y][0], score: { $lt: Percent_50 } });
            }

            let arrayOfGradesUnder65Percent = [];
            for (let y = 0; y < arrayofGrades.length; y++) {
                let Percent_50 = (arrayofGrades[y][1] * 50) / 100;
                let Percent_65 = (arrayofGrades[y][1] * 65) / 100;
                arrayOfGradesUnder65Percent[y] = await Grade.find({ courseId, semester_time, gradeType: arrayofGrades[y][0], score: { $lt: Percent_65, $gte: Percent_50 } });
            }

            let arrayOfGradesUnder75Percent = [];
            for (let y = 0; y < arrayofGrades.length; y++) {
                let Percent_65 = (arrayofGrades[y][1] * 65) / 100;
                let Percent_75 = (arrayofGrades[y][1] * 75) / 100;
                arrayOfGradesUnder75Percent[y] = await Grade.find({ courseId, gradeType: arrayofGrades[y][0], score: { $lt: Percent_75, $gte: Percent_65 } });
            }

            let arrayOfGradesUnder85Percent = [];
            for (let y = 0; y < arrayofGrades.length; y++) {
                let Percent_85 = (arrayofGrades[y][1] * 85) / 100;
                let Percent_75 = (arrayofGrades[y][1] * 75) / 100;
                arrayOfGradesUnder85Percent[y] = await Grade.find({ courseId, semester_time, gradeType: arrayofGrades[y][0], score: { $lt: Percent_85, $gte: Percent_75 } });
            }

            let arrayOfGradesAbove85Percent = [];
            for (let y = 0; y < arrayofGrades.length; y++) {
                let Percent_85 = (arrayofGrades[y][1] * 85) / 100;
                arrayOfGradesAbove85Percent[y] = await Grade.find({ courseId, semester_time, gradeType: arrayofGrades[y][0], score: { $gte: Percent_85 } });
            }

            let arrayofGradesreport = [];
            for (let z = 0; z < arrayofGrades.length; z++) {
                let GradeType = arrayofGrades[z][0];
                let GradeGrade = arrayofGrades[z][1];


                let Student = arrayofStudentsGades[z];
                let numberOfStudent = Student.length;

                let gradesUnder50 = arrayOfGradesUnder50Percent[z];
                let numberOfGradesUnder50 = gradesUnder50.length;

                let gradesUnder65 = arrayOfGradesUnder65Percent[z];
                let numberOfGradesUnder65 = gradesUnder65.length;

                let gradesUnder75 = arrayOfGradesUnder75Percent[z];
                let numberOfGradesUnder75 = gradesUnder75.length;

                let gradesUnder85 = arrayOfGradesUnder85Percent[z];
                let numberOfGradesUnder85 = gradesUnder85.length;

                let gradesAbove85 = arrayOfGradesAbove85Percent[z];
                let numberOfGradesAbove85 = gradesAbove85.length;

                arrayofGradesreport[z] = { GradeType, GradeGrade, numberOfStudent, numberOfGradesUnder50, numberOfGradesUnder65, numberOfGradesUnder75, numberOfGradesUnder85, numberOfGradesAbove85 };
            }

            return res.status(200).json(
                arrayofGradesreport
            );
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Viewing");
    }

}