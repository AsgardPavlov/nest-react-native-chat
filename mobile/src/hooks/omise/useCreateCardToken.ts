import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { token } from "types/generated";
import { OmiseErrorResponse } from "types/omise";
import { omiseVaultAxiosInstance } from "utils/axios-instances";

interface CreateCardTokenPayload {
  cardName: string;
  cardNumber: number;
  cardSecurityCode: number;
  cardExpirationMonth: number;
  cardExpirationYear: number;
}

export default function useCreateCardToken(): UseMutationResult<
  AxiosResponse<token>,
  AxiosError<OmiseErrorResponse>,
  CreateCardTokenPayload
> {
  const mutationFn = ({
    cardName,
    cardNumber,
    cardSecurityCode,
    cardExpirationMonth,
    cardExpirationYear
  }: CreateCardTokenPayload) => {
    const payload = {
      "card[name]": cardName,
      "card[number]": cardNumber,
      "card[security_code]": cardSecurityCode,
      "card[expiration_month]": cardExpirationMonth,
      "card[expiration_year]": cardExpirationYear
    };

    return omiseVaultAxiosInstance.post(`/tokens`, payload);
  };

  return useMutation({
    mutationFn
  });
}
