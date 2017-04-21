import { Component, OnInit, ElementRef } from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'chat-box',
    templateUrl: 'chat-box.component.html'
})

export class ChatBoxComponent implements OnInit {

    /*
    var message = document.getElementById("message_input");
    var template = document.getElementById("message_template");
    var list_message = document.getElementById("messages");
    var chat_window = document.getElementById("chat_window");
    */

    constructor(private el: ElementRef) { }

    ngOnInit() { }

    public submitMessage(e) {

        if (e.keyCode == 13) {
            this.sendMessage();
        }
    }

    public sendMessage() {

        var message = document.getElementById("message_input");

        console.log(message);

        //if (message == null || message.value == '') return false;

        var template = document.getElementById("message_template");
        var list_message = document.getElementById("messages");

        // create template
        var message_object = document.createElement('li');
        message_object.className = "message appeared right";

        var avatar = document.createElement('div');
        avatar.className = "avatar";
        //avatar.style.backgroundImage = "url(avatar.jpg)";
        avatar.style.backgroundSize = "100% 100%";

        var text_wrapper = document.createElement('div');
        text_wrapper.className = "text_wrapper";

        var text = document.createElement('div');
        text.className = "text";
        //text.innerText = message.value;
        //message.value = '';

        // make nodelist
        text_wrapper.appendChild(text);
        message_object.appendChild(avatar);
        message_object.appendChild(text_wrapper);

        // insert to list chat
        list_message.appendChild(message_object);

        // scroll to bottom of the list
        list_message.scrollTop = list_message.scrollHeight;


    }

    public minimaze() {
        var chat_window = document.getElementById("chat_window");

        if (chat_window.className.includes("minimaze"))
            chat_window.className = "chat_window";
        else
            chat_window.className = "chat_window minimaze";
    }
}