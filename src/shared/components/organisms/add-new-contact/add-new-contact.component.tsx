import * as React from "react";
import { AddNewContactProp } from "@types";

import _ from 'lodash';
import { Box, Form, Text } from "@components";
import { useTranslation } from "@/shared/hooks";
import { addContactSchema } from "@schemas";
import { useState } from "react";
import { UserDocument, useCreateContactMutation, ChatsDocument, ChatsQuery } from "@generated";

export interface NewContactValues {
	firstName: string;
	lastName: string;
	phoneNumber: string;
}


const AddNewContact: React.FC<AddNewContactProp> = ({
  user,
  contact
}) => {

  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
	const [requestErrorMessage, setRequestErrorMessage] = useState<string>();
	const [successMessage, setSuccessMessage] = useState<string>();
	const [createContact] = useCreateContactMutation();


  const onSubmit = async ({firstName, lastName, phoneNumber}: NewContactValues) => {
		try {
			setIsLoading(true);
			let customerNumber: string = phoneNumber.substring(phoneNumber.length, phoneNumber.length-8);

      await createContact({
				variables:{
					data:{
						firstName,
						lastName,
						phoneNumber: Number.parseInt(customerNumber),
						user:{
							connect: {
								id: user.userId
							}
						}
					}
				},
				onError(error, clientOptions) {
					if(error.message){
						setRequestErrorMessage(t('addContactForm.errorMessage')+'\n'+error.message);
					}
					setIsLoading(false);
				},
				onCompleted(data, clientOptions){
					setSuccessMessage(t('addContactForm.confirmationMessage'));
					setIsLoading(false);
				},
				update: (cache, { data }) => {
					cache.writeQuery({
						query: UserDocument,
						variables: {
							where: {
								id: user.userId
							}
						},
						data: {
							user:{
								...user.data,
								contacts: [
									...user.contacts as any,
									data?.createContact
								]
							}
						}
					});
				}
			});

      //TBD add the new chat to the cache
		} catch (error) {
			throw error;
		}
	}

  return (
    <Box h="100%" padding={5}>
      <Box h="inherit" bg={"#202c33"} padding={20}>
        <Text fontSize={'24px'} marginBottom={'10px'} color={"white"}>{t('addContactForm.formTitle')}</Text>
				<Box width={"500px"}>
				<Form<NewContactValues>
						validationSchema={addContactSchema}
						formValues={{
              firstName: '',
							lastName: '',
							phoneNumber: ''
						}}
            submitButtonText ={t('addContactForm.submitButton')}
						onSubmit={onSubmit}
						isLoading={isLoading}
						fields={[
							{ fieldType: 'field', label: t('addContactForm.firstName'), isRequired: true, name: 'firstName', inputPlaceholder: t('addContactForm.firstName'), fieldColor: "white" },
							{ fieldType: 'field', label: t('addContactForm.lastName'), isRequired: true, name: 'lastName', inputPlaceholder: t('addContactForm.lastName'), fieldColor: "white"},
							{ fieldType: 'phone', label: t('addContactForm.phoneNumber'), isRequired: true, name: 'phoneNumber', inputPlaceholder: t('addContactForm.phoneNumber'), fieldColor: "white"},
						]}
						groupings={[1,1,1]}
					/>
					{
						requestErrorMessage ? 
						<Text color="red.400">{requestErrorMessage}</Text>
						:
						<Text color="green.400">{successMessage}</Text>
					}
				</Box>
				
      </Box>
    </Box>
  );
}


export default React.memo(AddNewContact, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
