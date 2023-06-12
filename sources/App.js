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
}
