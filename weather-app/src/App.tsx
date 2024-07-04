import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./assets/fonts/fonts.css";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
