import {GET, GET_VOITURES, PUT, UPDATE_VOITURE, VOITURE_ERROR} from "../Constants";
import {Dispatch} from "redux";
import {API_ROUTES_MAPPER} from "../ApiRoutes";
import Voiture from "../../model/Voiture";
import getCarImage from "../../model/Base64CarImage";

export const setVoitures = (data) => ({
    type: GET_VOITURES,
    payload : data
})

export const setUpdateVoitures = (data) => ({
    type: UPDATE_VOITURE,
    payload : data
})

export const setVoituresError = (data) => ({
    type: VOITURE_ERROR,
    payload : data
})

export const getVoitures = () => {
    const verb = GET
    return async (dispatch: Dispatch) => {
        try {
            /*const response = await fetch(API_ROUTES_MAPPER[GET_VOITURES]);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();*/

            const data = [
                new Voiture("qekflqzhdliherrr", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
                new Voiture("qekflqzhdddlihee", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
                new Voiture("qekddeflqzhdlihe", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
                new Voiture("qezgfkflqzhdlihe", "Tesla", "Modele Y", "2023-06-13", getCarImage()),
            ];
            dispatch(setVoitures(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setVoituresError(error.message));
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
            dispatch(setUpdateVoitures(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setVoituresError(error.message));
        }
    }
}