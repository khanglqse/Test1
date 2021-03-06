import { Injectable } from '@angular/core';
import { CommonService } from '../../common.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';



@Injectable()
export class UserDetailService extends CommonService {

    private url = this.URLs.user.get;

    constructor(protected http: Http) {
        super();
    }

    public getDetails(id): Promise<any> {
        return this.http.get(this.url + "?id=" + id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public getTrans(id): Promise<any> {
        return this.http.get(this.URLs.user.trans + "?id=" + id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public getHouseData(): Promise<any> {

        return this.http.get(this.URLs.user.userHouses)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
}