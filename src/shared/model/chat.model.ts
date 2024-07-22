import { Chat as ChatRequestData } from "@/shared/generated/graphql-schema"
import { ChatParticipant, Message, User } from "@model";

export class Chat {

    public data: ChatRequestData;
    constructor(data: ChatRequestData){
        this.data = data;
    }

    get lastMessage(){
        return new Message(this.data.messages![this.data.messages?.length! - 1 ]);
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
        return this.data?.name;
    }
    
    set title(newTitle: any | undefined) {
        if (this.data) {
          this.data = { ...this.data, name: newTitle || "" };
        }
    }

    get participants(){
        return this.data?.participants;
    }

    get createdAt(){
        return new Date(this.data?.createdAt);
    }

    get messages(){
        return this.data?.messages?.map(m => new Message(m))!;
    }

    getSubtitle(loggedUser: User, referToLoggedUserAs: string){
        return this.data?.isGroup ? this.data.participants?.map(p =>  {
            if(loggedUser.isThisUserMyContact(p.user?.id!)){
               return loggedUser.getContactName(p.user?.id!);
            }else{
               return p.user?.phoneNumber == loggedUser.phoneNumber ? referToLoggedUserAs : p.user?.phoneNumber
            }
        }).join(', ') : " "
    }

    getContactParticipants(loggedUser: User){
        const loggedUserIndex = this.participants?.findIndex(p => p.userId != loggedUser.userId);
        return loggedUserIndex && !this.isGroup ? new ChatParticipant(this.data?.participants![loggedUserIndex!]).chatParticipantUserId : null;
    }

    getAmountOfParticipants(){
        return this.data?.participants?.length;
    }

}