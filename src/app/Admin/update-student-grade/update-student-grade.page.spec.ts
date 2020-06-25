import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { updateStudentGradePage } from './update-student-grade.page';

describe('updateStudentGradePage', () => {
  let component: updateStudentGradePage;
  let fixture: ComponentFixture<updateStudentGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [updateStudentGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(updateStudentGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
