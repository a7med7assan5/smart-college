import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { gradesReportPage } from './grades-report.page';

describe('gradesReportPage', () => {
  let component: gradesReportPage;
  let fixture: ComponentFixture<gradesReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [gradesReportPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(gradesReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
