import { Component, OnInit } from '@angular/core';
import { User, GradesData, Semester } from 'src/app/_models';
import { Course } from 'src/app/_models/course';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherServiceService } from 'src/app/services/teacher-service.service';
import { CourseService } from 'src/app/services/course.service';
import { HttpClient } from '@angular/common/http';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { SemesterserviceService } from 'src/app/services/semesterservice.service';

@Component({
  selector: 'app-grades-report',
  templateUrl: 'grades-report.page.html',
  styleUrls: ['grades-report.page.scss']
})
export class gradesReportPage implements OnInit {
  currentUser: User;
  currentCourse: Course;
  currentCourseSemester: Semester;
  data: GradesData[];


  gradeType = [];
  score = [];

  Student = [];

  GradesUnder50 = [];
  GradesUnder65 = [];
  GradesUnder75 = [];
  GradesUnder85 = [];
  GradesAbove85 = [];


  GradesUnder50test = [];
  GradesUnder65test = [];
  GradesUnder75test = [];
  GradesUnder85test = [];
  GradesAbove85test = [];

  // falseattendance = [];
  // falseattendancetest = [];
  constructor(
    private router: Router,
    private authenticationService: AuthService,
    private teacherservices: TeacherServiceService,
    private _Activatedroute: ActivatedRoute,
    private courseService: CourseService,
    private semesterserviceService: SemesterserviceService

  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;
    this.currentCourse = this.courseService.currentCourseValue;
    this.currentCourseSemester = this.semesterserviceService.currentCourseSemesterValue;
  }
  ngOnInit(): void {

    this.teacherservices.semesterGradesReport(this.currentCourse.courseCode, this.currentCourseSemester.semesters[0].semester_time).subscribe((res: GradesData[]) => {
      res.forEach(y => {
        this.gradeType.push(y.GradeType);
        this.score.push(y.GradeGrade);

        this.Student.push(y.numberOfStudent);

        this.GradesUnder50.push(y.numberOfGradesUnder50);
        this.GradesUnder65.push(y.numberOfGradesUnder65);
        this.GradesUnder75.push(y.numberOfGradesUnder75);
        this.GradesUnder85.push(y.numberOfGradesUnder85);
        this.GradesAbove85.push(y.numberOfGradesAbove85);


      });
      for (let i = 0; i < res.length; i++) {
        this.GradesUnder50test.push({ label: '(' + this.score[i] + ')' + " " + this.gradeType[i] + " " + '(' + this.Student[i] + " Student" + ')', y: this.GradesUnder50[i] });
        this.GradesUnder65test.push({ label: '(' + this.score[i] + ')' + " " + this.gradeType[i] + " " + '(' + this.Student[i] + " Student" + ')', y: this.GradesUnder65[i] });
        this.GradesUnder75test.push({ label: '(' + this.score[i] + ')' + " " + this.gradeType[i] + " " + '(' + this.Student[i] + " Student" + ')', y: this.GradesUnder75[i] });
        this.GradesUnder85test.push({ label: '(' + this.score[i] + ')' + " " + this.gradeType[i] + " " + '(' + this.Student[i] + " Student" + ')', y: this.GradesUnder85[i] });
        this.GradesAbove85test.push({ label: '(' + this.score[i] + ')' + " " + this.gradeType[i] + " " + '(' + this.Student[i] + " Student" + ')', y: this.GradesAbove85[i] });
      }
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Students Grades Report"
        },
        axisY: {
          title: "A Grades",
          titleFontColor: "#4F81BC",
          lineColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          tickColor: "#4F81BC"
        },
        axisY2: {
          title: "F Grades",
          titleFontColor: "#8985bf",
          lineColor: "#8985bf",
          labelFontColor: "#8985bf",
          tickColor: "#8985bf"
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          // itemclick: toggleDataSeries
        },

        data: [
          {
            type: "column",
            name: "Grades Above 85",
            legendText: "A",
            showInLegend: true,
            dataPoints: this.GradesAbove85test
          },
          {
            type: "column",
            name: "Grades Under 85",
            legendText: "B",
            axisYType: "secondary",
            showInLegend: true,
            dataPoints: this.GradesUnder85test
          },
          {
            type: "column",
            name: "Grades Under 75",
            legendText: "C",
            axisYType: "third",
            showInLegend: true,
            dataPoints: this.GradesUnder75test
          },
          {
            type: "column",
            name: "Grades Under 65",
            legendText: "D",
            axisYType: "fourth",
            showInLegend: true,
            dataPoints: this.GradesUnder65test
          },
          {
            type: "column",
            name: "Grades Under 50",
            legendText: "F",
            axisYType: "fifth",
            showInLegend: true,
            dataPoints: this.GradesUnder50test
          }
        ]
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
