import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { coursesSinglePage } from './courses-single.page';

describe('coursesSinglePage', () => {
  let component: coursesSinglePage;
  let fixture: ComponentFixture<coursesSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [coursesSinglePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(coursesSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
