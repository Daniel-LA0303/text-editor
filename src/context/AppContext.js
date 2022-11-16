import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const[posts, setPosts] = useState([])

    const addPost = (description) => {
        console.log(description);
        setPosts([
            ...posts, description
        ]);
    }

    return (
        <AppContext.Provider
            value={{
                posts,
                setPosts,
                addPost
            }}
        >
            {children}
        </AppContext.Provider>
    )
}