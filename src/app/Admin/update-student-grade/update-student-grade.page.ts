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
  selector: 'app-update-student-grade',
  templateUrl: 'update-student-grade.page.html',
  styleUrls: ['update-student-grade.page.scss']
})
export class updateStudentGradePage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  courseStudentsGrades: any;
  coursedata: any;
  gradeType: any;
  studentId: any;
  types: Array<string>;
  score: any;
  studentedata: any;
  semester_time: string;
  coursesemesterdata: any;
  coursaSemesterGrades: any;
  selectedLanguage:string;
  validations_form: FormGroup;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userserviceService: UserserviceService,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private alertservice: AlertService, private formBuilder: FormBuilder,
    private translateConfigService: TranslateConfigService,
  ) {
    this.currentClickedUser = this.userserviceService.currentClickedUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
  }
  sub: any;
  onSelectChange(event: any) {
    //update the ui
    this.gradeType = event.target.value;
  }
  updateStudentGradefun(studentId: HTMLInputElement, score: HTMLInputElement) {
    this.studentId = studentId.value, this.score = score.value;
    this.adminservices.updateSemesterStudentGrade(this.currentCourse.courseCode, this.studentId, this.currentCourseSemester.semesters[0].semester_time, this.gradeType, this.score).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      studentId.value = "";
      score.value = "";
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );

  };


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
      id: new FormControl('', Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.max(20301800),
        Validators.min(20201800),
        Validators.required
      ])),
      gradetype: new FormControl(this.types[0], Validators.required),
      grade: new FormControl('', Validators.compose([
        Validators.max(100),
        Validators.min(0),
        Validators.required
      ])),
    });

    this.adminservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      this.coursedata = res;
    }, err => {
      this.coursedata = err
    }
    );
    this.adminservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursesemesterdata = res.semesters[0];
      this.coursaSemesterGrades = res.semesters[0];
    }, err => {
      this.coursesemesterdata = err
    }
    );
  }
  
  validation_messages = {
    'id': [
      { type: 'maxlength', message: 'ID cannot be more than 8 characters long.' },
      { type: 'minlength', message: 'ID must be at least 8 characters long.' },
      { type: 'max', message: 'ID cannot be more than 20301800.' },
      { type: 'min', message: 'ID must be at least 20201800.' },
      { type: 'required', message: 'ID is required.' }
  
    ],
    'grade': [
      { type: 'required', message: 'Grade is required.' },
      { type: 'min', message: 'Grade must be at least 0 Marks.' },
      { type: 'max', message: 'Grade cannot be more than 100 Marks.' },
    ]
  };
  
  }
  
