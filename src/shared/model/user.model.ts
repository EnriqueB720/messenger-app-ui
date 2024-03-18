import { User as UserRequestData } from "@/shared/generated/graphql-schema"
import { Contact } from "@model";

export class User {

    public data: UserRequestData;
    constructor(data: UserRequestData){
        this.data = data;
    }

    get userId(){
        return this.data?.id!;
    }

    get userName(){
        return this.data?.fullName!;
    }

    get phoneNumber(){
        return this.data?.phoneNumber!;
    }

    get contacts(){
        return this.data?.contacts?.map(contact => new Contact(contact))
    }

    isThisUserMyContact(contactId: number){
        return (contactId === this.contacts?.find(c => c.contactId === contactId)?.contactId)
    }

    getContactName(contactId: number){
        return this.contacts?.find(c => c.contactId === contactId)?.name;
    }
}