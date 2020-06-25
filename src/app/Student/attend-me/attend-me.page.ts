import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-attend-me',
  templateUrl: 'attend-me.page.html',
  styleUrls: ['attend-me.page.scss']
})
export class attendMePage implements OnInit {

  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: string;
  coursesdata: any;

  lectureNumber: string;
  lectureLocation: string;
  beaconId: string;
  selectedLanguage:string;


  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService, private alertservice: AlertService,
    private translateConfigService: TranslateConfigService,

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
  attendMe(lectureNumber: HTMLInputElement, beaconId: HTMLInputElement) {
    this.lectureNumber = lectureNumber.value, this.beaconId = beaconId.value;
    this.teacherservices.semesterAttendMe(this.currentUser._id, this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.lectureNumber, this.beaconId).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", "You have successfully logged in!");
      lectureNumber.value = "";
      beaconId.value = "";
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", "ID or password is incorrect. please try logging in again!");
    }
    );
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {



  }

}
