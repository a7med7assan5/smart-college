import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { courseSemestersPage } from './course-semesters.page';

describe('courseSemestersPage', () => {
  let component: courseSemestersPage;
  let fixture: ComponentFixture<courseSemestersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [courseSemestersPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(courseSemestersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
