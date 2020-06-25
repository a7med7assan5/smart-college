import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { gradesPage } from './grades.page';

describe('gradesPage', () => {
  let component: gradesPage;
  let fixture: ComponentFixture<gradesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [gradesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(gradesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
