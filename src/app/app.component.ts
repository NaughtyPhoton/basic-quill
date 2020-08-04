import { Component, VERSION, OnInit } from '@angular/core';
import * as quill from "quill";
const Quill = quill.default || quill;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    const options = {
      debug: 'info',
      modules: {
        toolbar: '#toolbar'
      },
      placeholder: 'Compose an epic...',
      readOnly: true,
      theme: 'snow'
  };
  var editor = new Quill('#editor', options);
  }
}


