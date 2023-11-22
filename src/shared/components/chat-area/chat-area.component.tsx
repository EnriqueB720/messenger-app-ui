import * as React from 'react';
import image1 from "../../../images/backgroundImage.png";

import _ from 'lodash';
import { Box, Flex, Text } from '@components';


const ChatArea: React.FC = () => {

    let value: boolean = true;

    return (
        <Box
            backgroundImage={`url(./images/backgroundImage.png)`}
            backgroundPosition={'center'}
            backgroundSize={'cover'}
            backgroundRepeat={'repeat'}
            backgroundColor={'gray'}
            h={'100%'}
        >
            <Flex justifyContent="flex-end" h={'auto'}>
                <Box bg='blue.300' w='20%' borderRadius='5px' margin={3} h={'auto'}>
                    <Text fontSize='20px' color='black' textAlign={'right'}>
                        Example Text
                    </Text>
                </Box>
            </Flex>
            <Flex justifyContent="flex-end" h={'auto'}>
                <Box bg='blue.300' w='20%' borderRadius='5px' margin={3} h={'auto'}>
                    <Text fontSize='20px' color='black' textAlign={'right'}>
                        Example Text
                    </Text>
                </Box>
            </Flex>
            <Flex justifyContent="flex-end" h={'auto'}>
                <Box bg='blue.300' w='20%' borderRadius='5px' margin={3} h={'auto'}>
                    <Text fontSize='20px' color='black' textAlign={'right'}>
                        Example Text
                    </Text>
                </Box>
            </Flex>
            {
                value  ?
                    <Flex justifyContent="flex-start" h={'auto'}>
                        <Box bg='green.300' w='20%' borderRadius='5px' margin={3} h={'auto'}>
                            <Text fontSize='20px' color='black' textAlign={'right'}>
                                Example Text
                            </Text>
                        </Box>
                    </Flex>
                    :
                    <Flex justifyContent="flex-end" h={'auto'}>
                        <Box bg='blue.300' w='20%' borderRadius='5px' margin={3} h={'auto'}>
                            <Text fontSize='20px' color='black' textAlign={'right'}>
                                Example Text
                            </Text>
                        </Box>
                    </Flex>
            }
        </Box>
    );
}

export default React.memo(ChatArea, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
});