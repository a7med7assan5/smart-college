import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-attendance',
  templateUrl: 'attendance-teacher.page.html',
  styleUrls: ['attendance-teacher.page.scss']
})
export class teacherAttendancePage implements OnInit {

  currentUser: User;

  _id: string;
  coursesdata: any;
  currentCourse: any;
  currentCourseSemester: Semester;
  coursesemesterdata: any;
  selectedLanguage:string;
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private translateConfigService: TranslateConfigService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  get isStudent() {
    return this.currentUser && this.currentUser.role === Role.Student;
  }
  get isTeacher() {
    return this.currentUser && this.currentUser.role === Role.Teacher;
  }

  get isTeacherOrStudent() {
    return this.currentUser && (this.currentUser.role === Role.Teacher || this.currentUser.role === Role.Student);
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  
  ngOnInit(): void {
    this.teacherservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      this.coursesdata = res;
    }, err => {
      this.coursesdata = err
    }
    );
    this.teacherservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursesemesterdata = res.semesters[0];
    }, err => {
      this.coursesemesterdata = err
    }
    );
  }

}
