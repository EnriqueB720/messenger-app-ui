import * as React from 'react';
import image1 from "public/images/backgroundImage.png";

import _ from 'lodash';
import { Box, Flex, Text } from '@components';


const ChatArea: React.FC = () => {

    return (
        <Box
            backgroundImage={`url(${image1})`}
            backgroundPosition={'center'}
            backgroundSize={'cover'}
            backgroundRepeat={'repeat'}
            bg={'gray'}
        >
            <Flex justifyContent="flex-end">
                <Box bg='blue.300' w='20%' borderRadius='5px'>
                    <Text fontSize='20px' color='black' textAlign={'right'}>
                        Example Text
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default React.memo(ChatArea, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});