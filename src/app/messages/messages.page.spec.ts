import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { messagesPage } from './messages.page';

describe('messagesPage', () => {
  let component: messagesPage;
  let fixture: ComponentFixture<messagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ messagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(messagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
