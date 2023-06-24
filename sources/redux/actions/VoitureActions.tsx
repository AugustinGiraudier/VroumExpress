import {GET, SET_VOITURES, SET_VOITURES_FROM_AGENCE, PUT, UPDATE_VOITURE, VOITURE_ERROR} from "../Constants";
import {Dispatch} from "redux";
import {API_ROUTES_MAPPER} from "../ApiRoutes";
import Voiture from "../../model/Voiture";
import Stub from "../../Stub/Stub";

export const setVoitures = (data : Voiture[]) => ({
    type: SET_VOITURES,
    payload : data
})

export const setVoituresFromAgence = (data : Voiture[]) => ({
    type : SET_VOITURES_FROM_AGENCE,
    payload : data
})

export const setUpdateVoitures = (data : Voiture) => ({
    type: UPDATE_VOITURE,
    payload : data
})

export const setVoituresError = (data : string) => ({
    type: VOITURE_ERROR,
    payload : data
})

export const getVoitures = () => {
    const verb = GET
    return async (dispatch: Dispatch) => {
        try {
            // Version API
            /*
            const response = await fetch(API_ROUTES_MAPPER[GET_VOITURES]);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            */

            // Version Stub
            const data = Stub.getInstance().getVoitures();
            dispatch(setVoitures(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setVoituresError(error.message));
        }
    }
}

export const getVoituresFromAgence = (agenceId : string) => {
    const verb = GET
    return async (dispatch: Dispatch) => {
        try {
            // Version API
            /*
            const response = await fetch(API_ROUTES_MAPPER[GET_AGENCES] + "/" + agenceId);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            */

            // Version Stub
            const data = Stub.getInstance().getVoituresFromAgence(agenceId);
            dispatch(setVoituresFromAgence(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setVoituresError(error.message));
        }
    }
}

export const updateVoiture = (voiture : Voiture, disponible : string, newAgenceID : string) => {
    const verb = PUT
    return async (dispatch: Dispatch) => {
        try {
            // Version Api
            /*
            const response = await fetch(`${API_ROUTES_MAPPER[UPDATE_VOITURE]}/${voiture.id}/${disponible}/${newAgenceID}`);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
             */

            // Version Stub
            const data = Stub.getInstance().updateVoiture(voiture.id, disponible, newAgenceID);

            dispatch(setUpdateVoitures(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setVoituresError(error.message));
        }
    }
}