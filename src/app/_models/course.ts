
enum CourseStatus {
    Active = 'active',
    Disable = 'disable',
}
enum SemesterStatus {
    open = 'open',
    Finished = 'finished',
}
export class Course {
    courseCode: string;
    courseName: string;
    courseDepartment: string;
    creaditHours: number;
    status: CourseStatus;
    semesters: [{
        semester_time: number;
        semester_status: SemesterStatus;
        grades: [
            {
                type: { type: String },
                grade: { type: String }
            }
        ];
        tasks: [
            {
                type: { type: String },
                path: { type: String }
            }
        ];
        lectures: [
            {
                lectureNumber: { type: Number },
                lectureLocation: { type: String },
                lectureTime: { type: Date },
                beacon_id: { type: String }
            }
        ];
    }]
}
