import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Semester, Role } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { UserserviceService } from 'src/app/services/userservice.service';
import { CourseService } from 'src/app/services/course.service';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.page.html',
  styleUrls: ['user-profile.page.scss']
})
export class userProfilePage implements OnInit {
  currentClickedUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;

  _id: any;
  userdata: any;
  usercredithours: any;
  nohours: any;
  constructor(private adminservices: AdminservicesService, private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private userserviceService: UserserviceService,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService
  ) {
    this.currentClickedUser = this.userserviceService.currentClickedUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
  }
  get isStudent() {
    return this.currentClickedUser && this.currentClickedUser.role === Role.Student;
  }
  get isTeacher() {
    return this.currentClickedUser && this.currentClickedUser.role === Role.Teacher;
  }
  ngOnInit(): void {
    this.adminservices.getUserprofiledata(this.currentClickedUser._id).subscribe(res => {
      this.userdata = res;
    }, err => {
      this.userdata = err
    }
    );
    this.adminservices.calculatMyCreditHours(this.currentClickedUser._id).subscribe(res => {

      if (res == 0) {
        this.nohours = 'No Finished Hours Yet'
      }
      else {
        this.usercredithours = res;
      }
      console.log(this.usercredithours)
    }, err => {
      this.usercredithours = err
    }
    );


  }
  closClickedUser() {
    this.userserviceService.closeClickedUser();
  }
  openClickedUser(id) {
    this.userserviceService.getClickedUser(id).pipe(first()).subscribe(res => {
    }, err => {
      console.log('Fail to get Course');
    }
    );
  }
}
