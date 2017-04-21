import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Config {

    protected URLs = {
        "houses": {
            "search": "http://localhost:3000/app/api/houses.json"
        },
        "login": {
            "process": "http://localhost:3000/app/api/login.json"
        },
        "transaction": {
            "get": "app/api/transaction-details.json",
            "search": "app/api/transaction.json"
        },
        "user": {
            "search": "http://localhost:3000/app/api/users.json",
            "ban": "http://localhost:3000/app/api/user-ban.json",
            "get": "http://localhost:3000/app/api/user-details.json",
            "trans": "http://localhost:3000/app/api/transaction.json"
        },
        "map": {
            "search": "http://localhost:3000/app/api/geojson.json",
            "icon": "http://localhost:3000/assets/img/theme/vendor/leaflet/home.png",
            "defaultIcon": "assets/img/theme/vendor/leaflet"
        }
    };



    constructor() {
    }
}