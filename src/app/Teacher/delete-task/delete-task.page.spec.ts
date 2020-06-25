import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { deleteTaskPage } from './delete-task.page';

describe('deleteTaskPage', () => {
  let component: deleteTaskPage;
  let fixture: ComponentFixture<deleteTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [deleteTaskPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(deleteTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
