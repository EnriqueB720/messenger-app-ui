import * as React from 'react';

import _ from 'lodash';

import { Flex as CKFlex } from '@chakra-ui/react';

import { FlexProps } from '@types';

const Flex: React.FC<FlexProps> = ({
    alignItems,
    bg,
    children,
    color,
    w,
    h,
    justifyContent,
    direction,
    mb
}) => {
    return (
        <CKFlex
        alignItems={alignItems}
        bg={bg}
        color={color}
        w={w}
        h={h}
        mb={mb}
        justifyContent={justifyContent}
        direction={direction}
        >
            {children}
        </CKFlex>
    )
}


export default React.memo(Flex, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});