import { Controller, useForm } from "react-hook-form";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import PrimaryButton from "components/PrimaryButton";
import ScreenWrapper from "components/ScreenWrapper";
import TextInput from "components/TextInput";
import { useOmise } from "contexts/OmiseProvider";
import useAttachCustomerCard from "hooks/omise/useAttachCustomerCard";
import useCreateCardToken from "hooks/omise/useCreateCardToken";
import { commonStyles } from "styles/common";
import { OmiseErrorResponse } from "types/omise";
import { NavigationProps } from "types/screens";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  cardName: yup.string().required("Card name is required"),
  cardNumber: yup
    .string()
    .required("Card number is required")
    .matches(
      /^\d{4} \d{4} \d{4} \d{4}$/,
      "Card number must be in the format 0000 0000 0000 0000"
    ),
  cardSecurityCode: yup
    .number()
    .required("CVV is required")
    .min(100, "CVV must be 3 or 4 digits")
    .max(9999, "CVV must be 3 or 4 digits"),
  expiryDate: yup
    .string()
    .required("Expiry date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry date must be in MM/YY format")
});

interface FormValues {
  cardName: string;
  cardNumber: string;
  cardSecurityCode: number;
  expiryDate: string;
}

const AddCard = () => {
  const navigation = useNavigation<NavigationProps>();
  const insets = useSafeAreaInsets();

  const { customer } = useOmise();

  const createCardTokenMutation = useCreateCardToken();
  const attachCustomerCardMutation = useAttachCustomerCard();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  });

  const handleMutationError = (
    errorType: string,
    error: AxiosError<OmiseErrorResponse>
  ) => {
    Toast.show({
      type: "error",
      text1: errorType,
      text2: error.response?.data.message || error.message,
      props: {
        swipeable: true
      }
    });
  };

  const onSubmit = (formValues: FormValues) => {
    const splittedExpiryDate = formValues.expiryDate.split("/");

    const createCardTokenPayload = {
      cardName: formValues.cardName,
      cardNumber: parseInt(formValues.cardNumber.replace(/\s/g, "")),
      cardSecurityCode: formValues.cardSecurityCode,
      cardExpirationMonth: Number(splittedExpiryDate[0]),
      cardExpirationYear: Number(
        `${new Date().getFullYear().toString().slice(0, 2)}${splittedExpiryDate[1]}`
      )
    };

    createCardTokenMutation.mutate(createCardTokenPayload, {
      onError: (error) =>
        handleMutationError("Card Token creation error", error),
      onSuccess: (res) => {
        const attachCustomerCardPayload = {
          cardTokenId: res.data.id as string,
          customerId: customer?.id as string
        };

        attachCustomerCardMutation.mutate(attachCustomerCardPayload, {
          onError: (error) =>
            handleMutationError("Card attaching to customer error", error),
          onSuccess: () => {
            navigation.navigate("Cards");
          }
        });
      }
    });
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");

    return digits.replace(/(\d{4})/g, "$1 ").trim();
  };

  const formatExpiryDate = (value: string) => {
    const digits = value.replace(/\D/g, "");

    return digits.replace(/(\d{2})(\d{2})/, "$1/$2");
  };

  const formatCVV = (value: string) => {
    return value.replace(/\D/g, "");
  };

  return (
    <View style={[commonStyles.flex, { paddingBottom: insets.bottom }]}>
      <ScreenWrapper>
        <View style={styles.list}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="ATM/Debit/Credit card number"
                placeholder="0000 0000 0000 0000"
                onChangeText={(value) => {
                  const formattedValue = formatCardNumber(value);
                  onChange(formattedValue);
                }}
                onBlur={onBlur}
                value={value ? String(value) : undefined}
                error={errors.cardNumber?.message}
                keyboardType="numeric"
                textContentType="creditCardNumber"
                autoComplete="cc-number"
              />
            )}
            name="cardNumber"
            rules={{ required: "Card number is required" }}
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Name on Card"
                placeholder="Ty Lee"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.cardName?.message}
                textContentType="name"
                autoComplete="cc-name"
              />
            )}
            name="cardName"
            rules={{ required: "Card name is required" }}
          />

          <View style={styles.flexRow}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="Expiry Date"
                  placeholder="MM/YY"
                  onChangeText={(value) => {
                    const formattedValue = formatExpiryDate(value);
                    onChange(formattedValue);
                  }}
                  onBlur={onBlur}
                  value={value}
                  error={errors.expiryDate?.message}
                  keyboardType="numeric"
                  textContentType="creditCardExpiration"
                  autoComplete="cc-exp"
                />
              )}
              name="expiryDate"
              rules={{ required: "Expiry date is required" }}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label="CVV"
                  placeholder="123"
                  onChangeText={(value) => {
                    const formattedValue = formatCVV(value);
                    onChange(formattedValue);
                  }}
                  onBlur={onBlur}
                  value={value ? String(value) : undefined}
                  error={errors.cardSecurityCode?.message}
                  keyboardType="numeric"
                  textContentType="oneTimeCode"
                  autoComplete="cc-csc"
                />
              )}
              name="cardSecurityCode"
              rules={{ required: "CVV is required" }}
            />
          </View>

          <View style={styles.imageContainer}>
            <Image source={require("images/secure_payment.png")} />
          </View>
        </View>
      </ScreenWrapper>

      <View style={commonStyles.screenHorizontalPadding}>
        <PrimaryButton
          title="Add Card"
          onPress={handleSubmit(onSubmit)}
          loading={
            createCardTokenMutation.isPending ||
            attachCustomerCardMutation.isPending
          }
        />
      </View>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  list: {
    gap: 22
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    gap: 17
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18
  }
});
