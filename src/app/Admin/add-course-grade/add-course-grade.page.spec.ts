import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addCourseGradePage } from './add-course-grade.page';

describe('addCourseGradePage', () => {
  let component: addCourseGradePage;
  let fixture: ComponentFixture<addCourseGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addCourseGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addCourseGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
