import * as dotenv from 'dotenv'; 
import React from 'react';
dotenv.config();

export default function Head() {
    return (
        <>
            <title>Create Next App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
};