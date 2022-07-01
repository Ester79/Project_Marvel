import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private routingModule: AppRoutingModule) { }

  ngOnInit(): void {
  }

}
