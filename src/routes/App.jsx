import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "../assets/styles/App.scss";

import Movies from "../containers/Movies";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
import Error from "../components/Error";
const Watched = lazy(() => import("../containers/Watched"));
const MovieDetails = lazy(() => import("../containers/MovieDetails"));

const App = () => (
  <BrowserRouter>
    <Layout>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={Error}>
          <Switch>
            <Route exact path="/watched" component={Watched} />
            <Route path="/movie/details/:id" component={MovieDetails} />
            <Route exact path="/" component={Movies} />
            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </Suspense>
    </Layout>
  </BrowserRouter>
);

export default App;
