import React, { createContext, useContext, useState, useCallback } from 'react';
import Loader from "../../common/Loader.js";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    const [loadingCount, setLoadingCount] = useState(0);

    const startLoading = useCallback(() => {
        setLoadingCount((prev) => prev + 1);
    }, []);

    const stopLoading = useCallback(() => {
        setLoadingCount((prev) => Math.max(0, prev - 1));
    }, []);

    const isLoading = loadingCount > 0;

    return (
        <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
            {children}
            {isLoading && <Loader message="Loading..." />} {/* Use your Loader component */}
        </LoadingContext.Provider>
    );
};
