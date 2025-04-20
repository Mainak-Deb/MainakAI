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
