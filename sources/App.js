import Navigation from './navigation/Navigation';
import store from "./redux/store";
import {Provider} from "react-redux";

export default function App() {

  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );

  /*
  TODO
    * faire les actions d'update (sans api)
    * text input + action liée
    * favoris en async storage
    * utiliser l'api
    * unit tests :
        - actions
        - reducers
        - ui

   */


}
