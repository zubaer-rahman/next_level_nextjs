"use client"
import React from 'react';
import ServerComponent from "../../components/servers/serverComponent"
import Contact from "./contact"

const page = () => {
    return (
        <div>
            <h1>Contact Page</h1>
            <Contact>
                <ServerComponent />
            </Contact>
        </div>
    );
};

export default page;