import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareils:any[] = [];
  bstate:any;
  //private appareilService:AppareilService;
  constructor(private appareilService:AppareilService){
   // this.appareilService = appareilService;
  }
  ngOnInit(){
    // je prends le tableau du service
    this.appareils = this.appareilService.appareils;
    this.bstate='ON';
  }
    onAllumer(){
     this.appareilService.switchAllOn();
     this.bstate='ON';
    }
    onEteindre(){
      this.appareilService.switchAllOff();
      this.bstate='OFF';
    }
}
