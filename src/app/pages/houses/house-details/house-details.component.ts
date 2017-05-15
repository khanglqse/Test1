import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'leaflet-map';
//import 'style-loader!./house-details.scss';

import { Http } from '@angular/http';
import { HouseDetailsService } from './house-details.service';

// for sweetalert2
declare var swal: any;

@Component({
    selector: 'house-details',
    styleUrls: ['house-details.css'],
    templateUrl: 'house-details.component.html',
    providers: [HouseDetailsService]
})

export class HouseDetailsComponent {

    public houseInfo = {};

    constructor(private http: Http,
    protected service: HouseDetailsService,
        private _elementRef: ElementRef,
        protected activeRoute: ActivatedRoute) {

        let id = this.activeRoute.snapshot.params['houseId'];

        this.service.getDetails(id)
            .then((ret) => {
                this.houseInfo = ret;
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

    public setApprove(id) {
        this.service.setApprove(id).then( ()=> {
            swal(
                'Set Approve!',
                'you take a approve action!',
                'success'
            );
        });
    }

    
}