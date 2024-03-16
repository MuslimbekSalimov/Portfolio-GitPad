import React from "react";

const Context = React.createContext(null)

function Provider({children}) {

    const [lang, setlang] = React.useState('uz')

    return <Context.Provider value={{ lang, setlang}}>{children}</Context.Provider>
}

export {Context, Provider}