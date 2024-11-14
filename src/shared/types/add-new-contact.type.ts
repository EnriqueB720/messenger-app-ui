import { Contact, User } from "@model";

export interface AddNewContactProp{
  user: User;
  contact?: Contact;
}