import {AGENCE_ERROR, GET, SET_AGENCES, PUT, SWAP_VOITURE_IN_AGENCES, VOITURE_ERROR} from "../Constants";
import {Dispatch} from "redux";
import {API_ROUTES_MAPPER} from "../ApiRoutes";
import Stub from "../../Stub/Stub";
import Agence from "../../model/Agence";

export const setAgences = (data : Agence[]) => ({
    type: SET_AGENCES,
    payload : data
})

export const setSwapVoiture = (data : Agence[]) => ({
    type: SWAP_VOITURE_IN_AGENCES,
    payload : data
})

export const setError = (data : string) => ({
    type: AGENCE_ERROR,
    payload : data
})

export const getAgences = (searchKey : string = "") => {
    const verb = GET
    return async (dispatch: Dispatch) => {
        try {
            // Version Api
            /*
            const response = await fetch(`${API_ROUTES_MAPPER[GET_AGENCES]}/${searchKey}`);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            */

            // Version Stub
            const data = Stub.getInstance().getAgences(searchKey);

            dispatch(setAgences(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setError(error.message));
        }
    }
}

export const swapVoiture = (AgenceSourceId : string, AgenceDestId : string, VoitureId : string) => {
    const verb = PUT
    return async (dispatch: Dispatch) => {
        try {
            // Version Api
            /*
            const response = await fetch(`${API_ROUTES_MAPPER[SWAP_VOITURE_IN_AGENCES]}/${AgenceSourceId}/${AgenceDestId}/${VoitureId}`);
            if (!response.ok) {
                throw new Error(`Failed to ${verb}:  ${response.statusText}`);
            }
            const data = await response.json();
            */

            // Version Stub
            const data = Stub.getInstance().swapVoitureBetweenAgences(AgenceSourceId, AgenceDestId, VoitureId);

            dispatch(setSwapVoiture(data));
        }
        catch (error) {
            console.error(error);
            // @ts-ignore
            dispatch(setError(error.message));
        }
    }
}