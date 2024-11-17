"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type VerificationContextType = {
    verificationStatus: "pending" | "success" | "error";
    setVerificationStatus: (status: "pending" | "success" | "error") => void;
  };
  
  const VerificationContext = createContext<VerificationContextType | undefined>(undefined);
  
  export const VerificationProvider = ({ children }: { children: ReactNode }) => {
    const [verificationStatus, setVerificationStatus] = useState<"pending" | "success" | "error">(
      "pending"
    );
  
    return (
      <VerificationContext.Provider value={{ verificationStatus, setVerificationStatus }}>
        {children}
      </VerificationContext.Provider>
    );
  };
  
  export const useVerification = () => {
    const context = useContext(VerificationContext);
    if (!context) {
      throw new Error("useVerification must be used within a VerificationProvider");
    }
    return context;
  };  
