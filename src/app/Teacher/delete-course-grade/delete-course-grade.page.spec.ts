import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherDeleteCourseGradePage } from './delete-course-grade.page';

describe('teacherDeleteCourseGradePage', () => {
  let component: teacherDeleteCourseGradePage;
  let fixture: ComponentFixture<teacherDeleteCourseGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherDeleteCourseGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherDeleteCourseGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
