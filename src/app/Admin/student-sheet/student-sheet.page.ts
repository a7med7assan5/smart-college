import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-student-sheet',
  templateUrl: 'student-sheet.page.html',
  styleUrls: ['student-sheet.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class studentSheetPage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  _id: any;
  courseusers: any;
  semester_time: string;
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
      { name: 'i' },
      { name: '_id' },
      { name: 'name' },
      { name: 'email' }
    ];
  }
  sub: any;
  ngOnInit(): void {

    this.adminservices.getCourseSemesterStudentsSheet(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe(res => {
      this.courseusers = res;
      this.rows = res;
    }, err => {
      this.courseusers = err;
      this.rows = err;
    }
    );

  }

}
