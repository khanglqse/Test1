import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { CommonService } from '../common.service';

@Injectable()
export class UserService extends CommonService {

    private url = this.URLs.user.search;

    constructor(protected http: Http) {
        super();
    }

    public getData(): Promise<any> {

        return this.http.get(this.url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public setBan(id) {
        this.http.delete(this.URLs.user.ban + "?id=" + id);
    }

}