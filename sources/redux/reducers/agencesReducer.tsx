import Agence from "../../model/Agence";
import Voiture from "../../model/Voiture";
import getCarImage from "../../model/Base64CarImage";

const initialState = {
    agences: [
        new Agence('bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 'Paris', [
            new Voiture("qekflqzhdliherrr", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
            new Voiture("qekflqzhdddlihee", "Tesla", "Modele Y", "2023-06-13", getCarImage())
        ]),
        new Agence('bd7hhacbea-c1b1-46c2-aed5-3ad53abb28ba', 'Paris', [
            new Voiture("qekhhflqzhdliherrr", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
            new Voiture("qekflqzhhhdddlihee", "Tesla", "Modele Y", "2023-06-13", getCarImage())
        ]),
    ]
}

export default function agencesReducer(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}