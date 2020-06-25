import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addCoursePage } from './add-course.page';

describe('addCoursePage', () => {
  let component: addCoursePage;
  let fixture: ComponentFixture<addCoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addCoursePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
