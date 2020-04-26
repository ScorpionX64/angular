import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string = '';
  btnDisable: boolean = true;
  clearInput() {
    this.username = '';
  }

  onkeyPress()
  {
    if(this.username.length > 0 )
    {
      this.btnDisable = false;
    }
  }
}
