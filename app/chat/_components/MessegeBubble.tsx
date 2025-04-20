"use client";
import React from 'react';
import Markdown from 'react-markdown';
import { Message } from '../page';


interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.getUser() === 'user';

  // Separate returns for user and assistant to allow custom content (e.g. Markdown)
  if (isUser) {
    return (
      <div className="flex justify-end my-2">
        <div className="px-4 py-2 rounded-2xl shadow-md max-w-[60%] bg-green-500 text-white break-words">
          {/* User-sent message, render markdown later */}
          {/* <Markdown>{message.getContent()}</Markdown> */}
          {message.getContent()}
          <span className="block text-xs mt-1 text-green-100 text-right">
            {message.getTime()}
          </span>
        </div>
      </div>
    );
  }
  // Assistant / received message
  return (
    <div className="flex justify-start my-2">
      <div className="px-4 py-2 rounded-2xl shadow-md max-w-[60%] bg-white text-gray-900 break-words">
        {/* Received message, render markdown later */}
        {/* <Markdown>{message.getContent()}</Markdown> */}
        AI responsed{message.getContent()}
        <span className="block text-xs mt-1 text-gray-500 text-left">
          {message.getTime()}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
