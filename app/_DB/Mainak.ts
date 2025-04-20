export interface Company {
    name: string;
    role: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    hyperlink:string|null;
}

export interface Education {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    cgpa: number|null;
    percentage:number|null;
    startYear: number;
    endYear: number;
    location: string;
    university:string|null;
    board:string|null;
}

export interface SocialMedia {
    [platform: string]: string;
}

export interface SpeakingLanguage{
    language:string;
    proficiency: string[];
}

export default class Mainak {
    private readonly fullName = "Mainak Deb";
    private readonly dob = new Date("2001-05-20");
    private readonly location = "Kolkata, India";
    private readonly nationality = "Indian";
    private readonly profession = "Software Developer";
    private readonly phone = "+91 7003812954";
    private readonly email = "debmnainak37@gmail.com";

    /**
     * Calculates age based on date of birth
     */
    public getAge(): number {
        const diff = Date.now() - this.dob.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    public getIntroduction(): string {
        return "👋 Hiii, I’m the AI Assistant of Mainak! 🤖💡\nHere to help you with anything you need—just ask away! 🚀✨";
    }
    
    /**
     * Returns professional experiences
     */
    public getCompanies(): Company[] {
        return [
            {
                name: "Interra Information Technology",
                role: "Junior Developer",
                startDate: "July 2023",
                endDate: "Present",
                responsibilities: [
                    "Developed a Generative AI-based chatbot using Gemini & Codey APIs to assist developers with code completion, function generation, test case creation, code conversion, and querying tabular data like tickets.",
                    "Built a high-performance RAG chatbot POC delivering 90% accurate insights from over 50,000 documents, using Milvus vector database and LLMs (LLaMA, Claude, Mistral-8x7b) with a React frontend and Python Flask backend.",
                    "Designed an AI-powered database query application enabling users to query complex database tables in natural language without prior SQL knowledge.",
                    "Developed a POC for Synthetic Data Generation application generating realistic data for over 167 complex tables based on ER diagrams.",
                    "Built an Employee Skill Database application using PowerApps, SharePoint, and Power Automate, streamlining resource management and report generation with 100% efficiency improvement."
                ]
            },
            {
                name: "Interra Information Technology",
                role: "Intern",
                startDate: "January 2023",
                endDate: "July 2023",
                responsibilities: [
                    "Developed an internal chat application with voice and video call functionality using Node.js and WebSocket.",
                    "Designed and implemented a student exam portal with dynamic MCQ shuffling algorithms, result cards, using Java, Struts, and jQuery."
                ]
            }
        ];
    }

    /**
     * Returns current location
     */
    public getLocation(): string {
        return this.location;
    }

    /**
     * Returns hobbies and interests
     */
    public getHobbies(): string[] {
        return [
            "Photography",
            "Painting",
            "Reading non-fiction books",
            "Teaching",
            "History, culture & wildlife"
        ];
    }

    /**
     * Returns programming languages known
     */
    public getProgrammingLanguages(): { proficient: string[]; familiar: string[] } {
        return {
            proficient: ["Python", "JavaScript", "C", "HTML", "CSS"],
            familiar: ["Java", "Power FX", "C++", "Shell Scripting"]
        };
    }
    public getSpeakingLanguages():  SpeakingLanguage[]  {
        return [
            {
                language:"English",
                proficiency:["Read","Write","Speak"]
            },
            {
                language:"Hindi",
                proficiency:["Read","Write","Speak"]
            },
            {
                language:"Bengali",
                proficiency:["Read","Write","Speak"]
            }
        ];
    }

    /**
     * Returns personal and academic projects
     */
    public getProjects(): Project[] {
        return [
          {
            name: "Artiqumo",
            description: "Interpreter-based graphic programming language with features like input/output, loops, conditions, and drawing capabilities.",
            technologies: ["Python", "Regex", "Lexer", "Turtle", "PyInstaller"],
            hyperlink: "https://github.com/Mainak-Deb/Artiquno"
          },
          {
            name: "Digital Logic Simulator",
            description: "A web-based digital circuit builder and simulator with 18+ logic components using BFS for logic evaluation.",
            technologies: ["JavaScript", "p5.js", "BFS"],
            hyperlink: "https://github.com/Mainak-Deb/dragable-objects"
          },
          {
            name: "Face Expression Change using ML",
            description: "An algorithm to transfer facial expressions from one face to another using mediapipe and image processing.",
            technologies: ["Python", "Mediapipe", "Skimage", "OpenCV", "Numpy"],
            hyperlink: "https://github.com/Mainak-Deb/Face_expression_change/blob/master/expression_exchange.ipynb"
          },
          {
            name: "Graph, Tree & Sorting Algorithm Visualizer",
            description: "Visualization tool for BFS, DFS, Dijkstra, A*, and sorting algorithms through interactive animations.",
            technologies: ["JavaScript", "HTML", "CSS", "p5.js"],
            hyperlink: ""
          },
         
        ];
      }
      
    /**
     * Returns education background
     */
    public getEducation(): Education[] {
        return [
            {
                institution: "Government College Of Engineering & Textile Technology, Serampore",
                degree: "Bachelor of Technology (Honours) in Computer Science and Engineering",
                fieldOfStudy: "Computer Science and Engineering",
                cgpa: 9.50,
                percentage: null,
                startYear: 2019,
                endYear: 2023,
                location: "West Bengal, India",
                university: "Maulana Kalam Azad University of Technology",
                board:null
            },
            {
                institution: "Uttarpara Government High School",
                degree: "Higher Secondary",
                fieldOfStudy: "Math Physics Chemistry Statistics",
                cgpa: null,
                percentage: 81.4,
                startYear: 2017,
                endYear: 2019,
                location: "West Bengal, India",
                university: null,
                board: "West Bengal Council of Higher Secondary Education"
            },
            {
                institution: "Kotrung Bhupendra Smrity Vidyalaya",
                degree: "Secondary",
                fieldOfStudy: "All",
                cgpa: null,
                percentage: 90.14,
                startYear: 2016,
                endYear: 2027,
                location: "West Bengal, India",
                university: null,
                board: "West Bengal Board of Secondary Education"
            }
        ];
    }

    /**
     * Returns social media and links
     */
    public getSocialMedia(): SocialMedia {
        return {
            linkedin: "https://linkedin.com/in/mainak-deb-36875a1b7",
            github: "https://github.com/Mainak-Deb",
            leetcode: "https://leetcode.com/u/Mainak-Deb/",
            twitter: "https://twitter.com/Mainak_D_Stark",
            instagram: "https://instagram.com/de_verse.co"
        };
    }

    public notAboutMainak(): string{
        return "Sorry! I am developed only to give you information about Mainak, Your query is not about him"
    }

    /**
     * Returns basic contact information
     */
    public getContactInfo(): { email: string; phone: string; nationality: string; profession: string; dateOfBirth: string } {
        return {
            email: this.email,
            phone: this.phone,
            nationality: this.nationality,
            profession: this.profession,
            dateOfBirth: "2001-05-20"
        };
    }

    /**
     * Returns full structured profile as JSON
     */
    public getProfile(): Record<string, any> {
        return {
            name: this.fullName,
            age: this.getAge(),
            contact: this.getContactInfo(),
            location: this.getLocation(),
            companies: this.getCompanies(),
            education: this.getEducation(),
            speakinglanguages: this.getSpeakingLanguages(),
            programmingLanguages: this.getProgrammingLanguages(),
            hobbies: this.getHobbies(),
            projects: this.getProjects(),
            socialMedia: this.getSocialMedia()
        };
    }
}
