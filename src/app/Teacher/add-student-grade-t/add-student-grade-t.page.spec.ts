import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addStudentGradeTPage } from './add-student-grade-t.page';

describe('addStudentGradeTPage', () => {
  let component: addStudentGradeTPage;
  let fixture: ComponentFixture<addStudentGradeTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addStudentGradeTPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addStudentGradeTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
