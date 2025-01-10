import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, Text, Form, Button, Image } from '@components';
import { useEffect, useState } from 'react';
import { AuthContext } from '@contexts';
import { useRouter } from 'next/router';
import { useTranslation } from '@/shared/hooks';
import { signUpSchema } from '@schemas';


export interface SignUpFormValues {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	repeatPassword: string;
	phoneNumber?: string;
	username: string;
}


const Signup: React.FC = () => {

	const { register, isLoading } = React.useContext(AuthContext);
	const [windowInnerHeight, setWindowInnerHeight] = useState<number>();
	const router = useRouter();

	const { t } = useTranslation();

	const onSubmit = async (values: SignUpFormValues) => {
		try {

			let customerNumber: string = values.phoneNumber!.substring(values.phoneNumber!.length, values.phoneNumber!.length-8);

			await register({
				data: {
					email: values.email,
					fullName: values.firstName + ' ' + values.lastName,
					passwordHash: values.password,
					phoneNumber: Number.parseInt(customerNumber),
					username: values.username
				}
			});

			if (!isLoading) router.push('/login');

		} catch (error) {
			throw error;
		}
	}

	useEffect(() => {
		setWindowInnerHeight(window.innerHeight);
	}, []);

	return (
		<>
			<Box bg='#00a884' h='222px' position={'absolute'} top={'0'} zIndex={'-1'} left={'0'} width={'100%'}>
			</Box>
			<Box bg='#e1e1de' height={'100%'} position={'absolute'} zIndex={'-2'} width={'100%'}>
			</Box>
			<Flex justifyContent={'center'} zIndex={'10'} height={windowInnerHeight}>
				<Box w='1000px' rounded={'sm'} h={'600px'} padding={5} marginTop={16} bg="white" boxShadow='dark-lg'>
					<Text fontSize={'24px'} marginBottom={'10px'}>{t('register.title')}</Text>
					<Form<SignUpFormValues>
						validationSchema={signUpSchema}
						formValues={{
							email: '',
							password: '',
							repeatPassword: '',
							username: '',
							phoneNumber: '',
							firstName: '',
							lastName: ''
						}}
						onSubmit={onSubmit}
						isLoading={isLoading}
						fields={[
							{ fieldType: 'field', label: t('register.form.firstName'), isRequired: true, name: 'firstName', inputPlaceholder: t('register.form.firstName') },
							{ fieldType: 'field', label: t('register.form.lastName'), isRequired: true, name: 'lastName', inputPlaceholder: t('register.form.lastName') },
							{ fieldType: 'field', label: t('register.form.email'), isRequired: true, name: 'email', inputPlaceholder: t('register.form.email') },
							{ fieldType: 'phone', label: t('register.form.phoneNumber'), isRequired: true, name: 'phoneNumber', inputPlaceholder: t('register.form.phoneNumber') },
							{ fieldType: 'field', label: t('register.form.username'), isRequired: true, name: 'username', inputPlaceholder: t('register.form.username') },
							{ fieldType: 'field', label: t('register.form.password'), isRequired: true, name: 'password', inputPlaceholder: t('register.form.password'), isPassword: true },
							{ fieldType: 'field', label: t('register.form.repeatPassword'), isRequired: true, name: 'repeatPassword', inputPlaceholder: t('register.form.repeatPassword'), isPassword: true }
						]}
						groupings={[2,1,2,2]}
					/>
					<Button mt={2.5} ml={2} bg={'#e1e1de'} onClick={() => router.push('/login')}>{t('register.alreadyAnAccount')}</Button>
				</Box>
			</Flex>
		</>
	)
}


export default React.memo(Signup, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});