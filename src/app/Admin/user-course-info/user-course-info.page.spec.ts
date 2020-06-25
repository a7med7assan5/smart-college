import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { userCourseInfoPage } from './user-course-info.page';

describe('userCourseInfoPage', () => {
  let component: userCourseInfoPage;
  let fixture: ComponentFixture<userCourseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userCourseInfoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(userCourseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
