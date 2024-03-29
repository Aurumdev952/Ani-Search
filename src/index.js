import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
