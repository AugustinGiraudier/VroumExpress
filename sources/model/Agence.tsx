import Voiture from "./Voiture";
import {getDay} from "../utils/DateUtils";

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
        for(let voit of this.voitures){
            if(includeNoAvilable || getDay(voit.disponible) < getDay()){
                ag.voitures.push(voit.Clone());
            }
        }
        return ag;
    }

}