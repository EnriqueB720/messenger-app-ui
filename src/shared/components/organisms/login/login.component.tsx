import * as React from 'react';

import _ from 'lodash';
import { Box, Form, Text } from '@components';
import { loginSchema } from '@schemas';
import { useTranslation } from '@/shared/hooks';
import { AuthContext } from '@contexts';
import { AuthCredentials } from '@model';

export interface LoginFormValues {
    email: string;
    password: string;
}

const Login: React.FC = () => {

    const { login } = React.useContext(AuthContext);

    const { t } = useTranslation();
    
    const onSubmit = async (values: LoginFormValues) => {
        try {
            await login(new AuthCredentials({email: values.email, password: values.password}));
        } catch (error) {
            throw error;
        }
    }

    return (
        <Box backgroundColor='#202c33' w='600px' border="1px solid #ffffff47" padding={5} h='320px' marginTop={16}>
            <Text fontSize={'24px'} marginBottom={'10px'} color='white'>{t('login.title')}</Text>
            <Form<LoginFormValues>
                validationSchema={loginSchema}
                formValues={{ email: '', password: '' }}
                onSubmit={onSubmit}
                fields={[
                    { fieldType: 'field', label: t('login.form.email'), isRequired: true, name: 'email', inputPlaceholder: t('login.form.email') },
                    { fieldType: 'field', label: t('login.form.password'), isRequired: true, name: 'password', inputPlaceholder: t('login.form.password'), isPassword: true }
                ]}
            />
        </Box>
    )
}


export default React.memo(Login, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});