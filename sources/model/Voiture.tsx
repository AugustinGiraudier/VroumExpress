
export default class Voiture{

    public constructor(id:string, marque:string, modele:string, disponible:string, image: string){
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.image = image;
        this.disponible = new Date(disponible);
    }

    public id : string;
    public marque : string;
    public modele : string;
    public disponible : Date;
    public image : string;

}