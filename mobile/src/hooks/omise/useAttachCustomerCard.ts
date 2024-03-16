import {
  useMutation,
  UseMutationResult,
  useQueryClient
} from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { customer } from "types/generated";
import { OmiseErrorResponse } from "types/omise";
import { omiseAxiosInstance } from "utils/axios-instances";

export interface AttachCustomerCardPayload {
  customerId: string;
  cardTokenId: string;
}

export default function useAttachCustomerCard(): UseMutationResult<
  AxiosResponse<customer>,
  AxiosError<OmiseErrorResponse>,
  AttachCustomerCardPayload
> {
  const queryClient = useQueryClient();

  const mutationFn = ({
    customerId,
    cardTokenId
  }: AttachCustomerCardPayload): Promise<AxiosResponse<customer>> => {
    return omiseAxiosInstance.patch(`/customers/${customerId}`, {
      card: cardTokenId
    });
  };

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["omiseCustomer"]
      });
    }
  });
}
