"use client";
import { useState } from 'react';
export default function SearchBar () {
    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);
    return (
            <input 
                value={searchQuery}
                type="text" 
                placeholder='search...' 
                onChange={(e)=> setSearchQuery(e.target.value)}
            />
    );
};

 