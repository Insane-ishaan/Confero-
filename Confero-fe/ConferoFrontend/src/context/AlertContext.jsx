import { createContext, useState } from "react";

export const AlertContext = createContext();

export function AlertContextProvide({ children }) {
    const [isAlert, setIsAlert] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successInfoToBeAlert, setSuccessInfoToBeAlert] = useState("");
    const [errorInfoToBeAlert, setErrorInfoToBeAlert] = useState("");
    return (
        <AlertContext.Provider value={{ isAlert, setIsAlert, successInfoToBeAlert, setSuccessInfoToBeAlert, errorInfoToBeAlert, setErrorInfoToBeAlert, isSuccess, setIsSuccess }}>
            {children}
        </AlertContext.Provider >
    )
}