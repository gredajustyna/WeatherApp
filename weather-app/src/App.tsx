import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./assets/fonts/fonts.css";
import { MainPage } from "./pages/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { saveState } from "./store/localStorage";

const queryClient = new QueryClient();

function App() {
  store.subscribe(() => {
    saveState(store.getState());
  });
  window.reduxStore = store.getState();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
