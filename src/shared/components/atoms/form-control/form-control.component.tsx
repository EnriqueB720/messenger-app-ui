import * as React from 'react';

import _ from 'lodash';

import { FormControl as CKFormControl } from '@chakra-ui/react';

import { FormControlProps } from '@types';

const FormControl: React.FC<FormControlProps> = ({
    children,
    as,
    isInvalid,
    isRequired,
    ...props
}) => {

  return (
    <CKFormControl
      {...props}
      as={as}
      isInvalid={isInvalid}
      isRequired={isRequired}
    >
      {children}
    </CKFormControl>
  );
}

export default React.memo(FormControl, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});