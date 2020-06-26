import { Component, OnInit } from '@angular/core';
import { User, Role, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-add-lecture',
  templateUrl: 'add-lecture.page.html',
  styleUrls: ['add-lecture.page.scss']
})
export class addLecturePage implements OnInit {
  currentCourseSemester: Semester;
  currentUser: User;
  currentCourse: Course;
  _id: string;
  coursesdata: any;

  lectureNumber: string;
  lectureLocation: string;
  beaconId: string;
  selectedLanguage:string;
  validations_form: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private alertservice: AlertService, 
    private formBuilder: FormBuilder,
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
  AddLeacture(lectureNumber: HTMLInputElement, lectureLocation: HTMLInputElement, beaconId: HTMLInputElement) {
    this.lectureNumber = lectureNumber.value, this.lectureLocation = lectureLocation.value, this.beaconId = beaconId.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.addCourseSemesterLecture(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.lectureNumber, this.lectureLocation, this.beaconId).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      lectureNumber.value = "";
      lectureLocation.value = "";
      beaconId.value = "";
      this.navigateTo();
      }, err => {
        this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );
  }

  navigateTo(){
    this.router.navigate(['/courses']);
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      lectureNumber: new FormControl('', Validators.compose([
        Validators.max(12),
        Validators.min(1),
        Validators.required,
      ])),
      location: new FormControl('', Validators.required),
      beaconid: new FormControl('', Validators.required),
    });

  }

  validation_messages = {
    'lectureNumber': [
      { type: 'min', message: 'Lecture Number must be at least 1.' },
      { type: 'max', message: 'Lecture Number cannot be more than 12.' },
      { type: 'required', message: 'Lecture Number is required.' },
    ],
    'location': [
      { type: 'required', message: 'Location is required.' }
    ],
    'beaconid': [
      { type: 'required', message: 'Beacon ID is required.' }
    ]

  };


}
