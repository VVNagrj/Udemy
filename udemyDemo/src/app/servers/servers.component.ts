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
  serverName : any 

  constructor() { 
    setTimeout(() => {
      this.PropertyBindingEg = true
    }, 2000);
  }

  ngOnInit(): void {}

  onServerClick() {
    this.StringInter = "Server Created Name of Sever is " + this.serverName
  }

  onUpdateServer(event : Event) {
    console.log((<HTMLInputElement>event.target).value)
    this.serverName = (<HTMLInputElement>event.target).value
  }   

}
