import Navigation from './navigation/Navigation';
import store from "./redux/store";
import {Provider} from "react-redux";

export default function App() {

  //const scheme = useColorScheme();

  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );

  /*
  TODO
    * faire des classes metier
    * finir page one car
    * pouvoir envoyer des datas aux vues
    * faire l'action d'update
    * text input
    * utiliser l'api
    * favoris en async storage
    * tests :
        - actions
        - reducers
        - ui


   */


}
