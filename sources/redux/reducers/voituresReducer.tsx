import getCarImage from "../../model/Base64CarImage";
import Voiture from "../../model/Voiture";
import {GET_VOITURES, UPDATE_VOITURE, VOITURE_ERROR} from "../Constants";

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
        case GET_VOITURES:
            return {
                ...state, voitures: action.payload as Voiture[] || [],
                error: null,
            };
        case UPDATE_VOITURE:
            return {
                ...state,
                voitures: state.voitures.map(voiture => voiture.id === (action.payload as Voiture).id ? action.payload as Voiture : voiture),
                error: null,
            };
        case VOITURE_ERROR:
            return {
                ...state,
                error: action.payload as string
            };
        default:
            return state;
    }
}