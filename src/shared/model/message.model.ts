import { Message as MessageRequestData } from "@/shared/generated/graphql-schema"

export class Message {

    public data: MessageRequestData;
    constructor(data: MessageRequestData){
        this.data = data;
    }

    get messageContent(){
        return this.data.text || ' ';
    }
    
    get messageDate(){
        return new Date(this.data.createdAt)
    }

}