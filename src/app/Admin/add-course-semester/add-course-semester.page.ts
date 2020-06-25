import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import * as moment from 'moment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare var $: any;
@Component({
  selector: 'app-admin-add-course-semester',
  templateUrl: 'add-course-semester.page.html',
  styleUrls: ['add-course-semester.page.scss']
})
export class addCourseSemesterPage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: any;
  coursedata: any;
  numberofusers: any;
  courseSemester: any;
  semesterYear: string;
  semester_time: any;
  semester: string;
  semesters: Array<string>;
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
    this.courseSemester = event.target.value;
  }
  addCourseSemester(year: HTMLInputElement,) {
    this.semesterYear = moment(year.value).format('YYYY');
    this.semester_time = this.courseSemester + " " + this.semesterYear;
    this.adminservices.addCourseSemester(this.currentCourse.courseCode, this.semester_time).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      year.value = "";
      this.semester = null;
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );

  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.semesters = [
      "Fall",
      "Spring",
      "Summer",
      "Winter"
    ];
    this.validations_form = this.formBuilder.group({
      semester: new FormControl(this.semesters[0], Validators.required),
      year: new FormControl('', [Validators.required])
    });


  }

  validation_messages = {

  };


}
