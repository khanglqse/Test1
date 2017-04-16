import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Config {

    protected URLs = {
        "houses": {
            "search": "http://localhost:41528/api/houses"
        },
        "login": {
            "process": "app/api/login.json"
        },
        "transaction": {
            "search": "app/api/transaction.json"
        },
        "user": {
            "search": "http://localhost:41528/api/UserApi",
            "ban": "http://localhost:41528/api/UserApi/ban/{id}",
            "get": "http://localhost:41528/api/UserApi/{id}"
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