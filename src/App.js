// import PageNotFound from "./pages/page-not-found";
// import NotAuthorized from "./pages/not-authorized";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
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
