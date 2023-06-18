import {GET, GET_VOITURES, PUT, UPDATE_VOITURE, VOITURE_ERROR} from "../Constants";
import {Dispatch} from "redux";
import {API_ROUTES_MAPPER} from "../ApiRoutes";
import Voiture from "../../model/Voiture";


export const getVoitures = () => {
    const verb = GET
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(API_ROUTES_MAPPER[GET_VOITURES]);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            dispatch({ type: GET_VOITURES, payload: data });
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch({ type: VOITURE_ERROR, payload: error.message });
        }
    }
}

export const updateVoiture = (voiture : Voiture) => {
    const verb = PUT
    return async (dispatch: Dispatch) => {
        try {
            const response = await fetch(`${API_ROUTES_MAPPER[UPDATE_VOITURE]}/${voiture.id}/${voiture.disponible}`);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            dispatch({ type: UPDATE_VOITURE, payload: data });
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch({ type: VOITURE_ERROR, payload: error.message });
        }
    }
}