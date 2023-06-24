import Voiture from "../../model/Voiture";
import {
    setUpdateVoitures,
    setVoitures,
    setVoituresError,
    setVoituresFromAgence
} from "../../redux/actions/VoitureActions";


describe('test set voitures', () => {
    it('should create an action with SET_VOITURES type', () => {
        const payload = [new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")];
        const expectation = {
            type: 'SET_VOITURES',
            payload: payload,
        };
        expect(setVoitures(payload)).toEqual(expectation);
    });
})

describe('test set voitures from agence', () => {
    it('should create an action with SET_VOITURES_FROM_AGENCE type', () => {
        const payload = [new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")];
        const expectation = {
            type: 'SET_VOITURES_FROM_AGENCE',
            payload: payload,
        };
        expect(setVoituresFromAgence(payload)).toEqual(expectation);
    });
})

describe('test Update voiture', () => {
    it('should create an action with UPDATE_VOITURE type', () => {
        const payload = new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence");
        const expectation = {
            type: 'UPDATE_VOITURE',
            payload: payload,
        };
        expect(setUpdateVoitures(payload)).toEqual(expectation);
    });
})

describe('test set voiture error', () => {
    it('should create an action with VOITURE_ERROR type', () => {
        const payload = "Error ...";
        const expectation = {
            type: 'VOITURE_ERROR',
            payload: payload,
        };
        expect(setVoituresError(payload)).toEqual(expectation);
    });
})