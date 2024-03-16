import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useRetrieveCustomer from "hooks/omise/useRetrieveCustomer";
import { customer } from "types/generated";

interface OmiseContextProps {
  handleSetCustomerId: (customerId: string) => void;
  customer: customer | undefined;
  isCustomerLoading: boolean;
  refetchCutomer: () => void;
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

export const OmiseProvider = ({
  customerId,
  setCustomerId,
  children
}: {
  customerId: string | null;
  setCustomerId: React.Dispatch<React.SetStateAction<string | null>>;
  children: React.ReactNode;
}) => {
  const { data, refetch, isLoading, isRefetching, isFetching } =
    useRetrieveCustomer(customerId);

  const handleSetCustomerId = async (customerId: string) => {
    await AsyncStorage.setItem("customerId", customerId);
    setCustomerId(customerId);
  };

  const value = {
    handleSetCustomerId,
    customer: data?.data,
    isCustomerLoading: isLoading || isRefetching || isFetching,
    refetchCutomer: refetch
  };

  return (
    <OmiseContext.Provider value={value}>{children}</OmiseContext.Provider>
  );
};
