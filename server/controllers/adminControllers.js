const User = require('../models/user');
const Course = require('../models/course');
const Grade = require('../models/grade');
const Attendance = require('../models/attendance');


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { roles } = require('../roles');
const adminService = require('../service/admin');
const { equal } = require('assert');
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}
// ---------------------ADD User----------------------
exports.addUser = async(req, res, next) => { //[]
    try {
        const { _id, name, email, password, role, dataOfJoin } = req.body
        const hashedPassword = await hashPassword(password);
        const checkId = await User.findOne({ _id });
        const checkEmail = await User.findOne({ email });
        if (checkId) {
            res.status(400).json({ msg: 'This ID Has Been Used Before' })
        } else if (checkEmail) {
            res.status(400).json({ msg: 'This Email Has Been Used Before' })
        } else if (password.length < 8) {
            res.status(400).json({ msg: 'The Password Must Be Grater Than 8 Characters' })
        } else {
            const newUser = new User({ _id, name, email, password: hashedPassword, role, dataOfJoin });
            const accessToken = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });
            newUser.accessToken = accessToken;
            await newUser.save();
            res.status(200).json({ msg: 'User Added Successfuly', })
        }
    } catch (error) {
        next(error)
    }
}

// ---------------------Login----------------------
exports.login = async(req, res, next) => { //[]
    try {
        const { _id, password } = req.body;
        let user = await User.findOne({ _id });
        if (user) {
            const validPassword = await validatePassword(password, user.password);
            if (!validPassword) {
                res.status(400).json({ msg: 'ID or Password is not correct' });
            } else {
                const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                    expiresIn: "1d"
                });
                await User.findByIdAndUpdate(_id, { accessToken }, { useFindAndModify: false })
                let name = user.name
                var firstName = [];
                var words = name.split(" ");
                firstName.push(words[0]);
                res.status(200).json({
                    _id: user._id,
                    email: user.email,
                    role: user.role,
                    name: firstName,
                    accessToken
                });
            }

        } else if (!user) {
            res.status(400).json('ID or Password is not correct');
        }

    } catch (error) {
        next(error);
    }
}

// ---------------------Profile----------------------
exports.profile = async(req, res, next) => { //[]
    let id = req.params.id;
    adminService.getUserData(id).then((data) => {
        if (data) {
            res.json(data);
        } else {
            res.status(404).json({ msg: 'Your Data Not Found' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}

// --------------------All Users----------------------
exports.getAllUsers = async(req, res, next) => { //[]
    adminService.getAllUsers().then((users) => {
        if (users) {
            res.json(users);
        } else {
            res.status(404).json({ msg: 'No Users Yet' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}

// -------------------Users by Role----------------------
exports.getUserByRole = async(req, res, next) => { //[]
    let role = req.params.role;
    adminService.getUserByRole(role).then((users) => {
        if (users) {
            res.json(users);
        } else {
            res.status(404).json({ msg: 'No Users Yet' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}



// --------------------get User By Id/Name ----------------------
exports.getUserProfile = async(req, res, next) => { //[]
    let id = req.params.id;
    adminService.getUserById(id).then((user) => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ msg: 'User Not Found' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}

// --------------------update User by ID----------------------
exports.updateUser = async(req, res, next) => { //[]
    let id = req.params.id;
    try {
        let checkforUser = await User.findOne({
            _id: id
        });
        if (!checkforUser) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "User Not Found"
            });
        } else {
            User.findOneAndUpdate({ _id: id },
                req.body, { useFindAndModify: false },
                (err) => {
                    if (err) {
                        res.status(404).json({ msg: "Can't Update this User Information" });
                    }
                    res.status(201).json({ msg: "User's Information Updated Successfuly" });
                });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Server");
    }
}

// --------------------Delete User by ID----------------------
exports.deleteUser = async(req, res, next) => { //[]
    let id = req.params.id;
    try {
        let checkforUser = await User.findOne({
            _id: id
        });
        if (!checkforUser) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "User Not Found"
            });
        } else {
            let deleteUserGrade = await Grade.deleteMany({ "studentId": id });
            let deleteUserAttendance = await Attendance.deleteMany({ "studentId": id });
            if (deleteUserGrade && deleteUserAttendance) {
                adminService.deleteUser(id).then((user) => {
                    if (user) {
                        res.status(201).json({ msg: 'User Deleted Successfuly' });
                    }
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({ msg: "Internal Server Error" });
                });
            }

        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Server");
    }
}

exports.UserCourses = async(req, res, next) => { //[]
    let id = req.params.id;
    try {
        let usercourses = [];
        usercourses = await User.findOne({ _id: id }, { _id: 0 })
        let data = usercourses.courses;
        if (data) {
            res.json(data)
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Adding");
    }
}

// --------------------ADD User Course----------------------
exports.addUserCourse = async(req, res, next) => { //[]
    let courseCode = req.body.courseCode;
    let id = req.params.id;
    try {

        let checkforUser = await User.findOne({
            _id: id
        });
        if (checkforUser.role == 'student') {
            let checkforTheCourse = await Course.findOne({
                courseCode
            });
            //-----------
            let getCoursePrerequisite = await Course.findOne({
                courseCode,
            }, { prerequisite: 1 });
            let coursePrerequisite = getCoursePrerequisite.prerequisite;
            let checkforcourse = await User.findOne({
                _id: id,
            }, { courses: { $elemMatch: { Id: courseCode, status: 'pass' } } });
            let checkforcourseregisteration = await User.findOne({
                _id: id,
            }, { courses: { $elemMatch: { Id: courseCode, status: 'new' } } });

            //-----------
            if (coursePrerequisite != '-') {
                let getCoursePrerequisitedata = await Course.findOne({
                    courseName: coursePrerequisite
                });
                let checkforcoursePrerequisiteRegisteredandpass = await User.findOne({
                    _id: id,
                }, { courses: { $elemMatch: { Id: getCoursePrerequisitedata.courseCode, status: 'pass' } } });

                let checkforcoursePrerequisiteRegisteredandfail = await User.findOne({
                    _id: id,
                }, { courses: { $elemMatch: { Id: getCoursePrerequisitedata.courseCode, status: 'fail' } } });

                if (checkforcoursePrerequisiteRegisteredandpass.courses.length == 0 && checkforcoursePrerequisiteRegisteredandfail.courses.length == 0) {
                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "You Must Resigster" + " " + getCoursePrerequisitedata.courseName + " " + "Before" + " " + checkforTheCourse.courseName
                    });
                } else if (!checkforUser) {
                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "User Not Found"
                    });
                } else if (checkforcourse.courses.length > 0) {

                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "This User Had Register This Course Before And Passed It"
                    });

                } else if (checkforcourseregisteration.courses.length > 0) {

                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "This User Registered This Course"
                    });
                } else if (!checkforTheCourse) {

                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "This Course Not Found"
                    });
                } else {
                    adminService.addUserCourse(id, courseCode).then((course) => {

                        if (course) {
                            res.status(200).json({ msg: 'course is added successfuly' });
                        } else {
                            res.status(500).json({ msg: "There Is No Opened Semester For This Course Yet" });
                        }
                    });
                }
            } else {
                if (!checkforUser) {
                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "User Not Found"
                    });
                } else if (checkforcourse.courses.length > 0) {
                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "This User Had Register This Course Before And Passed It"
                    });
                } else if (checkforcourseregisteration.courses.length > 0) {
                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "This User Registered This Course"
                    });
                } else if (!checkforTheCourse) {
                    return res.status(400).json({
                        icon: '&#xE5CD;',
                        style: 'error',
                        msg: "This Course Not Found"
                    });
                } else {
                    adminService.addUserCourse(id, courseCode).then((course) => {
                        if (course) {
                            res.status(200).json({ msg: 'course is added successfuly' });
                        } else {
                            res.status(500).json({ msg: "There Is No Opened Semester For This Course Yet" });
                        }
                    });
                }

            }
        } else if (checkforUser.role == 'teacher') {
            let checkforcourseregisteration = await User.findOne({
                _id: id,
            }, { courses: { $elemMatch: { Id: courseCode, status: 'new' } } });
            if (checkforcourseregisteration.courses.length > 0) {

                return res.status(400).json({
                    icon: '&#xE5CD;',
                    style: 'error',
                    msg: "This User Registered This Course"
                });
            } else {
                adminService.addUserCourse(id, courseCode).then((course) => {
                    if (course) {
                        res.status(200).json({ msg: 'course is added successfuly' });
                    } else {
                        res.status(500).json({ msg: "There Is No Opened Semester For This Course Yet" });
                    }
                });
            }
        }


        //-------------------


    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

// --------------------Delete User Course----------------------
exports.deleteUserCourse = async(req, res, next) => { //[]
        let courseCode = req.params.courseCode;
        let id = req.params.id;
        try {
            let checkforUser = await User.findOne({
                _id: id
            });
            let checkforcourse = await User.findOne({
                _id: id,
                'courses.Id': courseCode,
            });
            let checkforcoursepass = await User.findOne({
                _id: id,
            }, { courses: { $elemMatch: { Id: courseCode, status: 'pass' } } });
            if (!checkforUser) {
                return res.status(400).json({
                    icon: '&#xE5CD;',
                    style: 'error',
                    msg: "User Not Found"
                });
            } else if (!checkforcourse) {
                return res.status(400).json({
                    icon: '&#xE5CD;',
                    style: 'error',
                    msg: "This User Dont Register This Course"
                });
            } else if (checkforcoursepass.courses.length > 0) {
                return res.status(400).json({
                    icon: '&#xE5CD;',
                    style: 'error',
                    msg: "This User Registered This Course Before And Passed It"
                });
            } else {
                if (deleteUserGrades && deleteUserAttendance) {
                    adminService.deleteUserCourse(id, courseCode).then((course) => {
                        if (course) {
                            res.status(201).json({ msg: 'Course Deleted Successfuly from this User' });
                        }
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({ msg: "Internal Server Error" });
                    });
                }


            }
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
    // ---------------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------------------


// --------------------Add Course----------------------
exports.addCourse = async(req, res, next) => { //[]
        try {
            const { courseCode, courseName, courseDepartment, creaditHours, prerequisite } = req.body
            const checkCourseId = await Course.findOne({ courseCode });
            const checkCourseName = await Course.findOne({ courseName });
            if (checkCourseId) {
                res.status(400).json({ msg: 'This Course ID Has Been Used Before' })
            } else if (checkCourseName) {
                res.status(400).json({ msg: 'This Course Name Has Been Used Before' })
            } else {
                const newCourse = new Course({ courseCode, courseName, courseDepartment, creaditHours, prerequisite });
                await newCourse.save();
                res.status(200).json({ msg: 'Course Added Successfuly' })
            }
        } catch (error) {
            next(error)
        }
    }
    // --------------------Add Course Semester----------------------
exports.addCourseSemester = async(req, res, next) => { //[]
    let courseCode = req.params.courseCode;
    let semester_time = req.body.semester_time;

    try {
        let checkforcourse = await Course.findOne({ courseCode });
        let checkforsemester = await Course.findOne({ courseCode, 'semesters.semester_time': semester_time });

        if (!checkforcourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Course Not Found"
            });
        } else if (checkforsemester) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "This Semester Was Added Before "
            });
        } else {
            adminService.addCourseSemester(courseCode, semester_time).then((garde) => {
                if (garde) {
                    res.status(200).json({ msg: "Semester Added Successfuly" });
                } else {
                    res.status(500).json({ msg: "Can't Add This Semester For This Course There Is Another Opened Course Semester!" });
                }
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}


// --------------------Get Course Semester Data----------------------
exports.getCourseSemesterData = async(req, res, next) => { //[]
    let courseCode = req.params.courseCode;
    let semester_time = req.params.semester;
    try {
        let findsemesterdata = await Course.findOne({ courseCode }, { _id: 0, courseCode: 1, courseName: 1, semesters: { $elemMatch: { semester_time: semester_time } } })
        res.json({ findsemesterdata });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in updating");
    }
}


// --------------------Update Course----------------
exports.updateCourse = async(req, res, next) => { //[]
    let code = req.params.courseCode;
    try {
        let checkforcourse = await Course.findOne({
            courseCode: code
        });
        if (!checkforcourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Course Not Found"
            });
        } else {
            Course.findOneAndUpdate({ courseCode: code },
                req.body, { useFindAndModify: false },
                (err) => {
                    if (err) {
                        res.status(404).json({ msg: "Can't Update this Course Information" });
                    }
                    res.status(201).json({ msg: "Course's Information Updated Successfuly" });
                });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in updating");
    }
}

// --------------------Delete Course----------------
exports.deleteCourse = async(req, res, next) => { //[]
    let code = req.params.courseCode;
    try {
        let checkforcourse = await Course.findOne({
            courseCode: code
        });
        if (!checkforcourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Course Not Found"
            });
        } else {
            let deleteAllCourseGrades = await Grade.deleteMany({ "courseId": code });
            let deleteAllCourseAttendance = await Attendance.deleteMany({ "courseId": code });
            if (deleteAllCourseGrades && deleteAllCourseAttendance) {
                adminService.deleteCourse(code).then((course) => {
                    if (course) {
                        res.status(201).json({ msg: 'Course Deleted Successfuly' });
                    }
                }).catch(err => {
                    console.log(err);
                    res.status(500).json({ msg: "Internal Server Error" });
                });
            }

        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}


// --------------------Get Courses---------------------
exports.getAllCourses = async(req, res, next) => { //[]
    adminService.getAllCourses().then((courses) => {
        if (courses) {
            res.json(courses);
        } else {
            res.status(404).json({ msg: 'No Courses Yet' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}

exports.getActiveCourses = async(req, res, next) => { //[]
    adminService.getAllActiveCourses().then((courses) => {
        if (courses) {
            res.json(courses);
        } else {
            res.status(404).json({ msg: 'No Courses Yet' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}

// --------------------Get Department Courses---------------------
exports.getDepartmentCourses = async(req, res, next) => { //[]
    let department = req.params.courseDepartment;
    adminService.getDepartmentCourses(department).then((courses) => {
        if (courses) {
            res.json(courses);
        } else {
            res.status(404).json({ msg: 'No Courses Yet' });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
}


// --------------------Get Course Data---------------------
exports.getCourseData = async(req, res, next) => { //[]
    let code = req.params.courseCode;
    try {
        adminService.getCourseByCode(code).then((course) => {
            if (course) {
                if (course.status == "active") {
                    let color = "success";
                    let data = { course, color };
                    res.json(data);
                } else if (course.status == "disable") {
                    let color = "danger";
                    let data = { course, color };
                    res.json(data);
                }
            } else {
                res.status(404).json({ msg: 'Course Not Found' });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: 'Internal Server Error' });
        })


    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

// --------------------Add Course Semester Grades----------------------
exports.addCourseSemesterGrade = async(req, res, next) => { //[]
    let courseCode = req.params.courseCode;
    let semester_time = req.params.semester;
    let type = req.body.type;
    let grade = req.body.grade;

    try {
        type = type.charAt(0).toUpperCase() +
            type.slice(1);
        let checkforcourse = await Course.findOne({ courseCode });
        let checkforcoursesemester = await Course.findOne({ courseCode }, { semesters: { $elemMatch: { semester_time: semester_time } } });
        let checkforgradearr = checkforcoursesemester.semesters[0].grades;
        const checkforgrade = checkforgradearr.find(element => element.type === type);
        if (!checkforcourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Course Not Found"
            });
        } else if (checkforcoursesemester.semesters.length == 0) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Semester Not Found"
            });
        } else if (checkforgrade) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "This Grade Was Added Before "
            });
        } else {
            adminService.addCourseSemesterGrades(courseCode, semester_time, type, grade).then((garde) => {
                if (garde) {
                    res.status(200).json({ msg: "Grade Added Successfuly" });
                } else {
                    res.status(500).json({ msg: "Can't Add This Grade For This Course" });
                }
            });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

// --------------------Delete Course Semester Grade----------------------
exports.deleteCourseSemesterGrade = async(req, res, next) => { //[]
    let courseCode = req.params.courseCode;
    let semester_time = req.params.semester;
    let type = req.params.type;
    try {
        let checkforcourse = await Course.findOne({ courseCode });
        let checkforcoursesemester = await Course.findOne({ courseCode }, { semesters: { $elemMatch: { semester_time: semester_time } } });
        let checkforgradearr = checkforcoursesemester.semesters[0].grades;
        const checkforgrade = checkforgradearr.find(element => element.type === type);
        if (!checkforcourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Course Not Found"
            });
        } else if (checkforcoursesemester.semesters.length == 0) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Semester Not Found"
            });
        } else if (!checkforgrade) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "This Grade Not Added Before "
            });
        } else {
            let deleteAllGradeOfThisType = await Grade.deleteMany({ courseId: courseCode, semester_time, gradeType: type });
            if (deleteAllGradeOfThisType) {
                adminService.deleteCourseSemesterGrade(courseCode, semester_time, type).then((garde) => {
                    if (garde) {
                        res.status(200).json({ msg: "Grade Deleted Successfuly" });
                    } else {
                        res.status(500).json({ msg: "Can't Delete This Grade Form This Course" });
                    }
                });
            }

        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }

}


// --------------------Get Users In Course----------------------
exports.getCourseStudents = async(req, res, next) => { //[]
    let code = req.params.courseCode;
    let semester_time = req.params.semester;
    try {
        adminService.getCourseStudents(code, semester_time).then((users) => {
            if (users) {
                res.json(users);
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "Internal Server Error" });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

// --------------------Add Semester Grade----------------------
exports.addSemesterGrade = async(req, res, next) => { //[]
    const { studentId, gradeType, score } = req.body
    let courseId = req.params.courseCode;
    let semester_time = req.params.semester;
    try {
        let checkForStudent = await User.findOne({ _id: studentId });
        let checkForStudentCourse = await User.findOne({ _id: studentId, 'courses.Id': courseId, 'courses.semester_time': semester_time });
        let checkStudentGrade = await Grade.findOne({
            studentId,
            courseId,
            gradeType,
            semester_time
        });

        if (!checkForStudent) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Student Not Found"
            });
        } else if (checkStudentGrade) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Grade Already Exists"
            });
        } else if (!checkForStudentCourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "This Student Didn't Register This Course"
            });
        } else {
            const newGrade = new Grade({ studentId, courseId, semester_time, gradeType, score });
            await newGrade.save();
            res.status(200).json({
                icon: '&#xE876;',
                style: 'success',
                msg: 'Grade Added Successfuly',
            })
        }

    } catch (error) {
        next(error)
    }
}

// --------------------Update Semester Grade----------------------
exports.updateSemesterGrade = async(req, res, next) => { //[]
    const { gradeType, score } = req.body
    let studentId = req.params.id;
    let courseId = req.params.courseCode;
    let semester_time = req.params.semester;

    try {
        let checkStudentId = await Grade.find({
            studentId
        });
        let checkCourseId = await Grade.find({
            courseId
        });
        let checkGradeType = await Grade.findOne({
            gradeType,
            studentId,
            courseId,
            semester_time
        });

        if (!checkCourseId || !checkStudentId || !checkGradeType) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "This Grade Not Found"
            });
        } else {
            adminService.updateStudentGrade(studentId, courseId, semester_time, gradeType, score).then((grade) => {
                if (grade) {
                    res.status(201).json({ msg: "Student's Grade Updated Successfuly" });
                } else {
                    res.status(404).json({ msg: "Can't Update this Student's Grade Information" });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: 'Internal Server Error' });
            })

        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in updating");
    }

}


exports.changeCourseStatus = async(req, res, next) => { //[]
    let code = req.params.courseCode;
    let status = req.params.status
    try {
        let checkforcourse = await Course.findOne({
            courseCode: code
        });
        if (!checkforcourse) {
            return res.status(400).json({
                icon: '&#xE5CD;',
                style: 'error',
                msg: "Course Not Found"
            });
        } else {
            adminService.updateCourseStatus(code, status).then((change) => {
                if (change) {
                    res.status(201).json({ msg: "Course" + " " + status + " " + "Successfuly" });
                } else {
                    res.status(404).json({ msg: "Can't Change Course Status" });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: 'Internal Server Error' });
            })
        }


    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in updating");
    }
}
exports.decidePassOrFail = async(req, res, next) => {
    try {
        let courseCode = req.params.courseCode;
        let openemesters = await Course.findOne({ courseCode }, { semesters: { $elemMatch: { semester_status: 'open' } } });
        if (openemesters.semesters.length > 0) {
            let courseSmesterTime = openemesters.semesters[0].semester_time;
            let CourseStudents = await adminService.getCourseSemesterStudents(courseCode, courseSmesterTime);
            let CourseTeachers = await adminService.getCourseSemesterTeachers(courseCode, courseSmesterTime);

            for (var i = 0; i < CourseStudents.length; i++) {
                let stu = CourseStudents[i];
                adminService.studentDecidePassOrFail(stu._id, courseCode)
            }
            for (var i = 0; i < CourseTeachers.length; i++) {
                let tec = CourseTeachers[i];
                adminService.TeacherCoursePass(tec._id, courseCode)
            }
            res.status(200).json({
                icon: '&#xE876;',
                style: 'success',
                msg: "pass Or Fail Decided"
            });
            next();
        } else if (openemesters.semesters.length == 0) {
            res.status(200).json({
                msg: "No Opened Semester"
            });
        }

    } catch (error) {
        next(error);
    }
}
exports.calculatMyCreditHours = async(req, res, next) => {
        let id = req.params.id;
        try {
            let newattribute = 'pass';
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
            if (usercourses.length > 0) {
                let arr = [];
                for (let i = 0; i < usercourses.length; i++) {
                    arr[i] = usercourses[i].courses
                }
                let totalcredithours = 0
                for (let i = 0; i < arr.length; i++) {
                    let getcoursecredithours = await Course.findOne({ courseCode: arr[i].Id });
                    totalcredithours = totalcredithours + getcoursecredithours.creaditHours
                }

                res.json(totalcredithours);
            } else if (usercourses.length == 0) {
                let totalcredithours = 0
                res.json(totalcredithours);
            }

            next();
        } catch (error) {
            next(error);
        }
    }
    // ---------------------------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------------------------
exports.grantAccess = function(action, resource) {
    return async(req, res, next) => {
        try {
            const permission = roles.can(req.user.role)[action](resource);
            if (!permission.granted) {
                return res.status(401).json({
                    error: "You don't have enough permission to perform this action"
                });
            }
            next()
        } catch (error) {
            next(error)
        }
    }
}

exports.allowIfLoggedin = async(req, res, next) => {
    try {
        const user = res.locals.loggedInUser;
        if (!user)
            return res.status(401).json({
                error: "You need to be logged in to access this route"
            });
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}