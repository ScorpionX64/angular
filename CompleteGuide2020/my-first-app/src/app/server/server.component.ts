import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{

    serverId : number = 10;
    serverStatus : string = 'Offline';

    getServerStatus()
    {
        return this.serverStatus;
    }
} 