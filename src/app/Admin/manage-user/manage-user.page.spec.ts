import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { manageUserPage } from './manage-user.page';

describe('manageUserPage', () => {
  let component: manageUserPage;
  let fixture: ComponentFixture<manageUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [manageUserPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(manageUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
