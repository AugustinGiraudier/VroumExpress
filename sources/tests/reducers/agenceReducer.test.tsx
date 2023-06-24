import agencesReducer from "../../redux/reducers/agencesReducer";
import Agence from "../../model/Agence";
import Voiture from "../../model/Voiture";


describe('test voitures reducer', () => {

    const emptyInitialState = {
        agences: [],
        error: null
    }
    const InitialState = {
        agences: [
            new Agence("0", "VILLE_0", []),
            new Agence("&", "VILLE_1", [
                new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")
            ]),
        ],
        error: null
    }

    it('should return initial state', () => {
        expect(agencesReducer(undefined, {})).toEqual(emptyInitialState);
    });

    it('should handle SET_AGENCES', () => {
        const data = [new Agence("9", "VILLE", [new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")])];
        expect(
            agencesReducer(emptyInitialState, {
                type: 'SET_AGENCES',
                payload: data,
            })
        ).toEqual({
            agences: [...data],
            error: null
        });
    });

    it('should handle SWAP_VOITURE_IN_AGENCES', () => {
        const data = [
            new Agence("0", "VILLE_0", [
                new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")
            ]),
            new Agence("&", "VILLE_1", [])
        ];
        expect(
            agencesReducer(InitialState, {
                type: 'SWAP_VOITURE_IN_AGENCES',
                payload: data,
            })
        ).toEqual({
            agences: data,
            error: null
        });
    });

    it('should handle AGENCE_ERROR', () => {
        const data = "Error msg";
        expect(
            agencesReducer(emptyInitialState, {
                type: 'AGENCE_ERROR',
                payload: data,
            })
        ).toEqual({
            agences: [],
            error: data
        });
    });

});