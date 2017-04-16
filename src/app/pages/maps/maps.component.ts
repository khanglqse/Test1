import { Component, ElementRef } from '@angular/core';




import { MapsService } from './maps.service';

@Component({
  selector: 'maps',
  template: `<ba-card title="Leaflet Maps">
  <div class="leaflet-maps"></div>
</ba-card>
`,
  providers: [MapsService]
})
export class Maps {

  constructor(
    private service: MapsService) {
  }

  ngAfterViewInit() {

    this.service.searchLocation("name Location");
  }

}
