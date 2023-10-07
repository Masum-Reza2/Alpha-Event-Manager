import { createContext } from "react"

export const GlobalContext = createContext();

const ControlRoom = ({ children }) => {

    const globalInfo = { name: "masum" }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom