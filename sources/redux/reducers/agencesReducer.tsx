const initialState = {
    agences: [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            agence: 'Paris',
            dispo:"200 véhicules dispo"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            agence: 'Lyon',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d74',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d77',
            agence: 'Marseille',
            dispo:"200 véhicules dispo"
        }]
}

export default function agencesReducer(state = initialState, action){
    switch (action.type) {
        default:
            return state;
    }
}