import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  results: string[];
    constructor(private http: HttpClient) {}
    ngOnInit(): void {
        this.http.get('https://3000-c57c4502-c373-4e9b-9664-b0d1acc2b570.ws-eu01.gitpod.io/ciao').subscribe(data => {
        this.results = data['messaggio'];
      });
    }
}
