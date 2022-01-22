import { Component, OnInit } from '@angular/core';
import {Park, ParksData} from "../map.model";
import {MapService} from "../map.service";

@Component({
  selector: 'app-map-tiles',
  templateUrl: './map-tiles.component.html',
  styleUrls: ['./map-tiles.component.scss']
})
export class MapTilesComponent implements OnInit {
  parks: Park[] = ParksData

  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.mapService.getMapLoaded().subscribe(loaded => {
      if (loaded) {
        this.parks.forEach(park => {
          this.mapService.createMarker(park)
        })
      }
    })
  }

  onCardClick(park: Park): void {
    this.mapService.zoomToPosition(park)
  }

}
