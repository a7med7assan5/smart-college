import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { studentSheetPage } from './student-sheet.page';

describe('studentSheetPage', () => {
  let component: studentSheetPage;
  let fixture: ComponentFixture<studentSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [studentSheetPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(studentSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
