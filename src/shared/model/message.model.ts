import { Message as MessageRequestData } from "@/shared/generated/graphql-schema"

export class Message {

    public data: MessageRequestData;
    constructor(data: MessageRequestData){
        this.data = data;
    }

    get messageContent(){
        return this.data?.text || ' ';
    }

    get id(){
        return this.data?.id;
    }
    
    get messageDate(){
        return new Date(this.data?.createdAt)
    }

    get senderName(){
        return this.data.sender?.fullName!;
    }

    get senderId(){
        return this.data.senderId;
    }

    get senderPhoneNumber(){
        return this.data.sender?.phoneNumber;
    }

    isUserMessage(senderId: number): boolean{
        return true ? this.data.senderId! == senderId : false;
    }

    get isMessageReceived(){
        return this.data.userMessageStatuses?.every(m => m.isReceived)
    }

    get isMessageRead(){
        return this.data.userMessageStatuses?.every(m => m.isRead)
    }
}