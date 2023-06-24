import { getFormatedDate } from 'react-native-modern-datepicker';

export default class Voiture{

    public constructor(id:string, marque:string, modele:string,
                       disponible:string, image: string, agence_id : string,
                        agence_name : string){
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.image = image;
        this.disponible = disponible;
        this.agence_id = agence_id;
        this.agence_name = agence_name;
    }

    public id : string;
    public agence_id : string;
    public agence_name : string;
    public marque : string;
    public modele : string;
    public disponible : string;
    public image : string;


    public Clone() : Voiture{

        let date = getFormatedDate(this.disponible, "YYYY-MM-DD");
        return new Voiture(this.id, this.marque, this.modele, date, this.image, this.agence_id, this.agence_name);

    }

}