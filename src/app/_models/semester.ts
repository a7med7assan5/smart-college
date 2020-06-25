
enum SemesterStatus {
    open = 'open',
    Finished = 'finished',
}
export class Semester {
    courseCode: string;
    courseName: string;
    semesters: [{
        semester_time: string;
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
