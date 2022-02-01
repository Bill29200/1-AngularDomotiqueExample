import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() appareil:any;
@Input() indice:any;
  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
    /// ????
  }
  //  onAllumer()
  //  {
  //   this.appareilService.switchOneOn(this.indice);
  //  }
  //  onEteindre()
  //  {
  //   this.appareilService.switchOneOff(this.indice);
  //  }
  onChange()
  {
    if (this.appareil.status === 'allumé')
      this.appareilService.switchOneOff(this.indice);
      else
      this.appareilService.switchOneOn(this.indice);

  }
   getNom(){
     if (this.appareil.status === 'allumé')
      return 'OFF'
    else
      return 'ON';
   }

}
