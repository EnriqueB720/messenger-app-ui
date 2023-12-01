import { Chat as ChatRequestData } from "@/shared/generated/graphql-schema"
import { ChatParticipant, Message } from "@model";

export class Chat {

    public data: ChatRequestData;
    constructor(data: ChatRequestData){
        this.data = data;
    }

    get lastMessage(){
        return new Message(this.data.messages![0]);
    }

    get isGroup(){
        return this.data?.isGroup;
    }

    get chatName(){
        return this.data.name;
    }

    get chatId(){
        return this.data.id
    }
    
    get chatTitle(){
        return this.data?.isGroup ? this.data.name : new ChatParticipant(this.data?.participants![1]).chatParticipantName;
    }

    get chatSubtitle(){
        return this.data?.isGroup ? this.data.participants?.map(p =>  p.user?.fullName).join(',') : " "
    }

}