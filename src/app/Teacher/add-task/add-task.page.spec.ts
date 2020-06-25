import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { addTaskPage } from './add-task.page';

describe('addTaskPage', () => {
  let component: addTaskPage;
  let fixture: ComponentFixture<addTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [addTaskPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(addTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
