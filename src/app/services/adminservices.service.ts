import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {
  addUserBody: any;
  updateuserbody: any;
  deleteuserbody: any;
  addCourseBody: any;
  updateCourseBody: any;
  coursesDepartmentbody: any;
  userProfileBody: any;
  userRolebody: any;
  deleteCoursebody: any;
  userCoursesBody: any;
  addUserCourseBody: any;
  addUserCourseId: any;
  deleteUserCourseBody: any;
  deleteUserCourseId: any;
  getCourseDataBody: any;
  addCourseGradeBody: any;
  addCourseGradeId: any;
  deleteCourseGradebody: any;
  deleteCourseGradetypebody: any;
  courseStudentsSheetBody: any;
  courseStudentsGradesBody: any;
  addStudentGradeBody: any;
  addStudentGradeId: any;
  courseGradeType: any;
  getStudentGradeCourseCode: any;
  getStudentGradeGradeType: any;
  getCourseGradeType: any;
  userId: any;
  updateStudentGradeBody: any;
  updateuserIdbody: any;
  updateCourseIdBody: any;
  studentIdBody: any;
  courseIdBody: any;
  lectureNumber: any;
  CourseId: any;
  studentIdBodyBody: any;
  gradeType: any;
  addCourseSemesterBody: any;
  myId: any;

  constructor(private httpClient: HttpClient) { }

  public profile(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get<User>(`http://localhost:3000/profile/${this.userId}`);
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get<User[]>('http://localhost:3000/users');
  }
  public getUsersByRole(role): Observable<any> {
    this.userRolebody = role;
    return this.httpClient.get<User[]>(`http://localhost:3000/users/${this.userRolebody}`);
  }

  public addUser(_id, name, email, password, role, dataOfJoin): Observable<any> {
    this.addUserBody = { _id, name, email, password, role, dataOfJoin }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post('http://localhost:3000/add/user', this.addUserBody, { headers: headers });
  }

  public updateUser(_id, name, email, password, role): Observable<any> {
    this.updateuserIdbody = _id;
    this.updateuserbody = { name, email, password, role }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`http://localhost:3000/update/user/${this.updateuserIdbody}`, this.updateuserbody, { headers: headers });
  }

  public deleteUser(_id): Observable<any> {
    this.deleteuserbody = _id;
    return this.httpClient.delete(`http://localhost:3000/delete/user/${this.deleteuserbody}`);
  }

  public getUserprofiledata(id): Observable<any> {
    this.userProfileBody = id;
    return this.httpClient.get(`http://localhost:3000/user/${this.userProfileBody}/profile`);
  }

  public getUserCoursesdata(id): Observable<any> {
    this.userCoursesBody = id;
    return this.httpClient.get(`http://localhost:3000/user/${this.userCoursesBody}/courses`);
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
  // ---------------------------------------------


  public getCourses(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/courses');
  }
  public getActiveCourses(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/courses/active');
  }
  public getCourseData(courseCode): Observable<any> {
    this.getCourseDataBody = courseCode
    return this.httpClient.get(`http://localhost:3000/course/${this.getCourseDataBody}`);
  }


  public getDepartmentCourses(courseDepartment): Observable<any> {
    this.coursesDepartmentbody = courseDepartment;
    return this.httpClient.get(`http://localhost:3000/courses/${this.coursesDepartmentbody}`);
  }


  public addCourse(courseCode, courseName, courseDepartment, creaditHours, prerequisite): Observable<any> {
    this.addCourseBody = { courseCode, courseName, courseDepartment, creaditHours, prerequisite }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post('http://localhost:3000/add/course', this.addCourseBody, { headers: headers });
  }
  public addCourseSemester(courseCode, semester_time): Observable<any> {
    this.addCourseSemesterBody = { semester_time }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.post(`http://localhost:3000/add/course/semester/${courseCode}`, this.addCourseSemesterBody, { headers: headers });

  }
  public getCourseSemesterData(courseCode, semester_time): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/course/semester/${courseCode}/${semester_time}`);
  }


  public updateCourse(courseCode, courseName, courseDepartment, creaditHours, prerequisite): Observable<any> {
    this.updateCourseIdBody = courseCode;
    this.updateCourseBody = { courseName, courseDepartment, creaditHours, prerequisite }
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`http://localhost:3000/update/course/${this.updateCourseIdBody}`, this.updateCourseBody, { headers: headers });
  }

  public deleteCourse(courseCode): Observable<any> {
    this.deleteCoursebody = courseCode;
    return this.httpClient.delete(`http://localhost:3000/delete/course/${this.deleteCoursebody}`);
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


  public myCourses(id): Observable<any> {
    this.userId = id;
    return this.httpClient.get(`http://localhost:3000/my/courses/${this.userId}`);
  }
  public myCoursesByStatus(id, status): Observable<any> {
    this.userId = id;
    return this.httpClient.get(`http://localhost:3000/my/courses/bystatus/${this.userId}/${status}`);
  }
  public getMyCourseSemesterGrades(id, courseCode, semester_time, gradetype): Observable<any> {
    this.CourseId = courseCode;
    this.myId = id;
    this.courseGradeType = gradetype;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.get(`http://localhost:3000/course/semester/my/grades/${this.myId}/${this.CourseId}/${this.courseGradeType}/${semester_time}`);
  }



  public changeCourseStatus(courseCode, status): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`http://localhost:3000/change/course/status/${courseCode}/${status}`, { headers: headers });
  }

  public decideStudentsPassOrFail(courseCode): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`http://localhost:3000/change/student/course/status/${courseCode}`, { headers: headers });
  }
  public calculatMyCreditHours(id): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    return this.httpClient.put(`http://localhost:3000/calculate/my/credit/hours/${id}`, { headers: headers });
  }
}
