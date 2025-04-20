import Mainak from "@/app/_DB/Mainak";

export class FunctionCallResult {
    private functionName: string;
    private args: Record<string, any>;
    private mainakObject:Mainak;

    constructor(functionCall: {
        type: string;
        id: string;
        call_id: string;
        name: string;
        arguments: string;
    }) {
        this.functionName = functionCall.name;
        this.mainakObject= new Mainak();
        try {
            this.args = JSON.parse(functionCall.arguments);
        } catch (e) {
            throw new Error("Failed to parse arguments JSON: " + e);
        }
    }

    public async invoke(): Promise<any> {
        switch (this.functionName) {
          case "get_age":
            return this.mainakObject.getAge();
    
          case "get_introduction":
            return this.mainakObject.getIntroduction();
    
          case "get_companies":
            return this.mainakObject.getCompanies();
    
          case "get_location":
            return this.mainakObject.getLocation();
    
          case "get_hobbies":
            return this.mainakObject.getHobbies();
    
          case "get_programming_languages":
            return this.mainakObject.getProgrammingLanguages();
    
          case "get_speaking_languages":
            return this.mainakObject.getSpeakingLanguages();
    
          case "get_projects":
            return this.mainakObject.getProjects();
    
          case "get_education":
            return this.mainakObject.getEducation();
    
          case "get_social_media":
            return this.mainakObject.getSocialMedia();
    
          case "get_contact_info":
            return this.mainakObject.getContactInfo();
    
          case "get_profile":
            return this.mainakObject.getProfile();
    
          case "not_about_mainak":
            return this.mainakObject.notAboutMainak();
    
          default:
            throw new Error(`Unknown function: ${this.functionName}`);
        }
      }


}
