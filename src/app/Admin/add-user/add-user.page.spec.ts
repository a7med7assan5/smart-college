import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addUserPage } from './add-user.page';

describe('addUserPage', () => {
  let component: addUserPage;
  let fixture: ComponentFixture<addUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addUserPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
