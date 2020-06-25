import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards';
import { Role } from './_models';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'},

    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.loginPageModule),
    },
  // Tabs
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.homePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Teacher, Role.Student] }
  },
  // {
  //   path: 'courses',
  //   loadChildren: () => import('./Student/courses/courses.module').then(m => m.coursesPageModule)
  // },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.messagesPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Teacher, Role.Student] }
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.notificationsPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Teacher, Role.Student] }
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.profilePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin, Role.Teacher, Role.Student] }
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  // Admin

  {
    path: 'courses',
    loadChildren: () => import('./Admin/courses/courses.module').then(m => m.coursesPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin]}
  },
  {
    path: 'courses/add-course',
    loadChildren: () => import('./Admin/add-course/add-course.module').then(m => m.addCoursePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'courses/manage-course',
    loadChildren: () => import('./Admin/manage-course/manage-course.module').then(m => m.manageCoursePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semesters',
    loadChildren: () => import('./Admin/course-semesters/course-semesters.module').then(m => m.courseSemestersPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/add-semester',
    loadChildren: () => import('./Admin/add-course-semester/add-course-semester.module').then(m => m.addCourseSemesterPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/info',
    loadChildren: () => import('./Admin/course-info/course-info.module').then(m => m.courseInfoPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/students-sheet',
    loadChildren: () => import('./Admin/student-sheet/student-sheet.module').then(m => m.studentSheetPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/add-course-grade',
    loadChildren: () => import('./Admin/add-course-grade/add-course-grade.module').then(m => m.addCourseGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/delete-course-grade',
    loadChildren: () => import('./Admin/delete-course-grade/delete-course-grade.module').then(m => m.deleteCourseGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/students-grades',
    loadChildren: () => import('./Admin/students-grade/students-grade.module').then(m => m.studentsGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/add-student-grade',
    loadChildren: () => import('./Admin/add-student-grade/add-student-grade.module').then(m => m.addStudentGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'course/semester/update-student-grade',
    loadChildren: () => import('./Admin/update-student-grade/update-student-grade.module').then(m => m.updateStudentGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'users',
    loadChildren: () => import('./Admin/users/users.module').then(m => m.usersPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user/courses',
    loadChildren: () => import('./Admin/user-courses/user-courses.module').then(m => m.userCoursesPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user/course/info',
    loadChildren: () => import('./Admin/user-course-info/user-course-info.module').then(m => m.userCourseInfoPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user/add-user',
    loadChildren: () => import('./Admin/add-user/add-user.module').then(m => m.addUserPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user/manage-user',
    loadChildren: () => import('./Admin/manage-user/manage-user.module').then(m => m.manageUserPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user/add-delete-course',
    loadChildren: () => import('./Admin/add-user-course/add-user-course.module').then(m => m.addUserCoursePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'user/profile',
    loadChildren: () => import('./Admin/user-profile/user-profile.module').then(m => m.userProfilePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  // Student
  {
    path: 'courses',
    loadChildren: () => import('./Student/courses/courses.module').then(m => m.coursesPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher, Role.Student] }
  },
  {
    path: 'courses/courses-single',
    loadChildren: () => import('./Student/courses-single/courses-single.module').then(m => m.coursesSinglePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher, Role.Student] }
  },
  {
    path: 'course/semester/home',
    loadChildren: () => import('./Student/courses-single/courses-single.module').then(m => m.coursesSinglePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher, Role.Student] }
  },
  {
    path: 'course/semester/attendance-sheet',
    loadChildren: () => import('./Student/attendance-record/attendance-record.module').then(m => m.attendanceRecordPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Student] }
  },
  {
    path: 'attend-me',
    loadChildren: () => import('./Student/attend-me/attend-me.module').then(m => m.attendMePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Student] }
  },
  {
    path: 'course/semester/mygrades',
    loadChildren: () => import('./Student/grades/grades.module').then(m => m.gradesPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Student] }
  },
  {
    path: 'course/registeration',
    loadChildren: () => import('./Student/courses-registeration/courses-registeration.module').then(m => m.coursesRegisterationPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Student] }
  },
  // Teacher
  {
    path: 'course/semester/attendance',
    loadChildren: () => import('./Teacher/attendance-teacher/attendance-teacher.module').then(m => m.teacherAttendancePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher, Role.Student] }
  },
  {
    path: 'course/semester/add-lecture',
    loadChildren: () => import('./Teacher/add-lecture/add-lecture.module').then(m => m.addLecturePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/information',
    loadChildren: () => import('./Teacher/courses-info/courses-info.module').then(m => m.coursesInfoPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher, Role.Student] }
  },
  {
    path: 'course/semester/add-course-grade',
    loadChildren: () => import('./Teacher/add-course-grade/add-course-grade.module').then(m => m.teacherAddCourseGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/delete-course-grade',
    loadChildren: () => import('./Teacher/delete-course-grade/delete-course-grade.module').then(m => m.teacherDeleteCourseGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/students-sheet',
    loadChildren: () => import('./Teacher/student-sheet/student-sheet.module').then(m => m.teacherStudentSheetPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/students/grades',
    loadChildren: () => import('./Teacher/grades-teacher/grades-teacher.module').then(m => m.teacherGradesPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/add-grade',
    loadChildren: () => import('./Teacher/add-course-student-grade/add-course-student-grade.module').then(m => m.addCourseStudentGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/update-grade',
    loadChildren: () => import('./Teacher/update-student-grade/update-student-grade.module').then(m => m.teacherUpdateStudentGradePageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/assignments',
    loadChildren: () => import('./Teacher/assignments/assignments.module').then(m => m.assignmentsPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher, Role.Student] }
  },
  {
    path: 'course/semester/add-task',
    loadChildren: () => import('./Teacher/add-task/add-task.module').then(m => m.addTaskPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/delete-task',
    loadChildren: () => import('./Teacher/delete-task/delete-task.module').then(m => m.deleteTaskPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/students-attendance-sheet',
    loadChildren: () => import('./Teacher/attendance-sheet-student/attendance-sheet-student.module').then(m => m.teacherAttendanceSheetStudentPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/students-attendance-report',
    loadChildren: () => import('./Teacher/attendance-report/attendance-report.module').then(m => m.attendanceReportPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },
  {
    path: 'course/semester/students-grades-report',
    loadChildren: () => import('./Teacher/grades-report/grades-report.module').then(m => m.gradesReportPageModule),
    canActivate: [AuthGuard],
    data: { roles: [Role.Teacher] }
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
