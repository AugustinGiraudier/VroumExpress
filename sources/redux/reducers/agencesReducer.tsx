import Agence from "../../model/Agence";
import Voiture from "../../model/Voiture";
import getCarImage from "../../model/Base64CarImage";
import {AGENCE_ERROR, GET_AGENCES, SWAP_VOITURE_IN_AGENCES} from "../Constants";

const initialState = {
    agences: []
}

export default function agencesReducer(state = initialState, action){
    switch (action.type) {
        case GET_AGENCES:
            return {
                ...state, agences: action.payload as Agence[] || [],
                error: null,
            };
        case SWAP_VOITURE_IN_AGENCES:
            return {
                ...state,
                agences: state.agences.map(agence =>
                    agence.id === (action.payload[0] as Agence).id ? action.payload[0] as Agence:
                    agence.id === (action.payload[1] as Agence).id ? action.payload[1] as Agence:
                    agence),
                error: null,
            };
        case AGENCE_ERROR:
            return {
                ...state,
                error: action.payload as string
            };
        default:
            return state;
    }
}