import { ChatParticipant as ChatParticipantRequestData } from "@/shared/generated/graphql-schema"

export class ChatParticipant {

    public data: ChatParticipantRequestData;
    constructor(data: ChatParticipantRequestData){
        this.data = data;
    }

    get chatParticipantName(){
        return this.data?.user?.fullName;
    }
}