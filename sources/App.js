import Navigation from './navigation/Navigation';
import store from "./redux/store";
import {Provider} from "react-redux";
import { ToastProvider } from 'react-native-toast-notifications'

export default function App() {

  return (
      <ToastProvider
          offset={50}>
          <Provider store={store}>
              <Navigation />
          </Provider>
      </ToastProvider>
  );

}
