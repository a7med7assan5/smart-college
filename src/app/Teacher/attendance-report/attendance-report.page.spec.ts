import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { attendanceReportPage } from './attendance-report.page';

describe('attendanceReportPage', () => {
  let component: attendanceReportPage;
  let fixture: ComponentFixture<attendanceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [attendanceReportPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(attendanceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
