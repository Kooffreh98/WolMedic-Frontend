"use client";

import { createContext, useState, ReactNode, useContext } from "react";

// Define types for the context value
interface SidebarContextType {
    isCollapsed: boolean;
    toggleSidebarCollapse: () => void;
}

// Initial context value (can be expanded later)
const initialValue: SidebarContextType = {
    isCollapsed: false,
    toggleSidebarCollapse: () => {},
};

// Create the context with proper typing
const SidebarContext = createContext<SidebarContextType>(initialValue);

// Define prop types for the SidebarProvider
interface SidebarProviderProps {
    children: ReactNode;
}

// SidebarProvider component
const SidebarProvider = ({ children }: SidebarProviderProps) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    // Function to toggle the sidebar collapse state
    const toggleSidebarCollapse = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    return (
        <SidebarContext.Provider value={{ isCollapsed, toggleSidebarCollapse }}>
    {children}
    </SidebarContext.Provider>
);
};

// Hook for accessing sidebar context in other components
const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
};

export { SidebarContext, SidebarProvider, useSidebarContext };
