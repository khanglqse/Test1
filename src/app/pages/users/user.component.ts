import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';

// for sweetalert2
declare var swal: any;

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

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to ' + message + ' "' + item.FirstName + '"?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Block!',
            cancelButtonText: 'No, keep'
        }).then(function() {

            this.service.setBan(item.id);
            this.loadData();

            swal(
            'Deleted!',
            'you take a ban action!',
            'success'
            )
        }, function(dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                swal(
                'Cancelled',
                'you cancelled this ban action!',
                'error'
                )
            }
        })

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