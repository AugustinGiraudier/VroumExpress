import React from "react";
import VoitureListItem from "../../components/voitureItem";
import Voiture from "../../model/Voiture";
import {expect} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native'
import '@testing-library/jest-native/extend-expect';

describe('<VoitureListItem />', () => {

    const laVoiture = new Voiture("","MARQUE","MODELE","","IMAGE","","");

    test('Assert displayed values', () => {

        render(<VoitureListItem item={laVoiture} navigation={undefined}/>)

        // Texts & image
        expect(screen.getByTestId('voiture-name')).toHaveTextContent(laVoiture.modele)
        expect(screen.getByTestId('voiture-name')).toHaveTextContent(laVoiture.marque)
        expect(screen.getByTestId("voiture-image")).toHaveProp("source", {uri: laVoiture.image})
    })

    test('Assert navigate', () => {

        const mockNavigation = {
            navigate: jest.fn()
        };

        render(<VoitureListItem item={laVoiture} navigation={mockNavigation}/>)

        // navigation
        fireEvent.press(screen.getByTestId('voiture-button'));
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Louer une voiture', { item: laVoiture });
    })

});