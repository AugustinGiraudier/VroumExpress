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
    * location des voitures
    * unit tests :
        - all actions
        - all reducers
        - 1 ui
   */


}
