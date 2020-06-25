import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { addAssignmentPage } from './add-assignment.page';

describe('addAssignmentPage', () => {
  let component: addAssignmentPage;
  let fixture: ComponentFixture<addAssignmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addAssignmentPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(addAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
