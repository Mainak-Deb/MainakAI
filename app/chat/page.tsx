"use client";

import { useState, useEffect, ChangeEvent } from "react";

export default function Page() {
  // Define the state types explicitly
  const [input, setInput] = useState<string>("");
  const [chats, setChats] = useState<string[]>([]);

  // Load chats from localStorage when the component mounts
  useEffect(() => {
    const storedChats = localStorage.getItem("chats");
    if (storedChats) {
      setChats(JSON.parse(storedChats));
    }
  }, []);

  // Update localStorage every time the chats state changes
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const handleSend = () => {
    if (input.trim() !== "") {
      setChats([...chats, input.trim()]);
      setInput("");
    }
  };

  const handleClear = () => {
    setChats([]);
    localStorage.removeItem("chats");
  };

  // Type for the input change event
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Chat Next.js</h1>
      {/* Chat Window */}
      <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow mb-4">
        {chats.length > 0 ? (
          chats.map((msg, index) => (
            <div key={index} className="mb-2 p-2 bg-blue-100 rounded text-black">
              {msg}
            </div>
          ))
        ) : (
          <p className="text-black">No chats yet!</p>
        )}
      </div>
      {/* Input & Buttons */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 bg-gray-300 rounded px-3 py-2 outline-none focus:ring focus:ring-blue-200 text-black"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
          Send
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
}
