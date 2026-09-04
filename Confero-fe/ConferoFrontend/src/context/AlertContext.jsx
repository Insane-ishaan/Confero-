import { createContext, useState } from "react";

export const AlertContext = createContext();

export function AlertContextProvide({ children }) {
    const [isAlert, setIsAlert] = useState(false);

    return (
        <AlertContext.Provider value={{ isAlert, setIsAlert }}>
            {children}
        </AlertContext.Provider >
    )
}