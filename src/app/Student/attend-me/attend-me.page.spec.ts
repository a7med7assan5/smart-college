import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { attendMePage } from './attend-me.page';

describe('attendMePage', () => {
  let component: attendMePage;
  let fixture: ComponentFixture<attendMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [attendMePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(attendMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
