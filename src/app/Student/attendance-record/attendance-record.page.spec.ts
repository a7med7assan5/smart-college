import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { attendanceRecord } from './attendance-record.page';

describe('attendanceRecord', () => {
  let component: attendanceRecord;
  let fixture: ComponentFixture<attendanceRecord>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [attendanceRecord],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(attendanceRecord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
