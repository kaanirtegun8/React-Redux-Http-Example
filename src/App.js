import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NoFound = React.lazy(() => import("./components/pages/noFound"));
const AllQuotes = React.lazy(() => import('./components/pages/AllQuotes'))

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner></LoadingSpinner>
            </div>
          }
        >
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes"></Redirect>
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes></AllQuotes>
            </Route>
            <Route path="/quotes/:id">
              <QuoteDetail></QuoteDetail>
            </Route>
            <Route path="/new-quote">
              <NewQuote></NewQuote>
            </Route>
            <Route path="*">
              <NoFound></NoFound>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
