import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course-grade',
  templateUrl: 'add-course-grade.page.html',
  styleUrls: ['add-course-grade.page.scss']
})
export class addCourseGradePage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  gradetype: any;
  grade: any;
  type:any;
  types: Array<string>;
  gradestype:any;
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
  semester_time: string;
  onSelectChange(event: any) {
    //update the ui
    this.type = event.target.value;
  }

  addCourseGrade(type: HTMLInputElement, grade: HTMLInputElement) {
    this.gradetype = this.type + " " + this.grade;
    this.adminservices.addCourseSemesterGrade(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.gradetype, this.grade).subscribe(res => {
      this.alertservice.showAlert(res.icon, res.style, res.msg);
      this.gradestype = null;
      grade.value = "";
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

  }

  validation_messages = {
    'grade': [
      { type: 'required', message: 'Grade is required.' },
      { type: 'min', message: 'Grade must be at least 0 Marks.' },
      { type: 'max', message: 'Grade cannot be more than 100 Marks.' },
    ]
  };


}
