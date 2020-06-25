import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addUserCoursePage } from './add-user-course.page';

describe('addUserCoursePage', () => {
  let component: addUserCoursePage;
  let fixture: ComponentFixture<addUserCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addUserCoursePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addUserCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
