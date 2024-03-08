import { Chat as ChatRequestData } from "@/shared/generated/graphql-schema"
import { ChatParticipant, Message, User } from "@model";

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

    get name(){
        return this.data?.name;
    }

    get id(){
        return this.data?.id
    }
    
    get title(){
        return this.data?.isGroup ? this.data.name : new ChatParticipant(this.data?.participants![1]).chatParticipantName;
    }

    get subtitle(){
        return this.data?.isGroup ? this.data.participants?.map(p =>  p.user?.fullName).join(',') : " "
    }

    get participants(){
        return this.data?.participants;
    }
    get createdAt(){
        return new Date(this.data?.createdAt);
    }

    getContactParticipants(loggedUser: User){
        const loggedUserIndex = this.participants?.findIndex(p => p.userId != loggedUser.userId);
        return loggedUserIndex && !this.isGroup ? new ChatParticipant(this.data?.participants![loggedUserIndex!]).chatParticipantUserId : null;
    }

    getAmountOfParticipants(){
        return this.data?.participants?.length;
    }

}