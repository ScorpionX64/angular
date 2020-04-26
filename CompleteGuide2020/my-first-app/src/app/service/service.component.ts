import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-service',
  //selector: '[app-service]',
  selector: '.app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No new server was created'
  serverName: string ='testServer';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created: Name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

}
