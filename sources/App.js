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
    * refaire stub propre
    * recherche agences
    * favoris en async storage
    * location des voitures
    * unit tests :
        - actions
        - reducers
        - ui

   */


}
