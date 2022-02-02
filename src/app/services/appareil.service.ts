export class AppareilService {
    appareils:any[] = [
        { name :'Télé', status:'allumé' },
        { name :'Ordinateur', status:'éteint' },
        { name :'Machine à café', status:'éteint' }
        ];
   
    // tout allumer
    switchAllOn(){
        for (let a of this.appareils){
            a.status=  'allumé';
          } 
    }

    // tout eteindre
    switchAllOff(){
        for (let a of this.appareils){
            a.status=  'éteint';
          } 
    }
    // allulmer 1 appareil
    switchOneOn(i:number){
        this.appareils[i].status ='allumé';
    }
    // éteindre 1 appareil
    switchOneOff(i:number){
        this.appareils[i].status ='éteint';

    }
   
    
}