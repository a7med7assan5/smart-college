import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { userProfilePage } from './user-profile.page';

describe('userProfilePage', () => {
  let component: userProfilePage;
  let fixture: ComponentFixture<userProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userProfilePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(userProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
