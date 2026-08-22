import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import conversationReducer from "./conversationSlice";
import messageReducer from "./messagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    conversation:conversationReducer,
    message:messageReducer
  },
});