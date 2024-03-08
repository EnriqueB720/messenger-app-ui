import { Contact as ContactRequestData } from "@/shared/generated/graphql-schema"

export class Contact {

  public data: ContactRequestData;
  constructor(data: ContactRequestData) {
    this.data = data;
  }

  get name(){
    return this.data?.fullName;
  }

  get contactId(){
    return this.data?.contactUserId;
  }

  get phoneNumber(){
    return this.data?.contactUser?.phoneNumber;
  }
}