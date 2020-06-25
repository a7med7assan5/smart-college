import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { manageCoursePage } from './manage-course.page';

describe('manageCoursePage', () => {
  let component: manageCoursePage;
  let fixture: ComponentFixture<manageCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [manageCoursePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(manageCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
