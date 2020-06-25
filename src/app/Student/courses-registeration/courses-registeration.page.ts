import { Component, OnInit } from '@angular/core';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';


@Component({
  selector: 'app-courses-registeration',
  templateUrl: 'courses-registeration.page.html',
  styleUrls: ['courses-registeration.page.scss']
})
export class coursesRegisterationPage implements OnInit {
  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: any;
  userdata: any;
  courseCode: string;
  course: any;
  allCourses: any;
  selectedLanguage:string;
  validations_form: FormGroup;
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private formBuilder: FormBuilder,
    private alertservice: AlertService,
    private translateConfigService: TranslateConfigService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  onSelectChange(event: any) {
    //update the ui
    this.course = event.target.value;
  }

  addUserCourse() {

    this.teacherservices.addUserCourse(this.currentUser._id, this.course).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );
  }
  deleteUserCourse() {

    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.deleteUserCourse(this.currentUser._id, this.course).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );
  }

  
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.teacherservices.getActiveCourses().subscribe(res => {
      this.allCourses = res;
    }, err => {
      this.allCourses = err
    }
    );

    this.validations_form = this.formBuilder.group({
      courses: new FormControl('', Validators.required),
    });
  
  
  }
  
  validation_messages = {
  
  };
  
  }
  