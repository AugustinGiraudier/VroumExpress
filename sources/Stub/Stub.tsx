import Agence from "../model/Agence";
import Voiture from "../model/Voiture";
import getCarImage from "./CarImages";
import { getToday } from 'react-native-modern-datepicker';
import {getDay} from "../utils/DateUtils";

export default class Stub {

    // =====================================
    // SINGLETON
    // =====================================
    private static instance: Stub;
    private constructor() {
        for(const agence of this.agences){
            for(const voit of agence.voitures){
                this.voitures.push(voit);
            }
        }
    }
    public static getInstance(): Stub {
        if (!Stub.instance) {
            Stub.instance = new Stub();
        }
        return Stub.instance;
    }
    // =====================================


    private agences : Agence[] = [
        new Agence('0', 'Paris', [
            new Voiture("0", "Peugeot", "308", "2023-06-13", getCarImage(0), "0", "Paris"),
            new Voiture("1", "Audi", "Q3", "2023-06-13", getCarImage(1), "0","Paris")
        ]),
        new Agence('1', 'Lyon', [
            new Voiture("2", "Peugeot", "Traveller", "2023-06-13", getCarImage(2), "1",'Lyon'),
            new Voiture("3", "Volkswagen", "Golf", "2023-06-13", getCarImage(3), "1",'Lyon')
        ]),
        new Agence('2', 'Marseille', [
            new Voiture("4", "Peugeot", "3008", "2023-06-13", getCarImage(4), "2",'Marseille'),
            new Voiture("5", "Mercedes", "Class c", "2023-06-13", getCarImage(5), "2",'Marseille'),
            new Voiture("6", "Porsche", "Panamera", "2023-06-13", getCarImage(6), "2",'Marseille'),
            new Voiture("7", "Citroen", "DS7", "2023-06-19", getCarImage(7), "2",'Marseille')
        ]),
        new Agence('3', 'Aubiere', [
            new Voiture("8", "Alpine", "A110", "2023-06-23", getCarImage(8), "3",'Aubière'),
        ])
    ]

    private voitures : Voiture[] = [];

    public getVoitures = () => {
        let voitures : Voiture[] = [];
        for(const voit of this.voitures){
            if( getDay(voit.disponible) < getDay()){
                voitures.push(voit.Clone());
            }
        }
        return voitures;
    }
    public getAgences = (searchKey : string = "") => {
        let agences : Agence[] = [];
        for(const ag of this.agences){
            if((searchKey === "" || ag.ville.toLowerCase().includes(searchKey.toLowerCase()))){
                agences.push(ag.Clone(false));
            }
        }
        return agences;
    }

    public updateVoiture = (id : string, date : string, newAgenceID : string) => {

        let voiture : Voiture = this.voitures.find((voit : Voiture) => { return voit.id == id});
        let ag = this.agences.find((ag : Agence) => {return ag.id == newAgenceID});

        voiture.agence_name = ag.ville;
        voiture.agence_id = newAgenceID;
        voiture.disponible = date;

        return voiture.Clone();
    }

    public swapVoitureBetweenAgences = (agenceSourceID : string, agenceDestID : string, voitureID : string) => {
        let voiture : Voiture = this.voitures.find((voit : Voiture) => { return voit.id == voitureID});

        let agenceS : Agence = null;
        let agenceD : Agence = null;

        for(let ag of this.agences){
            if(ag.id === agenceSourceID && ag.voitures.findIndex((voit : Voiture) => { return voit.id == voitureID}) != -1){
                agenceS = ag;
            }
            else if(ag.id === agenceDestID && ag.voitures.findIndex((voit : Voiture) => { return voit.id == voitureID}) == -1){
                agenceD = ag;
            }
        }

        if(agenceS != null && agenceD != null){
            agenceD.voitures.push(voiture);

            const index = agenceS.voitures.indexOf(voiture, 0);
            if (index > -1) {
                agenceS.voitures.splice(index, 1);
            }

            return [agenceS.Clone(), agenceD.Clone()];
        }

        return [new Agence("-1","",[]),new Agence("-1","",[])];
    }

}