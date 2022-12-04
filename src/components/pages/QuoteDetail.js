import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();
  const  quoteId  = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);


  useEffect(() => {
    sendRequest(quoteId.id);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (error) {
    return <p className="centered focus"> {error} </p>;
  }

  if (status === "completed" && (!loadedQuote)) {
    return <NoQuotesFound></NoQuotesFound>;
  }

  return (
    <section>
      <HighlightedQuote quote={loadedQuote}></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </section>
  );
};

export default QuoteDetail;
