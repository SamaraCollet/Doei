import PageNotFound from "./pages/page-not-found";
import NotAuthorized from "./pages/not-authorized";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
