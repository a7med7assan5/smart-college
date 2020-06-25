import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { teacherGradesPage } from './grades-teacher.page';

describe('teacherGradesPage', () => {
  let component: teacherGradesPage;
  let fixture: ComponentFixture<teacherGradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [teacherGradesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(teacherGradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
