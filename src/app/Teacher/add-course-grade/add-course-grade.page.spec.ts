import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherAddCourseGradePage } from './add-course-grade.page';

describe('teacherAddCourseGradePage', () => {
  let component: teacherAddCourseGradePage;
  let fixture: ComponentFixture<teacherAddCourseGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherAddCourseGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherAddCourseGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
