import getCarImage from "../../model/Base64CarImage";
import Voiture from "../../model/Voiture";

const initialState = {
    voitures: [
        new Voiture("qekflqzhdliherrr", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
        new Voiture("qekflqzhdddlihee", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
        new Voiture("qekddeflqzhdlihe", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
        new Voiture("qezgfkflqzhdlihe", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
    ]
}

export default function voituresReducer(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}