import {Injectable} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {environment} from "../../environments/environment";
import {Park} from "./map.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  bounds: any
  google: any
  map: any
  markers: any[] = []
  mapLoaded = new BehaviorSubject(false)
  infoWindow: any

  constructor() {
  }

  initMap(): void {
    const loader = new Loader({
      apiKey: environment.googleApi,
      libraries: ["places"]
    })
    loader.load().then(google => {
      this.google = google
      const el = document.getElementById('map') as HTMLElement
      this.map = new google.maps.Map(el, {
        center: {
          lat: 0,
          lng: 0
        },
        mapTypeControl: false,
        zoom: 4
      });
      this.bounds = new google.maps.LatLngBounds();
      this.mapLoaded.next(true)
    })
  }

  getMapLoaded(): Observable<boolean> {
    return this.mapLoaded
  }

  createMarker(park: Park): void {
    const position = {lat: park.coordinates.latitude, lng: park.coordinates.longitude};
    const marker = new this.google.maps.Marker({
      id: park.id,
      position: position,
      map: this.map,
      title: park.name
    })


    this.markers.push(marker)

    marker.addListener('click', () => {
      if (this.infoWindow) {
        this.infoWindow.close()
      }
      this.infoWindow = new google.maps.InfoWindow({
        content: `<p><strong>${park.name}</strong><br/>${park.city}, ${park.state}</p>`,
      });
      this.infoWindow.open(this.map, marker);
    })

    this.bounds.extend(position)
    this.map.fitBounds(this.bounds)
  }

  zoomToPosition(park: Park): void {
    const position = {lat: park.coordinates.latitude, lng: park.coordinates.longitude};
    this.map.panTo(position)
    this.map.setZoom(8)

    if (this.infoWindow) {
      this.infoWindow.close()
    }
    const marker = this.markers.find(marker => marker.id === park.id)
    if (marker) {
      this.infoWindow = new google.maps.InfoWindow({
        content: `<p><strong>${park.name}</strong><br/>${park.city}, ${park.state}</p>`,
      });
      this.infoWindow.open(this.map, marker);
    }
  }
}
