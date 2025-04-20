"use client";

import { useState, useEffect, ChangeEvent } from "react";
import MessageBubble from "./_components/MessegeBubble";


export class Message {
    private role: string;
    private content: string;
    private time: Date;


    constructor(role: string, content: string, time?: string) {
        this.role = role;
        this.content = content;
        this.time = time ? new Date(time) : new Date();
    }

    static generateAssistantMessage(input: string): Message {
        return new Message("assistant", input);
    }

    static generateUserMessage(input: string): Message {
        return new Message("user", input);
    }
    getContent(): string {
        return this.content;
    }

    getTime(): string {
        return this.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    getUser(): string {
        return this.role;
    }
}


export default function Page() {
    // Define the state types explicitly
    const [input, setInput] = useState<string>("");
    const [chats, setChats] = useState<Message[]>([]);

    useEffect(() => {
        const storedChats = localStorage.getItem("chats");
        if (storedChats) {
            const parsed = JSON.parse(storedChats);
            const loadedChats = parsed.map((msg: any) => {
                const message = new Message(msg.role, msg.content, msg.time);
                return message;
            });
            setChats(loadedChats);
        }
    }, []);

    // Save chats to localStorage on every change
    useEffect(() => {
        localStorage.setItem("chats", JSON.stringify(chats));
    }, [chats]);

    const handleSend = async () => {
        if (input.trim() !== "") {
            const userMessage = Message.generateUserMessage(input.trim());

            // Add to local chat view (optional UX)
            setChats([...chats, userMessage]);
            setInput("");
            try {
                const response = await fetch("/api/assistantResponse", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ query: userMessage.getContent() }) // 👈 send input as `query`
                });

                const data = await response.json();
                console.log("Server Response:", data);

                // Optionally: handle reply message from server
                if (data.success) {
                    const assistantMessege = Message.generateAssistantMessage(data.message)
                    setChats(prev => [...prev, assistantMessege]);
                }

            } catch (error) {
                console.error("Error sending message:", error);
            }
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
            <h1 className="text-2xl font-bold mb-4 text-blue-900">Chat Mainak.ai</h1>
            {/* Chat Window */}
            <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow mb-4">
                {chats.length > 0 ? (
                    chats.map((msg, index) => (
                        <MessageBubble key={index} message={msg}></MessageBubble>
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
