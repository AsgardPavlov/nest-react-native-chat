import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { SheetManager, SheetProps } from "react-native-actions-sheet";
import Toast from "react-native-toast-message";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultActionSheet from "components/DefaultActionSheet";
import PrimaryButton from "components/PrimaryButton";
import TextInput from "components/TextInput";
import { useOmise } from "contexts/OmiseProvider";
import useCreateCharge from "hooks/omise/useCreateCharge";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  payAmount: yup
    .number()
    .required("Pay amount is required")
    .positive("Pay amount must be positive")
    .integer("Pay amount must be an integer")
});

interface FormValues {
  payAmount: number;
}

const CreateCharge = (props: SheetProps<"CreateChargeSheet">) => {
  const { customer } = useOmise();
  const createChargeMutation = useCreateCharge();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (formValues: FormValues) => {
    const payload = {
      amount: formValues.payAmount,
      cardId: props.payload?.cardId as string,
      customerId: customer?.id as string
    };
    createChargeMutation.mutate(payload, {
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: "Charge error",
          text2: error.response?.data.message || error.message,
          props: {
            swipeable: true
          }
        });
      },
      onSuccess: () => {
        Toast.show({
          type: "success",
          text1: `Pay amount submitted: ${formValues.payAmount}`,
          props: {
            swipeable: true
          }
        });
      },
      onSettled: () => {
        SheetManager?.hide("CreateChargeSheet");
      }
    });
  };

  return (
    <DefaultActionSheet
      title="Enter Pay Amount"
      description="Please enter the pay amount."
    >
      <View style={styles.list}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Pay Amount"
              placeholder="Enter amount"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value ? String(value) : undefined}
              error={errors.payAmount?.message}
              keyboardType="numeric"
              textContentType="none"
              autoComplete="off"
            />
          )}
          name="payAmount"
          rules={{ required: "Pay amount is required" }}
        />
        <PrimaryButton
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          loading={createChargeMutation.isPending}
        />
      </View>
    </DefaultActionSheet>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 22
  }
});

export default CreateCharge;
