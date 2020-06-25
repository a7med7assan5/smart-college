import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { userCoursesPage } from './user-courses.page';

describe('userCoursesPage', () => {
  let component: userCoursesPage;
  let fixture: ComponentFixture<userCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(userCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
