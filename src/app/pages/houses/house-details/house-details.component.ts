import { Component, ElementRef } from '@angular/core';

import 'leaflet-map';
//import 'style-loader!./house-details.scss';

import { Http } from '@angular/http';


@Component({
    selector: 'house-details',
    styleUrls: ['house-details.css'],
    templateUrl: 'house-details.component.html'
})

export class HouseDetailsComponent {

    public houseInfo = {};

    constructor(private http: Http,
        private _elementRef: ElementRef) {

        this.http.get("app/api/house-details.json").toPromise()
            .then((ret) => {
                this.houseInfo = ret.json();
            });

    }


    ngAfterViewInit() {
        let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

        L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
        var map = L.map(el).setView([51.505, -0.09], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
    }

}