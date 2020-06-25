const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const TeacherStudentController = require('../controllers/teacher-student-Controllers');


router.post('/login', adminController.login); //mo4trk m3 admin w student w teacher

router.get('/profile/:id', adminController.profile); //mo4trk m3 admin w student w teacher

// ------------------------------------------------------------------------------------------------
// --------------------------------------Admin Only----------------------------------------------
// ------------------------------------------------------------------------------------------------

// ----------------POST Requests----------------

router.post('/add/user', adminController.addUser);

router.post('/add/user/course/:id', adminController.addUserCourse);

router.post('/add/course', adminController.addCourse);

router.post('/add/course/semester/:courseCode', adminController.addCourseSemester);


router.post('/add/course/semester/grade/:courseCode/:semester', adminController.addCourseSemesterGrade);

router.post('/add/course/semester/student/grade/:courseCode/:semester', adminController.addSemesterGrade); //mo4trk m3 teacher



// ----------------GET Requests----------------
router.get('/users', adminController.getAllUsers);

router.get('/users/:role', adminController.getUserByRole);


router.get('/user/:id/profile', adminController.getUserProfile);


router.get('/user/:id/courses', adminController.UserCourses);

router.get('/courses', adminController.getAllCourses);

router.get('/courses/active', adminController.getActiveCourses);


router.get('/courses/:courseDepartment', adminController.getDepartmentCourses);


router.get('/course/:courseCode', adminController.getCourseData);//-------------------


router.get('/course/semester/:courseCode/:semester', adminController.getCourseSemesterData);





router.get('/course/semester/students/:courseCode/:semester', adminController.getCourseStudents); //mo4trk m3 teacher w student


// ----------------PUT Requests----------------

router.put('/update/user/:id', adminController.updateUser);

router.put('/update/course/:courseCode', adminController.updateCourse);

router.put('/update/course/semester/student/grade/:id/:courseCode/:semester', adminController.updateSemesterGrade);

router.put('/change/course/status/:courseCode/:status', adminController.changeCourseStatus);


// ----------------DELETE Requests----------------

router.delete('/delete/user/:id', adminController.deleteUser);

router.delete('/delete/user/course/:id/:courseCode', adminController.deleteUserCourse);

router.delete('/delete/course/:courseCode', adminController.deleteCourse);

router.delete('/delete/course/semester/grade/:courseCode/:semester/:type', adminController.deleteCourseSemesterGrade);


// ------------------------------------------------------------------------------------------------
// --------------------------------------Teacher Only----------------------------------------------
// ------------------------------------------------------------------------------------------------

// ----------------POST Requests----------------

router.post('/add/course/semester/task/:id/:semester', TeacherStudentController.addSemesterTask);

router.post('/add/course/semester/lecture/:id/:semester', TeacherStudentController.addSemesterLecture);

router.post('/add/course/semester/attendance/:id/:semester', TeacherStudentController.addSemesterAttendance);


// ----------------GET Requests----------------
router.get('/my/courses/:id', TeacherStudentController.myCourses); //mo4trk m3 student
router.get('/my/courses/bystatus/:id/:status', TeacherStudentController.myCoursesByStatus); //mo4trk m3 student



router.get('/course/semester/attendance/sheet/:id/:courseCode/:lectureNumber/:semester', TeacherStudentController.viewSemesterAttendance);

router.get('/course/semester/student/total/attendance/:id/:courseCode/:semester', TeacherStudentController.semesterStudentTotalAttendance);


router.get('/course/semester/grade/sheet/:id/:courseCode/:gradeType/:semester', TeacherStudentController.viewSemesterGrades);

router.get('/course/semester/student/total/grade/:id/:courseCode/:semester', TeacherStudentController.studentTotalGrades);

router.get('/course/semester/total/grades/:courseCode/:semester', TeacherStudentController.totalCourseSemesterGrades);


// ----------------DELETE Requests----------------

router.delete('/delete/course/semester/task/:id/:taskname/:semester', TeacherStudentController.deleteSemesterTask);





// ------------------------------------------------------------------------------------------------
// --------------------------------------Student Only----------------------------------------------
// ------------------------------------------------------------------------------------------------


// ----------------POST Requests----------------

router.post('/course/semester/attend/me/:id/:courseCode/:semester', TeacherStudentController.semesterAttendme);



// ----------------GET Requests----------------
router.get('/course/semester/my/grades/:id/:courseCode/:gradeType/:semester', TeacherStudentController.mySemesterGrades);

router.get('/course/semester/my/attendance/:id/:courseCode/:semester', TeacherStudentController.viewMySemesterAttendance);



router.get('/course/semester/attendance/report/:courseCode/:semester', TeacherStudentController.viewSemesterAttendanceReport);

router.get('/course/semester/grades-report/:courseCode/:semester', TeacherStudentController.viewSemesterGradesReport);


router.put('/calculate/my/credit/hours/:id', adminController.calculatMyCreditHours);






router.put('/change/student/course/status/:courseCode', adminController.decidePassOrFail);






























// router.post('/login', adminController.login);

// router.get('/user/:userId', adminController.allowIfLoggedin, adminController.getUser);

// router.get('/users', adminController.allowIfLoggedin, adminController.grantAccess('readAny', 'profile'), adminController.getUsers);

// router.put('/user/:userId', adminController.allowIfLoggedin, adminController.grantAccess('updateAny', 'profile'), adminController.updateUser);

// router.delete('/user/:userId', adminController.allowIfLoggedin, adminController.grantAccess('deleteAny', 'profile'), adminController.deleteUser);

module.exports = router;