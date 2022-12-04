import QuoteList from '../quotes/QuoteList';
import useHttp from '../../hooks/use-http'
import {getAllQuotes} from '../../lib/api'
import { useEffect } from 'react';
import LoadingSpinner from '../UI/LoadingSpinner';
import NoQuotesFound from '../quotes/NoQuotesFound'

const AllQuotes = () => {
    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true);
    // const quoteList = useSelector(state => state.quote.quotes)
    useEffect(() => {
        sendRequest();
    }, [sendRequest])

    if(status === 'pending'){
        return ( <div className='centered'>
            <LoadingSpinner></LoadingSpinner>
        </div> )
    }

    if(error) {
        return <p className='centered focus'> {error} </p>
    }

    if( status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0) ){
        return <NoQuotesFound></NoQuotesFound>
    }

    return <QuoteList quotes={loadedQuotes}>

    </QuoteList>
}

export default AllQuotes;