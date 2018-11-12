import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockComponent } from './block.component';
import { COLOR } from '../constants';

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    component.color = COLOR.WHITE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have location co-ordinates', () => {
    expect(component.getCoordinates()).toBeDefined();
  });

  it('should have white color, when set white', () => {
    expect(component.color).toBe(COLOR.WHITE);
  })

});
