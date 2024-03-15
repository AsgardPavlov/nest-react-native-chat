import React, { createContext, useContext, useState } from "react";
import useRetrieveCustomer from "hooks/omise/useRetrieveCustomer";
import { customer } from "types/generated";

interface OmiseContextProps {
  setCustomerId: React.Dispatch<React.SetStateAction<string | null>>;
  customer: customer | undefined;
  isLoading: boolean;
}

export const OmiseContext = createContext<OmiseContextProps>(
  {} as OmiseContextProps
);

export function useOmise() {
  const context = useContext(OmiseContext);
  if (context === undefined) {
    throw new Error(`useOmise must be used within a OmiseProvider`);
  }
  return context;
}

export const OmiseProvider = ({ children }: { children: React.ReactNode }) => {
  const [customerId, setCustomerId] = useState<string | null>(null);

  const { data, isLoading } = useRetrieveCustomer(customerId);

  const value = {
    setCustomerId,
    customer: data?.data,
    isLoading
  };

  return (
    <OmiseContext.Provider value={value}>{children}</OmiseContext.Provider>
  );
};
