import Agence from "../../model/Agence";
import {AGENCE_ERROR, SET_AGENCES, SWAP_VOITURE_IN_AGENCES} from "../Constants";

const initialState = {
    agences: [],
    error : null
}

export default function agencesReducer(state = initialState, action){
    switch (action.type) {
        case SET_AGENCES:
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