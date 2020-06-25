import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../_models';
@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {
  userId: any;
  courseId: any;
  addCourseGradeBody: any;
  deleteCourseGradebody: any;
  addCourseGradeId: any;
  deleteCourseGradetypebody: any;
  courseStudentsSheetBody: any;
  courseStudentsGradesBody: any;
  courseGradeType: any;
  addStudentGradeBody: any;
  addStudentGradeId: any;
  getCourseDataBody: any;
  getCourseGradeType: any;
  addCourseTaskBody: any;
  addCourseTaskId: any;
  deleteCourseTaskBody: any;
  deleteCourseTaskId: any;
  addCourseLectureBody: any;
  addCourseLectureId: any;
  addCourseAttendanceBody: any;
  addCourseAttendanceId: any;
  attendMeBody: any;
  attendMeCourseId: any;
  attendMeMyId: any;
  CourseId: any;
  myId: any;
  userProfileBody: any;
  lectureNumber: any;
  updateStudentGradeBody: any;
  studentIdBody: any;
  courseIdBody: any;
  studentIdBodyBody: any;
  gradeType: any;
  addUserCourseBody: { courseCode: any; };
  addUserCourseId: any;
  deleteUserCourseBody: any;
  deleteUserCourseId: any;

  constructor(private httpClient: HttpClient) { }
  public getCourseSemesterData(courseCode, semester_time): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/course/semester/${courseCode}/${semester_time}`);
  }
  public myCourses(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get(`http://localhost:3000/my/courses/${this.userId}`);
  }
  public getCourseData(id): Observable<any> {
    this.courseId = id;
    return this.httpClient.get(`http://localhost:3000/course/${this.courseId}`);
  }

  public addCourseSemesterGrade(courseCode, semester_time, type, grade): Observable<any> {
    this.addCourseGradeBody = { type, grade };
    this.addCourseGradeId = courseCode;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/course/semester/grade/${this.addCourseGradeId}/${semester_time}`, this.addCourseGradeBody, { headers: headers });
  }

  public deleteCourseSemesterGrade(courseCode, semester_time, type): Observable<any> {
    this.deleteCourseGradebody = courseCode;
    this.deleteCourseGradetypebody = type;
    return this.httpClient.delete(`http://localhost:3000/delete/course/semester/grade/${this.deleteCourseGradebody}/${semester_time}/${this.deleteCourseGradetypebody}`);
  }

  public getCourseSemesterStudentsSheet(courseCode, semester_time): Observable<any> {
    // this.courseStudentsSheetBody = courseCode;
    return this.httpClient.get(`http://localhost:3000/course/semester/students/${courseCode}/${semester_time}`);
  }
  public getCourseStudentsGrades(courseCode, gradeType): Observable<any> {
    this.courseStudentsGradesBody = courseCode;
    this.courseGradeType = gradeType;
    return this.httpClient.get(`http://localhost:3000/course/students/grades/${this.courseStudentsGradesBody}/${this.courseGradeType}`);
  }

  public addSemesterStudentGrade(courseCode, studentId, semester_time, gradeType, score): Observable<any> {
    this.addStudentGradeBody = { studentId, gradeType, score };
    this.addStudentGradeId = courseCode;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/course/semester/student/grade/${this.addStudentGradeId}/${semester_time}`, this.addStudentGradeBody, { headers: headers });
  }

  public updateSemesterStudentGrade(courseId, studentId, semester_time, gradeType, score): Observable<any> {
    this.updateStudentGradeBody = { gradeType, score };
    this.studentIdBody = studentId;
    this.courseIdBody = courseId
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`http://localhost:3000/update/course/semester/student/grade/${this.studentIdBody}/${this.courseIdBody}/${semester_time}`, this.updateStudentGradeBody, { headers: headers });
  }

  public addCourseSemesterTask(courseCode, semester_time, type, path): Observable<any> {
    this.addCourseTaskBody = { type, path };
    this.addCourseTaskId = courseCode;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/course/semester/task/${this.addCourseTaskId}/${semester_time}`, this.addCourseTaskBody, { headers: headers });
  }


  public deleteCourseSemesterTask(courseCode, semester_time, type): Observable<any> {
    this.deleteCourseTaskBody = type;
    this.deleteCourseTaskId = courseCode;
    return this.httpClient.delete(`http://localhost:3000/delete/course/semester/task/${this.deleteCourseTaskId}/${this.deleteCourseTaskBody}/${semester_time}`);
  }

  public addCourseSemesterLecture(courseCode, semester_time, lectureNumber, lectureLocation, beacon_id): Observable<any> {
    this.addCourseLectureBody = { lectureNumber, lectureLocation, beacon_id };
    this.addCourseLectureId = courseCode;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/course/semester/lecture/${this.addCourseLectureId}/${semester_time}`, this.addCourseLectureBody, { headers: headers });
  }

  public addCourseSemesterAttendance(courseId, semester_time, lectureNumber, beacon_id): Observable<any> {
    this.addCourseAttendanceBody = { lectureNumber, beacon_id };
    this.addCourseAttendanceId = courseId;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/course/semester/attendance/${this.addCourseAttendanceId}/${semester_time}`, this.addCourseAttendanceBody, { headers: headers });
  }

  public semesterAttendMe(id, courseId, semester_time, lectureNumber, beacon_id): Observable<any> {
    this.attendMeBody = { lectureNumber, beacon_id };
    this.attendMeCourseId = courseId;
    this.attendMeMyId = id
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/course/semester/attend/me/${this.attendMeMyId}/${this.attendMeCourseId}/${semester_time}`, this.attendMeBody, { headers: headers });
  }


  public getMyCourseSemesterGrades(id, courseCode, semester_time, gradetype): Observable<any> {
    this.CourseId = courseCode;
    this.myId = id;
    this.courseGradeType = gradetype;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get(`http://localhost:3000/course/semester/my/grades/${this.myId}/${this.CourseId}/${this.courseGradeType}/${semester_time}`);
  }

  public profile(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get<User>(`http://localhost:3000/profile/${this.userId}`);
  }

  public semesterMyattendancesheet(id, courseCode, semester_time): Observable<any> {
    this.myId = id;
    this.CourseId = courseCode;
    return this.httpClient.get<User>(`http://localhost:3000/course/semester/my/attendance/${this.myId}/${this.CourseId}/${semester_time}`);
  }

  public studentsSemesterAttendancesheet(studentId, courseCode, semester_time, lectureNumber): Observable<any> {
    this.lectureNumber = lectureNumber;
    this.CourseId = courseCode;
    this.studentIdBodyBody = studentId;
    return this.httpClient.get(`http://localhost:3000/course/semester/attendance/sheet/${this.studentIdBodyBody}/${this.CourseId}/${this.lectureNumber}/${semester_time}`);
  }
  public semesterStudentTotalAttendance(studentId, courseCode, semester_time): Observable<any> {
    this.CourseId = courseCode;
    this.studentIdBodyBody = studentId;
    return this.httpClient.get(`http://localhost:3000/course/semester/student/total/attendance/${this.studentIdBodyBody}/${this.CourseId}/${semester_time}`);
  }

  public semesterStudentsGradesheet(studentId, courseCode, semester_time, gradeType): Observable<any> {
    this.gradeType = gradeType;
    this.CourseId = courseCode;
    this.studentIdBodyBody = studentId;
    return this.httpClient.get(`http://localhost:3000/course/semester/grade/sheet/${this.studentIdBodyBody}/${this.CourseId}/${this.gradeType}/${semester_time}`);
  }

  public semesterStudentTotalGrades(studentId, courseCode, semester_time): Observable<any> {
    this.CourseId = courseCode;
    this.studentIdBodyBody = studentId;
    return this.httpClient.get(`http://localhost:3000/course/semester/student/total/grade/${this.studentIdBodyBody}/${this.CourseId}/${semester_time}`);
  }

  public totalCourseSemesterGrades(courseCode, semester_time): Observable<any> {
    this.CourseId = courseCode;
    return this.httpClient.get(`http://localhost:3000/course/semester/total/grades/${this.CourseId}/${semester_time}`);
  }

  public semesterAttendanceReport(courseCode, semester_time): Observable<any> {
    this.CourseId = courseCode;
    return this.httpClient.get(`http://localhost:3000/course/semester/attendance/report/${this.CourseId}/${semester_time}`);
  }

  public semesterGradesReport(courseCode, semester_time): Observable<any> {
    this.CourseId = courseCode;
    return this.httpClient.get(`http://localhost:3000/course/semester/grades-report/${this.CourseId}/${semester_time}`);
  }

  public myCoursesByStatus(id, status): Observable<any> {
    this.userId = id;
    return this.httpClient.get(`http://localhost:3000/my/courses/bystatus/${this.userId}/${status}`);
  }
  public addUserCourse(id, courseCode): Observable<any> {
    this.addUserCourseBody = { courseCode };
    this.addUserCourseId = id;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/user/course/${this.addUserCourseId}`, this.addUserCourseBody, { headers: headers });
  }

  public deleteUserCourse(id, courseCode): Observable<any> {
    this.deleteUserCourseBody = courseCode;
    this.deleteUserCourseId = id;
    return this.httpClient.delete(`http://localhost:3000/delete/user/course/${this.deleteUserCourseId}/${this.deleteUserCourseBody}`);
  }
  public getActiveCourses(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/courses/active');
  }
}
