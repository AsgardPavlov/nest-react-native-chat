import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { customer } from "types/generated";
import { OmiseErrorResponse } from "types/omise";
import { omiseAxiosInstance } from "utils/axios-instances";

export default function useRetrieveCustomer(
  customerId: string | null
): UseQueryResult<AxiosResponse<customer>, AxiosError<OmiseErrorResponse>> {
  const queryFn = (): Promise<AxiosResponse<customer>> => {
    return omiseAxiosInstance.get(`/customers/${customerId}`);
  };

  return useQuery({
    queryFn,
    queryKey: ["omiseCustomer", customerId],
    enabled: !!customerId
  });
}
