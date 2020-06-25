import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherStudentSheetPage } from './student-sheet.page';

describe('teacherStudentSheetPage', () => {
  let component: teacherStudentSheetPage;
  let fixture: ComponentFixture<teacherStudentSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherStudentSheetPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherStudentSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
