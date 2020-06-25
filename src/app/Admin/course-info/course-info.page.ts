import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-course-info',
  templateUrl: 'course-info.page.html',
  styleUrls: ['course-info.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class courseInfoPage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  coursedata: any;
  numberofusers: any;
  semester_time: string;
  coursesemesterdata: any;
  coursaSemesterGrades: any;
  selectedLanguage:string;
  public columns: any;
  public rows: any;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userserviceService: UserserviceService,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private translateConfigService: TranslateConfigService,
    private http: HttpClient, public navCtrl: NavController
  ) {
    this.currentClickedUser = this.userserviceService.currentClickedUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.columns = [
      { name: 'type' },
      { name: 'grade' }
    ];
  }
  sub: any;


  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.adminservices.getCourseSemesterData(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.coursesemesterdata = res.semesters[0];
      this.coursaSemesterGrades = res.semesters[0];
      this.rows = res.semesters[0];
    }, err => {
      this.rows = err;
    }
    );
    this.adminservices.getCourseData(this.currentCourse.courseCode).subscribe(res => {
      this.coursedata = res;
      this.rows = res;
    }, err => {
      this.coursedata = err;
    }
    );

  }

}
