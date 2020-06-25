import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { studentCoursesPage } from './courses.page';

describe('coursesPage', () => {
  let component: studentCoursesPage;
  let fixture: ComponentFixture<studentCoursesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [studentCoursesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(studentCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
