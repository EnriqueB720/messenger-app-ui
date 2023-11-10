import * as React from 'react';

import _ from 'lodash';

import { Stack as CKStack, StackDivider } from '@chakra-ui/react';

import { StackProps } from '@types';

const Stack: React.FC<StackProps> = ({
    align,
    direction,
    divider,
    spacing,
    children,
    display
}) => {
        return (
            <CKStack
                align={align}
                direction={direction}
                spacing={spacing}
                display={display}
                divider={divider ? <StackDivider borderColor='gray.200' /> : undefined}
            >
                {children}
            </CKStack>
        )
}


export default React.memo(Stack, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});