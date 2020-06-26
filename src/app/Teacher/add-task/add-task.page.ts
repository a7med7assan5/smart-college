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
  selector: 'app-add-task',
  templateUrl: 'add-task.page.html',
  styleUrls: ['add-task.page.scss']
})
export class addTaskPage implements OnInit {

  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: string;
  coursesdata: any;

  taskType: string;
  taskPath: string;
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
  AddTask(taskType: HTMLInputElement, taskPath: HTMLInputElement) {
    this.taskType = taskType.value, this.taskPath = taskPath.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.teacherservices.addCourseSemesterTask(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time, this.taskType, this.taskPath).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      taskType.value = "";
      taskPath.value = "";
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
      title: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
    });

  }

  validation_messages = {
    'title': [
      { type: 'required', message: 'Title is required.' }
    ],
    'link': [
      { type: 'required', message: 'Link is required.' }
    ]

  };


}
