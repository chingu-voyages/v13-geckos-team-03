import React, { useState } from 'react';

import SearchBar from './Components/SearchBar'

export default function() {
    const [results, updateResults] = useState([]);
    return (
        <div>
            <SearchBar updateResults={updateResults}/>
            
            {/* Container Here for results */}
            {results.map(i => <p key={i.title}>{i.title}</p>)}           
        </div>
    )
}
