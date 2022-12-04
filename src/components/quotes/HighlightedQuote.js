import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  const quote = props.quote;
  return (
    <figure className={classes.quote}>
      <p>{quote.text}</p>
      <figcaption>{quote.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
