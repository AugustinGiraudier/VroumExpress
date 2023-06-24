import Voiture from "./Voiture";

export default class Agence{

    public constructor(id : string, ville : string, voitures : Voiture[]){
        this.id = id;
        this.ville = ville;
        this.voitures = voitures;
    }

    public id : string;
    public ville : string;
    public voitures : Voiture[];

    public Clone(includeNoAvilable = true) : Agence {

        let ag = new Agence(this.id, this.ville, []);
        let now = new Date();
        now.setHours(0,0,0,0);
        for(let voit of this.voitures){
            if(includeNoAvilable || voit.disponible < now){
                ag.voitures.push(voit.Clone());
            }
        }
        return ag;
    }

}