import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get('sort') === 'Asc';
  

  const changeSortingHandler = () => {
    history.push('/quotes?sort=' + (isSortingAsc ? 'Desc' : 'Asc'));
  }
  
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAsc ? 'Desc' : 'Asc'} </button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
