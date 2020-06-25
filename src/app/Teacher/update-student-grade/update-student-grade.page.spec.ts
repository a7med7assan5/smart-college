import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherUpdateStudentGradePage } from './update-student-grade.page';

describe('teacherUpdateStudentGradePage', () => {
  let component: teacherUpdateStudentGradePage;
  let fixture: ComponentFixture<teacherUpdateStudentGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherUpdateStudentGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherUpdateStudentGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
