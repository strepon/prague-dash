import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { CardSelectComponent } from 'src/app/schema/card-select-component';
import { AirQualityStationCardDefinition } from '../../schema/air-quality-station-card';
import { AirQualityStationData } from '../../schema/air-quality-station-data';
import { AirQualityService } from '../../services/air-quality.service';

@Component({
  selector: 'app-card-air-quality-station-select',
  templateUrl: './card-air-quality-station-select.component.html',
  styleUrls: ['./card-air-quality-station-select.component.scss']
})
export class CardAirQualityStationSelectComponent implements CardSelectComponent, OnInit {

  stations: AirQualityStationData[] = [];

  search: string = "";

  lang = "cs" as "cs";

  @Output()
  select = new EventEmitter<AirQualityStationCardDefinition>();

  constructor(
    private airQualityService: AirQualityService,
  ) { }

  ngOnInit(): void {
    this.loadAirQualityStations();
  }

  async loadAirQualityStations() {

    const coordinates = await Geolocation.getCurrentPosition({ enableHighAccuracy: true })
      .then(position => {
        if (position) return { lat: position.coords.latitude, lon: position.coords.longitude };
        else return undefined;
      })
      .catch(err => undefined);

    this.stations = await this.airQualityService.getAirQualityStations({
      search: this.search || undefined,
      coordinates
    });
  }

  async onSelect(station: AirQualityStationData) {
    this.select.emit({ id: station.properties.id });
  }

}
