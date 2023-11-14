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
    justifyContent
}) => {
    return (
        <CKFlex
        alignItems={alignItems}
        bg={bg}
        color={color}
        w={w}
        h={h}
        justifyContent={justifyContent}
        >
            {children}
        </CKFlex>
    )
}


export default React.memo(Flex, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});