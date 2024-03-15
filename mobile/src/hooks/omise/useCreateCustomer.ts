import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { customer } from "types/generated";
import { OmiseErrorResponse } from "types/omise";
import { omiseAxiosInstance } from "utils/axios-instances";

interface CreateCustomerPayload {
  firstName: string;
  lastName: string;
  email: string;
}

export default function useCreateCustomer(): UseMutationResult<
  AxiosResponse<customer>,
  AxiosError<OmiseErrorResponse>,
  CreateCustomerPayload
> {
  const mutationFn = ({
    firstName,
    lastName,
    email
  }: CreateCustomerPayload) => {
    return omiseAxiosInstance.post(
      `/customers`,
      {},
      {
        params: {
          description: `${firstName} ${lastName}`,
          email: email
        }
      }
    );
  };

  return useMutation({
    mutationFn
  });
}
