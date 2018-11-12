import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiecesFactoryComponent } from './pieces-factory.component';

describe('PiecesFactoryComponent', () => {
  let component: PiecesFactoryComponent;
  let fixture: ComponentFixture<PiecesFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiecesFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiecesFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
