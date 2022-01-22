import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTilesComponent } from './map-tiles.component';

describe('MapTilesComponent', () => {
  let component: MapTilesComponent;
  let fixture: ComponentFixture<MapTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
