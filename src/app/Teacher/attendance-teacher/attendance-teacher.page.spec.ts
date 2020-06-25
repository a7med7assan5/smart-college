import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherAttendancePage } from './attendance-teacher.page';

describe('teacherAttendancePage', () => {
  let component: teacherAttendancePage;
  let fixture: ComponentFixture<teacherAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherAttendancePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
