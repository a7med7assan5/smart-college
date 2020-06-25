import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { assignmentsPage } from './assignments.page';

describe('assignmentsPage', () => {
  let component: assignmentsPage;
  let fixture: ComponentFixture<assignmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [assignmentsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(assignmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
