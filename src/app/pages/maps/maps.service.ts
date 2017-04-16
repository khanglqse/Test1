import { Injectable } from '@angular/core';
import { Component, ElementRef } from '@angular/core';

import { CommonService } from '../common.service';

@Injectable()
export class MapsService extends CommonService {
    constructor(private _elementRef: ElementRef) {
        super();
    }



    public searchLocation(nameLocation) {
        var el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

        L.Map = L.Map.extend({
            openPopup: function (popup, latlng, options) {
                if (!(popup instanceof L.Popup)) {
                    var content = popup;

                    popup = new L.Popup(options).setContent(content);
                }

                if (latlng) {
                    popup.setLatLng(latlng);
                }

                if (this.hasLayer(popup)) {
                    return this;
                }

                //this.closePopup();
                this._popup = popup;
                return this.addLayer(popup);
            }
        });

        L.Icon.Default.imagePath = this.URLs.map.defaultIcon;

        var map = L.map(el);//.setView(location, 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        var iconUrl = this.URLs.map.icon;

        $.getJSON(this.URLs.map.search, function (data) {
            var houseIcon = L.icon({
                iconUrl: iconUrl,
                iconSize: [25, 25]
            });


            L.geoJson(data, {
                pointToLayer: function (feature, latlng) {
                    var price = feature.properties.price;

                    return L.marker(latlng, { icon: houseIcon })
                        .bindPopup('Price: ' + price + "<br/><a href='#'>link</a>")
                        .openPopup();
                }
            }).addTo(map);



        }).then(data => {
            map.setView([data.location[1], data.location[0]], 13);

        });
    }
};