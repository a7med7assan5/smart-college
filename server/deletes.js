
// --------------------get User By Id/Name ----------------------
// exports.getUser = async (req, res, next) => {
//     let id = req.body._id;
//     let name = req.body.name;
//     let role = req.body.role;
//     if (id) {
//         adminService.getUserById(id, role).then((user) => {
//             if (user) {
//                 res.json(user);
//             }
//             else {
//                 res.status(404).json({ msg: 'User Not Found' });
//             }
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json({ msg: 'Internal Server Error' });
//         })
//     }
//     else {
//         adminService.getUserByName(name, role).then((user) => {
//             if (user) {
//                 res.json(user);
//             }
//             else {
//                 res.status(404).json({ msg: 'User Not Found' });
//             }
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json({ msg: 'Internal Server Error' });
//         })
//     }
// }






// --------------------Get User Courses----------------------
// exports.getUserCourses = async (req, res, next) => {
//     let id = req.params.id;
//     try {
//         let checkforUser = await User.findOne({
//             _id: id
//         });
//         if (!checkforUser) {
//             return res.status(400).json({
//                 msg: "User Not Found"
//             });
//         }
//         else {
//             adminService.getUserCourses(id).then((courses) => {
//                 if (courses) {
//                     res.json(courses);
//                 }
//                 else {
//                     res.status(500).json({ msg: "No Courses For This User" });
//                 }
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({ msg: "Internal Server Error" });
//             });
//         }

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");
//     }
// }



// --------------------Get Course By Id/Name---------------------
// exports.getCourse = async (req, res, next) => {
//     let code = req.body.courseCode;
//     let name = req.body.courseName;
//     try {
//         if (code) {
//             adminService.getCourseByCode(code).then((user) => {
//                 if (user) {
//                     res.json(user);
//                 }
//                 else {
//                     res.status(404).json({ msg: 'Course Not Found' });
//                 }
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({ msg: 'Internal Server Error' });
//             })
//         }
//         else {
//             adminService.getCourseByName(name).then((user) => {
//                 if (user) {
//                     res.json(user);
//                 }
//                 else {
//                     res.status(404).json({ msg: 'Course Not Found' });
//                 }
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({ msg: 'Internal Server Error' });
//             })
//         }
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");
//     }
// }
// -------------------Get Students Grades----------------------
// exports.getStudentsGrades = async (req, res, next) => {
//     let code = req.params.courseCode;
//     let gradeType = req.params.gradeType;
//     try {
//         let checkforcourse = await Grade.findOne({
//             courseId: code
//         });
//         if (!checkforcourse) {
//             return res.status(400).json({
//                 msg: "Course Not Found"
//             });
//         }
//         else {
//             adminService.getCourseGrades(code, gradeType).then((grades) => {
//                 if (grades) {
//                     res.json(grades);
//                 }
//                 else {
//                     res.status(404).json({ msg: 'No Grades For This Course Yet' });
//                 }
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({ msg: 'Internal Server Error' });
//             })
//         }

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");
//     }
// }
// -------------------Get Students Grades----------------------
// exports.getCourseGradeType = async (req, res, next) => {
//     let code = req.params.courseCode;
//     let gradeType = req.params.gradeType;
//     try {
//         let checkforcourse = await Grade.findOne({
//             courseId: code
//         });
//         if (!checkforcourse) {
//             return res.status(400).json({
//                 msg: "Course Not Found"
//             });
//         }
//         else {
//             adminService.getCourseGradeType(code, gradeType).then((grades) => {
//                 if (grades) {
//                     res.json(grades);
//                 }
//                 else {
//                     res.status(404).json({ msg: 'No Grades For This Course Yet' });
//                 }
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({ msg: 'Internal Server Error' });
//             })
//         }

//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");
//     }
// }



// // -------------------View Tasks--------------------------
// exports.getTasks = async (req, res, next) => {//[]
//     let courseCode = req.body.courseCode;
//     teacherService.viewTasks(courseCode).then((data) => {
//         if (data) {
//             res.json(data);
//         }
//         else {
//             res.status(404).json({ msg: 'No Tasks Yet' });
//         }
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({ msg: 'Internal Server Error' });
//     })
// }



















// // --------------hna-----------

// router.get('/course/students/grades/:courseCode/:gradeType', adminController.getStudentsGrades); //mo4trk m3 teacher w student

// router.get('/course/grades/:courseCode/:gradeType', adminController.getCourseGradeType);
// router.get('/course/attendance/sheet/:courseCode', TeacherStudentController.viewAttendance);

// router.get('/course/tasks', TeacherStudentController.getTasks); //mo4trk m3 student

// router.get('/user', adminController.getUser);






    // static viewAttendance(studentId, courseId) {
    //     return Attendance.find({ studentId, courseId });
    // }
        // static getlectureattendancetrue(courseId, lectureNumber) {
    //     return Attendance.find({ courseId, lectureNumber, status: "true" })
    // }

