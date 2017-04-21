import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

@Component({
    selector: 'user',
    templateUrl: './user.html',
    providers: [UserService]
})

export class UserComponent {

    query: string = '';

    data = [];

    constructor(protected service: UserService, protected router: Router) {

        this.loadData();
    }

    public loadData() {
        this.service.getData().then((data) => {
            this.data = data;
        });
    }

    public banUser(event, item): void {
        let message = (item.isBanned) ? "unblock" : "block";

        if (window.confirm('Are you sure you want to ' + message + ' "' + item.FirstName +  '"?')) {

            this.service.setBan(item.id);
            this.loadData();

            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }

    }

    public viewUserDetails(id) {
        this.router.navigate(['pages/users', id]);
    }



    public openCity(evt, cityName) {

        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByClassName("nav-link");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }


}