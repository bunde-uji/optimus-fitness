import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import { AppContext } from '../App';
import '../pages/pageStyles/SearchPage.css';



function SearchPage(props) {
    const {q, id} = useParams();

    const {searchResults} = useContext(AppContext);

    return (  
        <div className='searchpage'>
            {searchResults ? 
                <div>
                    <h3>Search result: {searchResults.length} product(s) found</h3>
                    <div className="searchResultsWrapper">{searchResults.map(r => {
                        return (
                            <Card name={r.name} price={r.price.formatted} image={r.image.url} width='15rem' id={r.id} to={`/product/${r.id}`} />
                        )
                    })}</div>
                </div>:

                <h3>No results found</h3>
            }
        </div>
    );
}

export default SearchPage;