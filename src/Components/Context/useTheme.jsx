import React  from "react";

const Context = React.createContext()

function Provider({ children }) {
    const [theme, setheme] = React.useState(window.localStorage.getItem("theme") || "light")

    React.useEffect(() => {
        if (theme) {
          window.localStorage.setItem("theme", theme);
        } else {
          window.localStorage.removeItem("theme");
        }
      }, [theme]);

    return <Context.Provider value={{theme, setheme}}>{ children }</Context.Provider>
}

export { Context, Provider}