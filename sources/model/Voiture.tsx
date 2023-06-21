
export default class Voiture{

    public constructor(id:string, marque:string, modele:string,
                       disponible:string, image: string, agence_id : string,
                        agence_name : string){
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.image = image;
        this.disponible = new Date(disponible);
        this.agence_id = agence_id;
        this.agence_name = agence_name;
    }

    public id : string;
    public agence_id : string;
    public agence_name : string;
    public marque : string;
    public modele : string;
    public disponible : Date;
    public image : string;

}