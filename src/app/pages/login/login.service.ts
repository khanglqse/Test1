import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CommonService } from '../common.service';

@Injectable()
export class LoginService extends CommonService {

    private url = this.URLs.login.process;

    constructor(protected http: Http,
    protected router: Router) { 
        super();
    }

    login(username: string, password: string) {

        return this.http.get(this.url)//, JSON.stringify({ "username": username, "password": password }))
            .subscribe( (response:Response) => {

                let result = response.json();

                if (result) {
                    if(result.username == username){
                        localStorage.setItem('currentUser', JSON.stringify(response));
                        this.router.navigate(['/pages']);
                        alert("Login Success!");
                        
                    }else{
                        alert("Username or password is not correct");
                    }
                    
                } else {
                    alert("Login Fail!");
                }

            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}