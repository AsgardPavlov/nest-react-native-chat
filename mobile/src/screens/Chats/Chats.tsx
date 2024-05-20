import { LegacyRef, useEffect, useLayoutEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import { PaperAirplaneIcon } from "react-native-heroicons/outline";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { yupResolver } from "@hookform/resolvers/yup";
import ScreenWrapper from "components/ScreenWrapper";
import TextInput from "components/TextInput";
import useChatSubscription from "hooks/chat/useChatSubscription";
import { Colors } from "styles/colors";
import { commonStyles } from "styles/common";
import * as yup from "yup";

interface FormValues {
  message: string;
}

const validationSchema = yup.object().shape({
  message: yup
    .string()
    .min(1, "Message cannot be empty")
    .required("Message is required")
});

const uniqName: string = "Luke Skywalker";

const Chats = () => {
  const { top } = useSafeAreaInsets();
  const ref = useRef<FlatList>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      message: ""
    },
    resolver: yupResolver<FormValues>(validationSchema)
  });

  const { messages, handleSendMessage } = useChatSubscription();

  const onSubmit = (formValues: FormValues) => {
    handleSendMessage({
      username: uniqName,
      message: formValues.message
    });

    reset();
  };

  useLayoutEffect(() => {
    if (messages.length > 0) {
      ref.current?.scrollToEnd({ animated: false });
    }
  }, [messages]);

  return (
    <ScreenWrapper withScrollView={false}>
      <KeyboardAvoidingView
        style={[
          styles.container,
          {
            paddingTop: top
          }
        ]}
        behavior="padding"
      >
        <FlatList
          ref={ref}
          style={commonStyles.screenHorizontalPadding}
          contentContainerStyle={styles.messagesContainer}
          data={messages}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={[
                styles.messageContainer,
                {
                  alignItems:
                    item.username === uniqName ? "flex-end" : "flex-start"
                }
              ]}
            >
              <Text style={[commonStyles.fontHelvetica]}>{item.username}</Text>

              <View style={styles.messageTextContainer}>
                <Text style={[commonStyles.defaultFont]}>{item.message}</Text>
              </View>
            </View>
          )}
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View
              style={[
                commonStyles.screenHorizontalPadding,
                styles.inputContainer
              ]}
            >
              <TextInput
                label={`Your username: ${uniqName}`}
                placeholder="Enter your message"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.message?.message}
                textContentType="familyName"
                autoComplete="family-name"
              />

              <Pressable
                style={styles.sendButton}
                onPress={handleSubmit(onSubmit)}
              >
                <PaperAirplaneIcon color={Colors.PRIMARY} />
              </Pressable>
            </View>
          )}
          name="message"
          rules={{ required: "Message is required" }}
        />
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-between"
  },
  messagesContainer: {
    gap: 8
  },
  messageContainer: {
    flex: 1,
    gap: 4
  },
  messageTextContainer: {
    flexGrow: 0,
    flexWrap: "wrap",
    flex: 0,
    backgroundColor: Colors.LIGHT_PALE,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: "row"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 6,
    paddingTop: 8
  },
  sendButton: {
    ...commonStyles.cardShadow,
    ...commonStyles.cardBorderRadius,
    width: 52,
    height: 52,
    marginBottom: 4,

    justifyContent: "center",
    alignItems: "center"
  }
});
