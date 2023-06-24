import Voiture from "../../model/Voiture";
import {SET_VOITURES, SET_VOITURES_FROM_AGENCE, UPDATE_VOITURE, VOITURE_ERROR} from "../Constants";

const initialState = {
    voitures: []
}

export default function voituresReducer(state = initialState, action){

    switch (action.type) {
        case SET_VOITURES_FROM_AGENCE:
        case SET_VOITURES:
            return {
                ...state, voitures: action.payload as Voiture[] || [],
                error: null,
            };
        case UPDATE_VOITURE:
            return {
                ...state,
                voitures: state.voitures.map(voiture => voiture.id === ((action.payload as Voiture).id) ? action.payload as Voiture : voiture),
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