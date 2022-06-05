import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverid :string = "3443444"
  serverstatus: string = null
  
  constructor() { 
    this.serverstatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  ngOnInit() {
  }
  getServerStatus(){
    return this.serverstatus
  }

  getColor(){
    return this.serverstatus=="Online" ? 'green' : 'red'
  }

}