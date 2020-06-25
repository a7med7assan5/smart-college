import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addStudentGradePage } from './add-student-grade.page';

describe('addStudentGradePage', () => {
  let component: addStudentGradePage;
  let fixture: ComponentFixture<addStudentGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addStudentGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addStudentGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
