import react from 'react'
import Navbar from './Navbar';
import MessageSection from './MessageSection';
import ChatInput from './ChatInput';
import { useDispatch, useSelector } from 'react-redux';
import {getMessages} from '../features/getMessages.js';
import { setMessages } from '../redux/messagesSlice.js';
import { useEffect } from 'react';

const ChatArea = () => {
    const { selectedConversation } = useSelector(
  (state) => state.conversation
);
const dispatch = useDispatch();
useEffect(() => {
  const getMesg = async () => {
    if (selectedConversation) {
      const data = await getMessages(selectedConversation?._id);
      dispatch(setMessages(data));
    }
  };

  getMesg();
}, [selectedConversation]);
  return (
    <div className='flex-1 flex flex-col'>
        <Navbar/>
        <MessageSection/>
        <ChatInput/>
    </div>
  );
};

export default ChatArea;