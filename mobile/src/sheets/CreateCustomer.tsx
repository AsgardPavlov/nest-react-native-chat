import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import Toast from "react-native-toast-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import DefaultActionSheet from "components/DefaultActionSheet";
import PrimaryButton from "components/PrimaryButton";
import TextInput from "components/TextInput";
import { useOmise } from "contexts/OmiseProvider";
import useCreateCustomer from "hooks/omise/useCreateCustomer";
import { NavigationProps } from "types/screens";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required")
});

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const CreateCustomer = () => {
  const navigation = useNavigation<NavigationProps>();

  const { handleSetCustomerId, isCustomerLoading } = useOmise();

  const createCustomerMutation = useCreateCustomer();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (formValues: FormValues) => {
    createCustomerMutation.mutate(formValues, {
      onError: (error) => {
        Toast.show({
          type: "error",
          text1: error.response?.data.message || error.message,
          props: {
            swipeable: true
          }
        });
      },
      onSuccess: (res) => {
        handleSetCustomerId(res.data.id as string);
        SheetManager?.hide("CreateCustomerSheet");
        navigation.navigate("AddCard");
        Toast.show({
          type: "success",
          text1: "Account successfully created",
          props: {
            swipeable: true
          }
        });
      }
    });
  };

  return (
    <DefaultActionSheet
      title="Create Account"
      description="Create an account first to add a card."
    >
      <View style={styles.list}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Email"
              placeholder="joe.doe@gmail.com"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.email?.message}
              inputMode="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              autoCapitalize="none"
            />
          )}
          name="email"
          rules={{ required: "Email is required" }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="First Name"
              placeholder="Joe"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.firstName?.message}
              textContentType="givenName"
              autoComplete="given-name"
            />
          )}
          name="firstName"
          rules={{ required: "First Name is required" }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Last Name"
              placeholder="Doe"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors.lastName?.message}
              textContentType="familyName"
              autoComplete="family-name"
            />
          )}
          name="lastName"
          rules={{ required: "Last Name is required" }}
        />
        <PrimaryButton
          title="Create"
          onPress={handleSubmit(onSubmit)}
          loading={createCustomerMutation.isPending || isCustomerLoading}
        />
      </View>
    </DefaultActionSheet>
  );
};

export default CreateCustomer;

const styles = StyleSheet.create({
  list: {
    gap: 22
  }
});
