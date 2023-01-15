import { BrowserRouter } from "react-router-dom";
import { Page } from "./layouts/Page";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Router />
      </Page>
    </BrowserRouter>
  );
}

export default App;
