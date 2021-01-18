import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Routes />
    </>
  );
};

export default App;
