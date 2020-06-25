import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { deleteUserCoursePage } from './delete-user-course.page';

describe('deleteUserCoursePage', () => {
  let component: deleteUserCoursePage;
  let fixture: ComponentFixture<deleteUserCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [deleteUserCoursePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(deleteUserCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
