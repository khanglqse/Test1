import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CommonService } from '../common.service';

@Injectable()
export class TransactionService extends CommonService {

    private url = this.URLs.transaction.search;

    constructor(protected http: Http) {
        super();
    }

    public getData(): Promise<any> {

        return this.http.get(this.url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }


}