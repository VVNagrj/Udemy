import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  StringInter = 'StringInter' 
  PropertyBinding = 'PropertyBinding' 
  PropertyBindingEg = false

  constructor() { 
    setTimeout(() => {
      this.PropertyBindingEg = true
    }, 2000);
  }

  ngOnInit(): void {}

  onServerClick() {
    this.StringInter = "Server Created"
  }
  

}
