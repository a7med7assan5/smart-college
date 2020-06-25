import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { coursesInfoPage } from './courses-info.page';

describe('coursesInfoPage', () => {
  let component: coursesInfoPage;
  let fixture: ComponentFixture<coursesInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [coursesInfoPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(coursesInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
