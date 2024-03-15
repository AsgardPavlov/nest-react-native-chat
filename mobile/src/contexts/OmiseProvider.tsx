import React, { createContext, useContext, useState } from "react";
import useRetrieveCustomer from "hooks/omise/useRetrieveCustomer";
import { customer } from "types/generated";

interface OmiseContextProps {
  customer: customer | undefined;
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
    customer: data?.data
  };

  return (
    <OmiseContext.Provider value={value}>{children}</OmiseContext.Provider>
  );
};
