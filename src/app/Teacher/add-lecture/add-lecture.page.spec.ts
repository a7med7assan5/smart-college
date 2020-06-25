import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addLecturePage } from './add-lecture.page';

describe('addLecturePage', () => {
  let component: addLecturePage;
  let fixture: ComponentFixture<addLecturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addLecturePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addLecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
