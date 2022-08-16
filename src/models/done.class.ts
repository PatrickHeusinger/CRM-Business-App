export class Done {
    
    
   
   

    doneTitle: string;
    doneDescription: string;

    constructor(obj?: any) {
       
        this.doneTitle = obj ? obj. doneTitle : '';
        this.doneDescription = obj ? obj. doneDescription : '';

    }

    public toJSON(){
        return {
            doneTitle: this.doneTitle,
            doneDescription: this.doneDescription
        }
       }

}