import { UserMessageStatus as UserMessageStatusRequestData } from "@/shared/generated/graphql-schema"

export class UserMessageStatus {

    public data: UserMessageStatusRequestData;
    constructor(data: UserMessageStatusRequestData){
        this.data = data;
    }

    get userId(){
        return this.data.userId
    }

    get isReceived(){
        return this.data.isReceived;
    }

    get isRead(){
        return this.data.isRead;
    }

    get user(){
        return this.data.user;
    }


}