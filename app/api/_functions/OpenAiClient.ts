import { OpenAI } from "openai";
import { FunctionCallResult } from "./FunctionCallResult";


// Define all available functions as OpenAI tools




/**
 * OpenAIClient wraps OpenAI function-calling for Mainak's assistant.
 */
export class OpenAIClient {
    private openai: OpenAI;
    private model: string;
    private tools: any[] = [
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
            description: "Get the assistant's introduction message if someone greet the assistant, like hii, hello etc.",
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
            description: "invoked if someone asks question is not related to mainak",
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
        }
    ];

    /**
     * @param openaiInstance - An initialized OpenAI SDK client
     * @param model - Model name (default: "gpt-4-1106-preview")
     */
    constructor( model = "gpt-4o-mini") {
        this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
        this.model = model;
    }

    /**
     * Sends chat messages to the model and returns an array of function calls, if any.
     * @param messages - Chat messages to send
     * @returns Promise resolving to an array of FunctionCallResult
     */
    public async getFunctionCalls(msg: string): Promise<string> {
        const response = await this.openai.responses.create({
            model: this.model,
            input: [{ role: "user", content: msg }],
            tools: this.tools,
            tool_choice:"required",
            temperature:0
        });
        console.log(response);
        const functionOutputs= await this.runFunctions(response.output);
        const structuredString = JSON.stringify(functionOutputs, null, 2);
        return structuredString;
    }

   /**
   * Takes raw function-call objects, invokes each, and collects their outputs.
   */
  public async runFunctions(response: any[]): Promise<any[]> {
    const results: any[] = [];
    for (const callObj of response) {
      const funcCall = new FunctionCallResult(callObj);
      const output = await funcCall.invoke();
      results.push(output);
    }
    return results;
  }


  public async getSummary(question:string, data:string ): Promise<string> {
    
    const response = await this.openai.responses.create({
        model: "gpt-4o-mini",
        instructions: "Act as assistant of Mainak,write answer of question:{"+question+"} based on given data, do not use any information outside data",
        input: data,
        
    });
    const output = response.output_text
    return output;
  }
}
