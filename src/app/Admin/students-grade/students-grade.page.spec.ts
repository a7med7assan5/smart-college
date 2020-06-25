import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { studentsGradePage } from './students-grade.page';

describe('studentsGradePage', () => {
  let component: studentsGradePage;
  let fixture: ComponentFixture<studentsGradePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [studentsGradePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(studentsGradePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
