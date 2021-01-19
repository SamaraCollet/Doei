import Routes from "./routes";
import GlobalStyle from "./styles/global";
import "./App.css";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
};

export default App;
