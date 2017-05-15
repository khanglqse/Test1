import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CommonService } from '../../common.service';

@Injectable()
export class HouseDetailsService extends CommonService {

    constructor(protected http: Http) {
        super();
    }

    public getDetails(id): Promise<any> {

        return this.http.get(this.URLs.houses.get + "?id=" + id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public setApprove(id) {
        return this.http.get(this.URLs.houses.get + "?approve=" + id)
            .toPromise()
            .catch(this.handleError);
    }

}