import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { CommonService } from '../common.service';

import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RoomsService extends CommonService {

    constructor(
        protected http: Http,
        protected router: Router
    ) { 
        super();
    }

    public getAll(){
        return this.http.get(this.URLs.rooms.search).toPromise()
        .then(this.extractData);
    }

    /**
     * viewDetails
     */
    public viewDetails(id) {
        this.router.navigate(['pages/houses', id]);
    }    


}