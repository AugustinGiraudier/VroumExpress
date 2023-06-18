import {AGENCE_ERROR, GET, GET_AGENCES, PUT, SWAP_VOITURE_IN_AGENCES, VOITURE_ERROR} from "../Constants";
import {Dispatch} from "redux";
import {API_ROUTES_MAPPER} from "../ApiRoutes";

export const getAgences = () => {
    const verb = GET
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(API_ROUTES_MAPPER[GET_AGENCES]);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            dispatch({ type: GET_AGENCES, payload: data });
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch({ type: AGENCE_ERROR, payload: error.message });
        }
    }
}

export const swapVoiture = (AgenceSourceId, AgenceDestId, VoitureId) => {
    const verb = PUT
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`${API_ROUTES_MAPPER[SWAP_VOITURE_IN_AGENCES]}/${AgenceSourceId}/${AgenceDestId}/${VoitureId}`);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            dispatch({ type: SWAP_VOITURE_IN_AGENCES, payload: data });
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch({ type: VOITURE_ERROR, payload: error.message });
        }
    }
}