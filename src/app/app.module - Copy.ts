import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'


import { AuthGuard } from './_guards'
import { Role } from './_models';



import { footerPage } from './footer/footer.page';
import { homePage } from './home/home.page';
import { adminCoursesPage } from './Admin/courses/courses.page';
import { courseInfoPage } from './Admin/course-info/course-info.page';
import { profilePage } from './profile/profile.page';
import { addUserPage } from './Admin/add-user/add-user.page';
import { usersPage } from './Admin/users/users.page';
import { userCoursesPage } from './Admin/user-courses/user-courses.page';
import { studentSheetPage } from './Admin/student-sheet/student-sheet.page';
import { addCourseGradePage } from './Admin/add-course-grade/add-course-grade.page';
import { addStudentGradePage } from './Admin/add-student-grade/add-student-grade.page';
import { addCoursePage } from './Admin/add-course/add-course.page';
import { studentsGradePage } from './Admin/students-grade/students-grade.page';
import { updateStudentGradePage } from './Admin/update-student-grade/update-student-grade.page';
import { updateCoursePage } from './Admin/update-course/update-course.page';
import { deleteCoursePage } from './Admin/delete-course/delete-course.page';
import { addUserCoursePage } from './Admin/add-user-course/add-user-course.page';
import { deleteUserCoursePage } from './Admin/delete-user-course/delete-user-course.page';
import { deleteUserPage } from './Admin/delete-user/delete-user.page';
import { updateUserPage } from './Admin/update-user/update-user.page';
import { deleteCourseGradePage } from './Admin/delete-course-grade/delete-course-grade.page';
import { userProfilePage } from './Admin/user-profile/user-profile.page';
import { navbarPage } from './navbar/navbar.page';
import { studentCoursesPage } from './Student/courses/courses.page';
import { notificationsPage } from './Student/notifications/notifications.page';
import { coursesSinglePage } from './Student/courses-single/courses-single.page';
import { gradesPage } from './Student/grades/grades.page';
import { attendanceSheetStudentPage } from './Student/attendance-sheet-student/attendance-sheet-student.page';
import { teacherAttendancePage } from './Teacher/attendance-teacher/attendance-teacher.page';
import { coursesInfoPage } from './Teacher/courses-info/courses-info.page';
import { teacherGradesPage } from './Teacher/grades-teacher/grades-teacher.page';
import { assignmentatPage } from './Teacher/assignmentat/assignmentat.page';
import { addCourseStudentGradePage } from './Teacher/add-course-student-grade/add-course-student-grade.page';
import { teacherUpdateStudentGradePage } from './Teacher/update-student-grade/update-student-grade.page';
import { teacherAddCourseGradePage } from './Teacher/add-course-grade/add-course-grade.page';
import { teacherDeleteCourseGradePage } from './Teacher/delete-course-grade/delete-course-grade.page';
import { teacherStudentSheetPage } from './Teacher/student-sheet/student-sheet.page';
import { addLecturePage } from './Teacher/add-lecture/add-lecture.page';
import { addAttendancePage } from './Teacher/add-attendance/add-attendance.page';
import { attendMePage } from './Student/attendme/attendme.page';
import { teacherAttendanceSheetStudentPage } from './Teacher/attendance-sheet-student/attendance-sheet-student.page';
import { addTaskPage } from './Teacher/add-task/add-task.page';
import { deleteTaskPage } from './Teacher/delete-task/delete-task.page';
import { loginPage } from './login/login.page';
import { from } from 'rxjs';
import { JwtInterceptor } from './_helpers';
import { attendanceReportPage } from './Teacher/attendance-report/attendance-report.page';
import { gradesReportPage } from './Teacher/grades-report/grades-report.page';



@NgModule({
  declarations: [
    AppComponent,
    footerPage,
    homePage,
    adminCoursesPage,
    courseInfoPage,
    profilePage,
    addUserPage,
    usersPage,
    userCoursesPage,
    studentSheetPage,
    addCourseGradePage,
    addStudentGradePage,
    addCoursePage,
    studentsGradePage,
    updateStudentGradePage,
    updateCoursePage,
    deleteCoursePage,
    addUserCoursePage,
    deleteUserCoursePage,
    deleteUserPage,
    updateUserPage,
    deleteCourseGradePage,
    userProfilePage,
    navbarPage,
    studentCoursesPage,
    notificationsPage,
    coursesSinglePage,
    gradesPage,
    attendanceSheetStudentPage,
    addCourseStudentGradePage,
    teacherUpdateStudentGradePage,
    teacherAddCourseGradePage,
    teacherDeleteCourseGradePage,
    teacherStudentSheetPage,
    addLecturePage,
    addAttendancePage,
    teacherAttendancePage,
    coursesInfoPage,
    teacherGradesPage,
    assignmentatPage,
    teacherAttendanceSheetStudentPage,
    addTaskPage,
    deleteTaskPage,
    loginPage,
    attendMePage,
    attendanceReportPage,
    gradesReportPage,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule
    , RouterModule.forRoot([
    // { path: '', redirectTo: '/home', pathMatch: 'full' },


    {
      path: 'home', component: homePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin, Role.Teacher, Role.Student] }
    },

    { path: 'login', component: loginPage },

    { path: 'footer', component: footerPage },
    { path: 'navbar', component: navbarPage },

    {
      path: 'profile', component: profilePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin, Role.Teacher, Role.Student] }

    },

    {
      path: 'courses', component: adminCoursesPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'courses/add-course', component: addCoursePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'courses/update-course', component: updateCoursePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'courses/delete-course', component: deleteCoursePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'course/info/:id', component: courseInfoPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'course/students-sheet/:id', component: studentSheetPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },//--------

    {
      path: 'course/add-course-grade/:id', component: addCourseGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'course/delete-course-grade/:id', component: deleteCourseGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'course/students-grades/:id', component: studentsGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'course/add-student-grade/:id', component: addStudentGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'course/update-student-grade/:id', component: updateStudentGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },


    {
      path: 'users', component: usersPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }

    },

    {
      path: 'user/courses/:id', component: userCoursesPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'user/add-user', component: addUserPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'user/update-user', component: updateUserPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'user/delete-user', component: deleteUserPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'user/add-delete-course/:id', component: addUserCoursePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },

    {
      path: 'user/profile/:id', component: userProfilePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    },


    // ------------------------------------------------Student-----------------------------


    {
      path: 'mycourses', component: studentCoursesPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher, Role.Student] }
    },
    {
      path: 'course/home', component: coursesSinglePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher, Role.Student] }
    },

    {
      path: 'course/attendance', component: teacherAttendancePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher, Role.Student] }
    },


    {
      path: 'course/attend-me', component: attendMePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Student] }
    },

    {
      path: 'course/add-lecture', component: addLecturePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    {
      path: 'course/add-attendance', component: addAttendancePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },


    {
      path: 'course/information', component: coursesInfoPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher, Role.Student] }
    },
    {
      path: 'course/add-course-grade', component: teacherAddCourseGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    {
      path: 'course/delete-course-grade', component: teacherDeleteCourseGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    {
      path: 'course/students-sheet', component: teacherStudentSheetPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },


    {
      path: 'course/mygrades', component: gradesPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Student] }
    },
    {
      path: 'course/students/grades', component: teacherGradesPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    {
      path: 'course/add-grade', component: addCourseStudentGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    {
      path: 'course/update-grade', component: teacherUpdateStudentGradePage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },


    {
      path: 'course/assignments', component: assignmentatPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher, Role.Student] }
    },

    {
      path: 'course/add-task', component: addTaskPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    {
      path: 'course/delete-task', component: deleteTaskPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },


    {
      path: 'course/attendance-sheet', component: attendanceSheetStudentPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Student] }
    },

    {
      path: 'course/students-attendance-sheet', component: teacherAttendanceSheetStudentPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },

    {
      path: 'notifications', component: notificationsPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher, Role.Student] }
    },
    {
      path: 'course/students-attendance-report', component: attendanceReportPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },

    {
      path: 'course/students-grades-report', component: gradesReportPage,
      canActivate: [AuthGuard],
      data: { roles: [Role.Teacher] }
    },
    // ------------------------------------------------Teacher-----------------------------


    // { path: 'teacher/courses', component: coursesPaget },

    // { path: 'teacher/attendance', component: teacherAttendancePage },
    // { path: 'teacher/notifications', component: notificationsPaget },
    // { path: 'teacher/courses-single', component: coursesSinglePaget },
    // { path: 'teacher/courses-info', component: coursesInfoPage },
    // { path: 'teacher/grades', component: teacherGradesPage },
    // { path: 'teacher/assignmentat', component: assignmentatPage },

    // { path: 'teacher/attendanceSheetStudentPage', component: teacherAttendanceSheetStudentPage },


    { path: '**', redirectTo: '/home' },
  ])
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
