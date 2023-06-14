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
    * pouvoir envoyer des datas aux vues
    * finir page one car
    * faire l'action d'update
    * text input
    * utiliser l'api
    * favoris en async storage
    * unit tests :
        - actions
        - reducers
        - ui


   */


}
