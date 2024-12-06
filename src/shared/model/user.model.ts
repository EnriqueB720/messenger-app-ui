import { User as UserRequestData, Contact as ContactRequestedData } from "@/shared/generated/graphql-schema"
import { Contact } from "@model";

export class User {

    public data: UserRequestData;
    public userContacts: ContactRequestedData[];
    constructor(data: UserRequestData){
        this.data = data;
        this.userContacts = data.contacts!;
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
        return this.userContacts?.map(contact => new Contact(contact))
    }

    set contacts(contacts: Contact[] | undefined){
       this.userContacts = contacts!.map(contact => contact.data);
    }

    isThisUserMyContact(contactId: number){
        return (contactId === this.contacts?.find(c => c.contactId === contactId)?.contactId)
    }

    getContactName(contactId: number){
        return this.contacts?.find(c => c.contactId === contactId)?.name;
    }
}