import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { loginPage } from './login.page';

describe('loginPage', () => {
  let component: loginPage;
  let fixture: ComponentFixture<loginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [loginPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(loginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
