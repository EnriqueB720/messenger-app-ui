import * as React from 'react';

import _ from 'lodash';

import { useTranslation } from '../../../hooks';

import { FieldProps } from '@types';
import { FormControl, FormErrorMessage, FormLabel, InputGroup, InputRightElement, Radio, RadioGroup, Select } from '@chakra-ui/react';
import { Input, Stack, IconButton, Flex } from '@components';
import { useState } from 'react';

const Field: React.FC<FieldProps> = ({
  label,
  name,
  fieldType,
  inputPlaceholder,
  radioButtonOptions,
  selectFieldOptions,
  inputValue,
  isRequired,
  isErrors,
  errorMessage,
  isSubmitting,
  isPassword,
  onChange,
  onBlur
}) => {
  const { t } = useTranslation();

  const [visibility, setVisibility] = useState(false);

  const switchVisibility = () => {
    setVisibility(!visibility);
  }

  function renderFieldSwitch() {
    switch (fieldType) {
      case 'field':
        return (
          <FormControl
            mb={2}
            mr={2}
            isInvalid={isErrors}
            isRequired={isRequired}
            isDisabled={isSubmitting}
            onBlur={onBlur}>
            <FormLabel>{label}</FormLabel>
            {!isPassword ? <Input
              onChange={onChange}
              type="text"
              name={name}
              placeholder={inputPlaceholder}
              value={inputValue}
            />
              :
              <Flex>
                <InputGroup>
                  <Input
                    onChange={onChange}
                    type={visibility ? "text" : "password"}
                    name={name}
                    placeholder={inputPlaceholder}
                    value={inputValue} />
                  <InputRightElement>
                    <IconButton
                      icon={visibility ? 'visibilityOn' : 'visibilityOff'}
                      size={'md'}
                      color={'black'}
                      fontSize={'xl'}
                      onClick={switchVisibility}
                      variant={'link'}
                    />
                  </InputRightElement>
                </InputGroup>
              </Flex>
            }
            {isErrors && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
          </FormControl>
        );
      case 'radio':
        return (
          <FormControl mr={2} mb={2} isRequired={isRequired} isDisabled={isSubmitting} onBlur={onBlur}>
            <FormLabel>{label}</FormLabel>
            <RadioGroup defaultValue={radioButtonOptions![0]}>
              <Stack spacing={10}>
                {radioButtonOptions?.map((value, index) => (
                  <Radio onBlur={onBlur} value={value} key={index} name={name}>
                    {value}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
          </FormControl>
        );
      case 'select':
        return (
          <FormControl isRequired={isRequired} mr={2} mb={2} isDisabled={isSubmitting} onBlur={onBlur}>
            <FormLabel>{label}</FormLabel>
            <Select
              placeholder={t('form.selectPlaceHolder')}
              name={name}
              value={inputValue}
              onChange={onChange}
              onBlur={onBlur}
            >
              {selectFieldOptions?.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </Select>
          </FormControl>
        )
    }
  }

  return (
    <>
      {renderFieldSwitch()}
    </>
  )

}

export default React.memo(Field, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});