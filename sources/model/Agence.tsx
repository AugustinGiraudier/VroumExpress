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

}