import {GET_AGENCES, GET_VOITURES, SWAP_VOITURE, UPDATE_VOITURE} from "./Constants";
import {API_BASE_URL} from "../Config";


export const API_ROUTES_MAPPER = {
    GET_VOITURES    :   `${API_BASE_URL}/voitures`,
    GET_AGENCES     :   `${API_BASE_URL}/agences`,
    SWAP_VOITURE    :   `${API_BASE_URL}/swap_voitures`,
    UPDATE_VOITURE  :   `${API_BASE_URL}/voitures`,
}