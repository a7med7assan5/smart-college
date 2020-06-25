  // public getCourseGrades(courseCode, gradeType): Observable<any> {
  //   this.getCourseDataBody = courseCode;
  //   this.getCourseGradeType = gradeType;
  //   return this.httpClient.get(`http://localhost:3000/course/grades/${this.getCourseDataBody}/${this.getCourseGradeType}`);
  // }

  // public getCourseGrades(courseCode, gradeType): Observable<any> {
  //   this.getStudentGradeCourseCode = courseCode;
  //   this.getStudentGradeGradeType = gradeType;
  //   return this.httpClient.get(`http://localhost:3000/course/students/grades/${this.getStudentGradeCourseCode}/${this.getStudentGradeGradeType}`)
  // }
  // public studentsAttendancesheet(studentId, courseCode, lectureNumber): Observable<any> {
  //   this.lectureNumber = lectureNumber;
  //   this.CourseId = courseCode;
  //   this.studentIdBodyBody = studentId;
  //   return this.httpClient.get(`http://localhost:3000/course/attendance/sheet/${this.studentIdBodyBody}/${this.CourseId}/${this.lectureNumber}`);
  // }
  // public studentTotalAttendance(studentId, courseCode): Observable<any> {
  //   this.CourseId = courseCode;
  //   this.studentIdBodyBody = studentId;
  //   return this.httpClient.get(`http://localhost:3000/course/student/total/attendance/${this.studentIdBodyBody}/${this.CourseId}`);
  // }
  // public getCourseStudentsGrades(courseCode, gradeType): Observable<any> {
  //   this.courseStudentsGradesBody = courseCode;
  //   this.courseGradeType = gradeType;
  //   return this.httpClient.get(`http://localhost:3000/course/students/grades/${this.courseStudentsGradesBody}/${this.courseGradeType}`);
  // }

  // public addCourseGrade(courseCode, type, grade): Observable<any> {
  //   this.addCourseGradeBody = { type, grade };
  //   this.addCourseGradeId = courseCode;
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
  //   return this.httpClient.post(`http://localhost:3000/add/course/grade/${this.addCourseGradeId}`, this.addCourseGradeBody, { headers: headers });
  // }
    // public deleteCourseGrade(courseCode, type): Observable<any> {
  //   this.deleteCourseGradebody = courseCode;
  //   this.deleteCourseGradetypebody = type;
  //   return this.httpClient.delete(`http://localhost:3000/delete/course/grade/${this.deleteCourseGradebody}/${this.deleteCourseGradetypebody}`);
  // }
    // public getCourseStudentsSheet(courseCode): Observable<any> {
  //   this.courseStudentsSheetBody = courseCode;
  //   return this.httpClient.get(`http://localhost:3000/course/students/${this.courseStudentsSheetBody}`);
  // }
    // public addStudentGrade(courseCode, studentId, gradeType, score): Observable<any> {
  //   this.addStudentGradeBody = { studentId, gradeType, score };
  //   this.addStudentGradeId = courseCode;
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
  //   return this.httpClient.post(`http://localhost:3000/add/student/grade/${this.addStudentGradeId}`, this.addStudentGradeBody, { headers: headers });
  // }
    // public updateStudentGrade(courseId, studentId, gradeType, score): Observable<any> {
  //   this.updateStudentGradeBody = { gradeType, score };
  //   this.studentIdBody = studentId;
  //   this.courseIdBody = courseId
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
  //   return this.httpClient.put(`http://localhost:3000/update/student/grade/${this.studentIdBody}/${this.courseIdBody}`, this.updateStudentGradeBody, { headers: headers });
  // }
    // public getCourseGrades(courseCode, gradeType): Observable<any> {
  //   this.getCourseDataBody = courseCode;
  //   this.getCourseGradeType = gradeType;
  //   return this.httpClient.get(`http://localhost:3000/course/grades/${this.getCourseDataBody}/${this.getCourseGradeType}`);
  // }

  // public addCourseTask(courseCode, type, path): Observable<any> {
  //   this.addCourseTaskBody = { type, path };
  //   this.addCourseTaskId = courseCode;
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
  //   return this.httpClient.post(`http://localhost:3000/add/course/task/${this.addCourseTaskId}`, this.addCourseTaskBody, { headers: headers });
  // }
    // public deleteCourseTask(courseCode, type): Observable<any> {
  //   this.deleteCourseTaskBody = type;
  //   this.deleteCourseTaskId = courseCode;
  //   return this.httpClient.delete(`http://localhost:3000/delete/course/task/${this.deleteCourseTaskId}/${this.deleteCourseTaskBody}`);
  // }
    // public studentsAttendancesheet(courseCode): Observable<any> {
  //   // this.lectureNumber = lectureNumber;
  //   this.CourseId = courseCode;
  //   return this.httpClient.get<User>(`http://localhost:3000/course/attendance/sheet/${this.CourseId}`);
  // }
  
  // public studentsGradesheet(studentId, courseCode, gradeType): Observable<any> {
  //   this.gradeType = gradeType;
  //   this.CourseId = courseCode;
  //   this.studentIdBodyBody = studentId;
  //   return this.httpClient.get(`http://localhost:3000/course/grade/sheet/${this.studentIdBodyBody}/${this.CourseId}/${this.gradeType}`);
  // }
    // public studentTotalGrades(studentId, courseCode): Observable<any> {
  //   this.CourseId = courseCode;
  //   this.studentIdBodyBody = studentId;
  //   return this.httpClient.get(`http://localhost:3000/course/student/total/grade/${this.studentIdBodyBody}/${this.CourseId}`);
  // }
    // public totalCourseGrades(courseCode): Observable<any> {
  //   this.CourseId = courseCode;
  //   return this.httpClient.get(`http://localhost:3000/course/total/grades/${this.CourseId}`);
  // }
  