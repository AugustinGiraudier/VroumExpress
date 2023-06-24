import voituresReducer from "../../redux/reducers/voituresReducer";
import Stub from "../../Stub/Stub";
import Voiture from "../../model/Voiture";


describe('test voitures reducer', () => {

    const emptyInitialState = {
        voitures: [],
        error : null
    }
    const InitialState = {
        voitures: [
            new Voiture("999", "marque", "modele", "2023-10-10", "image", "1", "agence")
        ],
        error : null
    }

    it('should return initial state', () => {
        expect(voituresReducer(undefined, {})).toEqual(emptyInitialState);
    });

    it('should handle SET_VOITURES', () => {
        const data = [new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")]
        expect(
            voituresReducer(emptyInitialState, {
                type: 'SET_VOITURES',
                payload : data,
            })
        ).toEqual({
            voitures: [...data],
            error : null
        });
    });

    it('should handle SET_VOITURES_FROM_AGENCE', () => {
        const data = [new Voiture("12", "marque", "modele", "2023-10-10", "image", "1", "agence")]
        expect(
            voituresReducer(emptyInitialState, {
                type: 'SET_VOITURES_FROM_AGENCE',
                payload : data,
            })
        ).toEqual({
            voitures: [...data],
            error : null
        });
    });

    it('should handle UPDATE_VOITURE', () => {
        const data = new Voiture("999", "MARQUE", "MODELE", "2023-10-12", "IMAGE", "2", "AGENCE")
        expect(
            voituresReducer(InitialState, {
                type: 'UPDATE_VOITURE',
                payload : data,
            })
        ).toEqual({
            voitures: [data],
            error : null
        });
    });

    it('should handle VOITURE_ERROR', () => {
        const data = "Error msg";
        expect(
            voituresReducer(emptyInitialState, {
                type: 'VOITURE_ERROR',
                payload : data,
            })
        ).toEqual({
            voitures: [],
            error : data
        });
    });

});