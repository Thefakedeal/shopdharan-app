import React, { useState,useContext } from 'react';

const noLoginRequiredContext = React.createContext();

export function useContinueWithoutLogin(){
    return useContext(noLoginRequiredContext)
}

export function ContinueWithouthLogin({children}) {
    const [noLoginRequired, setNoLoginRequired] = useState(false);
    return (
        <noLoginRequiredContext.Provider value={[noLoginRequired,setNoLoginRequired]}>
            {children}
        </noLoginRequiredContext.Provider>
    )
}
