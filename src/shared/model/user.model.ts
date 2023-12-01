import { User as UserRequestData } from "@/shared/generated/graphql-schema"

export class User {

    public data: UserRequestData;
    constructor(data: UserRequestData){
        this.data = data;
    }

    get userId(){
        return this.data?.id!;
    }
}