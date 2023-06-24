import Agence from "../../model/Agence";
import {setAgences, setError, setSwapVoiture} from "../../redux/actions/AgencesActions";


describe('test set Agences', () => {
    it('should create an action with SET_AGENCES type', () => {
        const payload = [new Agence("10", "leVille", [])];
        const expectation = {
            type: 'SET_AGENCES',
            payload: payload,
        };
        expect(setAgences(payload)).toEqual(expectation);
    });
})

describe('test swap voiture in Agences', () => {
    it('should create an action with SWAP_VOITURE_IN_AGENCES type', () => {
        const payload = [new Agence("10", "leVille", []), new Agence("10", "leVille", [])];
        const expectation = {
            type: 'SWAP_VOITURE_IN_AGENCES',
            payload: payload,
        };
        expect(setSwapVoiture(payload)).toEqual(expectation);
    });
})

describe('test Agences error', () => {
    it('should create an action with AGENCE_ERROR type', () => {
        const payload = "error msg";
        const expectation = {
            type: 'AGENCE_ERROR',
            payload: payload,
        };
        expect(setError(payload)).toEqual(expectation);
    });
})