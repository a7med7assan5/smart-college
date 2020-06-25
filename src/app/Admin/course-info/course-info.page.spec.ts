import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { courseInfoPage } from './course-info.page';

describe('courseInfoPage', () => {
  let component: courseInfoPage;
  let fixture: ComponentFixture<courseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [courseInfoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(courseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
