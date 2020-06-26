import { Component, OnInit } from '@angular/core';
import { User, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Data, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { HttpClient } from '@angular/common/http';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-attendance-report',
  templateUrl: 'attendance-report.page.html',
  styleUrls: ['attendance-report.page.scss']
})
export class attendanceReportPage implements OnInit {
  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  data: Data[];

  week = [];
  weektest = [];
  attendance = [];
  trueattendance = [];
  trueattendancetest = [];

  falseattendance = [];
  falseattendancetest = [];
  selectedLanguage:string;
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService,
    private translateConfigService: TranslateConfigService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  ngOnInit(): void {
    this.teacherservices.semesterAttendanceReport(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.week.push(y.lectureNumber);
        this.attendance.push(y.numberOfAttendance);
        this.trueattendance.push(y.numberOfTrueAttendance);
        this.falseattendance.push(y.numberOfFalseAttendance);
      });
      for (let i = 0; i < res.length; i++) {
        this.trueattendancetest.push({ label: 'Week ' + this.week[i] + " " + '(' + this.attendance[i] + ')', y: this.trueattendance[i] });
        this.falseattendancetest.push({ label: 'Week ' + this.week[i] + " " + '(' + this.attendance[i] + ')', y: this.falseattendance[i] })


      }
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Student Attendace Report"
        },
        axisY: {
          title: "True Attendance",
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC"
        },
        axisY2: {
          title: "False Attendance",
          titleFontColor: "#C0504E",
          lineColor: "#C0504E",
          labelFontColor: "#C0504E",
          tickColor: "#C0504E"
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          // itemclick: toggleDataSeries
        },

        data: [{
          type: "column",
          name: "True Attendance",
          legendText: "True",
          showInLegend: true,
          dataPoints: this.trueattendancetest
        },
        {
          type: "column",
          name: "False Attendance",
          legendText: "False",
          axisYType: "secondary",
          showInLegend: true,
          dataPoints: this.falseattendancetest
        }]
      });

      chart.render();

      // function toggleDataSeries(e) {
      //   if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
      //     e.dataSeries.visible = false;
      //   }
      //   else {
      //     e.dataSeries.visible = true;
      //   }
      //   chart.render();
      // }

    });
  }

}
