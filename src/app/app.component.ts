import { Component } from '@angular/core';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appareils:any[] = [];
  bstate:any;
  info:any;
  nb= this.appareils.length;  
  //private appareilService:AppareilService;
  constructor(private appareilService:AppareilService){
   // this.appareilService = appareilService;
   
  }
  ngOnInit(){
    // je prends le tableau du service
    this.appareils = this.appareilService.appareils;
    this.bstate='ON';
    this.nb=this.appareilService.appareils.length;
    console.log(this.nb);
    
  }
    onAllumer(){
     this.appareilService.switchAllOn();
     this.bstate='ON';
    }
    onEteindre(){
      this.appareilService.switchAllOff();
      this.bstate='OFF';
    }
    onAjouter()
    {
      
      this.appareilService.appareils.push( { name :this.info, status:'éteint' });
      
      this.info='';
      
    }
    getNb()
    {
      return this.appareilService.getNb();
    }
}
