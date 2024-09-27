import * as React from 'react';

import _ from 'lodash';

import { FormProps } from '@types';
import { useTranslation } from '@/shared/hooks';
import { Field, Button } from '@components';
import { Formik, FormikValues } from 'formik';


const Form = <T extends FormikValues,>({
  fields,
  validationSchema,
  formValues,
  onSubmit }: React.PropsWithChildren<FormProps<T>>) => {

  const { t } = useTranslation();


  const handleSubmit = (values: T) => {
    try {
      onSubmit(values);
    } catch (error) {
      alert(error);
    }
  }

  return (

    <Formik initialTouched={formValues} initialValues={formValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formik) => (
        <>
          {fields?.map(field => {

            const { name } = field;
            const key = name.toString();
            const value = formik.values[name];
            const isTouched = formik.touched[name];
            const error = isTouched && formik.errors[name] ? formik.errors[name]?.toString() : undefined;

            return (
              <Field
                {...field}
                key={key}
                isErrors={!!error}
                errorMessage={error}
                inputValue={value}
                onChange={formik.handleChange(name)}
                onBlur={formik.handleBlur(name)}
                isSubmitting={formik.isSubmitting}
              />
            );
          })!}

          <Button
            marginTop={'10px'}
            isLoading={formik.isSubmitting}
            isDisabled={formik.isSubmitting}
            key='submit'
            onClick={formik.handleSubmit}>
            {t('login.form.submit')}
          </Button>
        </>)}

    </Formik>
  )
}

export default React.memo(Form, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
}) as <T>(props: React.PropsWithChildren<FormProps<T>>) => JSX.Element;