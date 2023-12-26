import { UserMessageStatus as UserMessageStatusRequestData } from "@/shared/generated/graphql-schema"

export class UserMessageStatus {

    public data: UserMessageStatusRequestData;
    constructor(data: UserMessageStatusRequestData){
        this.data = data;
    }

    get IsReceivedStatus(){
        return this.data.isReceived ? true : false;
    }

    get isReadStatus(){
        return this.data.isRead ? true : false;
    }


}