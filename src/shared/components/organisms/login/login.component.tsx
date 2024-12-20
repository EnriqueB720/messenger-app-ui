import * as React from 'react';

import _ from 'lodash';
import { Box, Flex, Form, Text, Image, Button } from '@components';
import { loginSchema } from '@schemas';
import { useTranslation } from '@/shared/hooks';
import { AuthContext } from '@contexts';
import { AuthCredentials } from '@model';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export interface LoginFormValues {
	email: string;
	password: string;
}

const Login: React.FC = () => {

	const { login, isLoading, isAuthenticated } = useContext(AuthContext);
	const [windowInnerHeight, setWindowInnerHeight] = useState<number>();
	const [errorMessage, setErrorMessage] = useState<string>();
	const router = useRouter();

	const { t } = useTranslation();

	const onSubmit = async (values: LoginFormValues) => {
		try {
			let result: boolean;
			setErrorMessage(undefined);

			result = await login(new AuthCredentials({ email: values.email, password: values.password }));

			if (result) {
				if (!isLoading) router.push('/');
			} else {
				setErrorMessage(t('global.error.notAuthorizedException.message'))
			}


		} catch (error) {
			throw error;
		}
	}

	useEffect(() => {
		if (isAuthenticated) router.push('/');
		setWindowInnerHeight(window.innerHeight);
	}, []);

	return (
		<>
			<Box bg='#00a884' h='222px' position={'absolute'} top={'0'} zIndex={'-1'} left={'0'} width={'100%'}>
			</Box>
			<Box bg='#e1e1de' height={'100%'} position={'absolute'} zIndex={'-2'} width={'100%'}>
			</Box>
			<Flex justifyContent={'center'} zIndex={'10'} height={windowInnerHeight}>
				<Box rounded={'sm'} padding={5} h='340px' marginTop={16} bg="white" boxShadow='dark-lg' display={'flex'} justifyContent={'space-between'}>
					<Box w='386px'>
						<Text fontSize={'24px'} marginBottom={'10px'}>{t('login.title')}</Text>
						<Form<LoginFormValues>
							validationSchema={loginSchema}
							formValues={{ email: '', password: '' }}
							onSubmit={onSubmit}
							isLoading={isLoading}
							groupings={[1, 1]}
							fields={[
								{ fieldType: 'field', label: t('login.form.email'), isRequired: true, name: 'email', inputPlaceholder: t('login.form.email') },
								{ fieldType: 'field', label: t('login.form.password'), isRequired: true, name: 'password', inputPlaceholder: t('login.form.password'), isPassword: true }
							]}
						/>
						<Button mt={2.5} ml={2} bg={'#e1e1de'} onClick={() => router.push('/signup')}>{t('login.noAccount')}</Button>
						{
							errorMessage ? (
								<>
									<Text color="red.400">{errorMessage}</Text>
								</>
							) :
								null
						}
					</Box>
					<Box textAlign={'center'}>
						<Image h='264px' w='264px' title={t('AppCreatorProfile.link')} src={'./images/qr-code.png'} />
						<Text>{t('AppCreatorProfile.referAs')}!</Text>
					</Box>

				</Box>
			</Flex>
		</>

	)
}


export default React.memo(Login, (prevProps, nextProps) => {
	return _.isEqual(prevProps, nextProps);
});