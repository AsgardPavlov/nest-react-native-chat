import { useEffect, useState } from "react";
import { Platform } from "react-native";
import io from "socket.io-client";

const GATEWAY_CHAT_URL_ANDROID = process.env
  .EXPO_PUBLIC_CHAT_GATEWAY_URL_ANDROID as string;
const GATEWAY_CHAT_URL_IOS = process.env
  .EXPO_PUBLIC_CHAT_GATEWAY_URL_IOS as string;

interface Message {
  createdAt: string;
  id: string;
  message: string;
  username: string;
}

interface SendMessagePayload {
  username: string;
  message: string;
}

export default function useChatSubscription() {
  const [messages, setMessages] = useState<Message[]>([]);

  // Initialize Socket.IO client
  const socket = io(
    Platform.OS === "ios" ? GATEWAY_CHAT_URL_IOS : GATEWAY_CHAT_URL_ANDROID
  );

  const handleSendMessage = (payload: SendMessagePayload) => {
    socket.emit("sendMessage", payload);
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Chat server");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from Chat server");
    });

    socket.on("newMessage", (data: Message) => {
      setMessages((prev) => [...prev, data]);
      console.log("Received new message:", data);
    });
    socket.on("getAllMessages", (data: Message[]) => {
      setMessages(data);
      console.log("Received new message:", data);
    });

    return () => {
      socket.disconnect(); // Disconnect when the component unmounts
    };
  }, []);

  return {
    messages,
    handleSendMessage
  };
}
