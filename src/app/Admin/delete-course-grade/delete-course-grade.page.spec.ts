import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { deleteCourseGradePage } from './delete-course-grade.page';

describe('deleteCourseGradePage', () => {
  let component: deleteCourseGradePage;
  let fixture: ComponentFixture<deleteCourseGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [deleteCourseGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(deleteCourseGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
