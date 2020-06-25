import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addCourseSemesterPage } from './add-course-semester.page';

describe('addCourseSemesterPage', () => {
  let component: addCourseSemesterPage;
  let fixture: ComponentFixture<addCourseSemesterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addCourseSemesterPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addCourseSemesterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
