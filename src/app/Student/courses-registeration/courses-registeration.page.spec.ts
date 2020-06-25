import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { coursesRegisterationPage } from './courses-registeration.page';

describe('coursesRegisterationPage', () => {
  let component: coursesRegisterationPage;
  let fixture: ComponentFixture<coursesRegisterationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [coursesRegisterationPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(coursesRegisterationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
