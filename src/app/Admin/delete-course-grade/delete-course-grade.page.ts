import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-delete-course-grade',
  templateUrl: 'delete-course-grade.page.html',
  styleUrls: ['delete-course-grade.page.scss']
})
export class deleteCourseGradePage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  gradetype: any;
  grade: any;
  types: Array<string>;
  coursedata: any;
  semester_time: string;
  selectedLanguage:string;
  validations_form: FormGroup;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute, private formBuilder: FormBuilder,
    private _router: Router,
    private userserviceService: UserserviceService,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private alertservice: AlertService,
    private translateConfigService: TranslateConfigService
  ) {
    this.currentClickedUser = this.userserviceService.currentClickedUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  sub: any;
  onSelectChange(event: any) {
    //update the ui
    this.gradetype = event.target.value;
  }
  deleteCourseGrade() {


    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.adminservices.deleteCourseSemesterGrade(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.gradetype).subscribe(res => {
      this.alertservice.showAlert(res.icon, res.style, res.msg);
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );

  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.types = [
      "Assignment",
      "Quiz",
      "Midterm",
      "Practice",
      "Final"
    ];    
    this.validations_form = this.formBuilder.group({
      gradetype: new FormControl(this.types[0], Validators.required),
      grade: new FormControl('', Validators.compose([
        Validators.max(100),
        Validators.min(0),
        Validators.required
      ])),
    });


    this.adminservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursedata = res.semesters[0];
    }, err => {
      this.coursedata = err;
    }
    );
  }

  validation_messages = {

  };


}
