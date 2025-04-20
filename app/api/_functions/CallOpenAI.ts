import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Define all available functions as OpenAI tools
const tools = [
    {
        type: "function",
        name: "get_age",
        description: "Get the age of Mainak based on date of birth.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_introduction",
        description: "Get the assistant's introduction message for Mainak.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_companies",
        description: "Get the list of professional experiences for Mainak.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_location",
        description: "Get Mainak's current location.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_hobbies",
        description: "Get Mainak's hobbies and interests.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_programming_languages",
        description: "Get programming languages known by Mainak.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_speaking_languages",
        description: "Get the languages Mainak can read, write, and speak.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_projects",
        description: "Get Mainak's personal and academic projects.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_education",
        description: "Get Mainak's education background.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_social_media",
        description: "Get Mainak's social media links.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_contact_info",
        description: "Get Mainak's basic contact information.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "get_profile",
        description: "Get full structured profile of Mainak as JSON.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    },
    {
        type: "function",
        name: "not_about_mainak",
        description: "Handle queries not related to Mainak by returning a default apology message.",
        parameters: {
            type: "object",
            properties: {},
            required: [],
            additionalProperties: false
        }
    }
];

// // Example usage
// async function run() {
//     const response = await openai.chat.completions.create({
//         model: "gpt-4-1106-preview",
//         messages: [
//             { role: "user", content: "Tell me about Mainak's hobbies." }
//         ],
//         tools,
//         tool_choice: "auto"
//     });

//     const message = response.choices[0].message;
//     if (message.tool_calls && message.tool_calls.length > 0) {
//         const call = message.tool_calls[0];
//         console.log(`Calling function: ${call.function.name}`);
//         console.log(`Arguments: ${call.function.arguments}`);
//         // Here you would call the corresponding class method and return its result
//     } else {
//         console.log(message.content);
//     }
// }

// run();
