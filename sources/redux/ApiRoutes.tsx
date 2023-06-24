import {SET_AGENCES, SET_VOITURES, SWAP_VOITURE_IN_AGENCES, UPDATE_VOITURE} from "./Constants";
import {API_BASE_URL} from "../Config";


export const API_ROUTES_MAPPER = {
    GET_VOITURES    :   `${API_BASE_URL}/voitures`,
    GET_AGENCES     :   `${API_BASE_URL}/agences`,
    SWAP_VOITURE_IN_AGENCES    :   `${API_BASE_URL}/agences/swap_voitures/`,
    UPDATE_VOITURE  :   `${API_BASE_URL}/voitures`,
}