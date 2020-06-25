import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherAttendanceSheetStudentPage } from './attendance-sheet-student.page';

describe('teacherAttendanceSheetStudentPage', () => {
  let component: teacherAttendanceSheetStudentPage;
  let fixture: ComponentFixture<teacherAttendanceSheetStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherAttendanceSheetStudentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherAttendanceSheetStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
