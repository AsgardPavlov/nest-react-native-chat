import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { charge } from "types/generated";
import { OmiseErrorResponse } from "types/omise";
import { omiseAxiosInstance } from "utils/axios-instances";

interface CreateChargePayload {
  amount: number;
  cardId: string;
  customerId: string;
}

export default function useCreateCharge(): UseMutationResult<
  AxiosResponse<charge>,
  AxiosError<OmiseErrorResponse>,
  CreateChargePayload
> {
  const mutationFn = ({
    amount,
    cardId,
    customerId
  }: CreateChargePayload): Promise<AxiosResponse<charge>> => {
    const payload = {
      amount,
      currency: "THB",
      card: cardId,
      customer: customerId
    };

    return omiseAxiosInstance.post("/charges", payload);
  };

  return useMutation({
    mutationFn
  });
}
