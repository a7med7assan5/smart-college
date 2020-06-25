import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addCourseStudentGradePage } from './add-course-student-grade.page';

describe('addCourseStudentGradePage', () => {
  let component: addCourseStudentGradePage;
  let fixture: ComponentFixture<addCourseStudentGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addCourseStudentGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addCourseStudentGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
