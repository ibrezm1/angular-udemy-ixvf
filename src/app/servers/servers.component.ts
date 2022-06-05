import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allownewserver = false;
  servercreationstatus = 'Server is not provisioned';
  servername = null
  servername1='Test'
  servercreated = false;
  serverlist = ['Server 1','Server 2']


  username = null;
  constructor() {
    setTimeout(() => {
      this.allownewserver = !this.allownewserver;
    }, 5000);
  }

  onCreateServer() {
    this.servercreationstatus = `New Server Created ${this.servername}`;
    this.servercreated=true;
    this.serverlist.push(this.servername);
  }

  onUpdateServerName( event:Event){
    this.servername = (<HTMLInputElement>event.target).value;
  }

  clearUsername(){
    this.username = null;
  }

  ngOnInit() {}
}
