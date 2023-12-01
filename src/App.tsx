import ReactRouterExample from "./ReactRouterExample";
import WouterExample from "./WouterExample";

import { BrowserRouter } from "react-router-dom";

import { Client, Provider, cacheExchange, fetchExchange } from "urql";

const client = new Client({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  exchanges: [cacheExchange, fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <BrowserRouter>
        <ReactRouterExample />
      </BrowserRouter>
      <WouterExample />
    </Provider>
  );
}

export default App;
