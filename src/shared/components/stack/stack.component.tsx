import * as React from 'react';

import _ from 'lodash';

import { Stack as CKStack, StackDivider } from '@chakra-ui/react';

import { StackProps } from '@types';

const Icon: React.FC<StackProps> = ({
    align,
    direction,
    divider,
    spacing
}) => {

    if (divider) {
        return (
            <CKStack
                align={align}
                direction={direction}
                spacing={spacing}
                divider={<StackDivider borderColor='gray.200' />}
            ></CKStack>
        )
    } else {
        return (
            <CKStack
                align={align}
                direction={direction}
                spacing={spacing}
            ></CKStack>
        );
    }
}


export default React.memo(Icon, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});