import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { adminCoursesPage } from './courses.page';

describe('coursesPage', () => {
  let component: adminCoursesPage;
  let fixture: ComponentFixture<adminCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [adminCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(adminCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
