import * as React from "react";

import _ from "lodash";

import { MessageInfoProps } from "@types";
import { Message, Box, Stack, AvatarMessageItem, Text, IconButton } from "@components";
import { useRouter } from "next/router";

const MessageInfo: React.FC<MessageInfoProps> = ({
  message,
  messageStatuses,
  headerHeight
}) => {
  const receivedStatus = messageStatuses?.filter((status) => status.isReceived);
  const readStatus = messageStatuses?.filter((status) => status.isRead);

  const router = useRouter();


  const closeMessageInfo = () => {
        const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
        router.push(baseRoute);
  }

  return (
    <>
      <Box bg='lightgray' textAlign={'right'} borderLeftColor="black"
      borderLeftWidth="2px" h={`${headerHeight}px`} paddingTop={1}>
      <IconButton
              style={{
                marginTop: '4px'
              }}
              color={'black'}
              icon={'close'}
              colorScheme={'inherit'}
              size={'lg'}
              fontSize={'xl'}
              onClick={closeMessageInfo}
            />
      </Box>
      <Box
        backgroundImage={`url(./images/backgroundImage.png)`}
        h={"20%"}
        display={"flex"}
        alignItems={"center"}
        overflowY={"auto"}
        maxW="inherit"
        paddingLeft={1}
      >
        <Message
          message={message}
          isUserMessage={true}
          messageInfoDisplayWidth="45vh"
        />
      </Box>
      <Box
        h={'70%'}
      >
        <Box padding={1} overflowY={'auto'} h={'50%'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"}>
              Received by
            </Text>
            <Box >
              {receivedStatus?.map((receivedBy) => (
                <AvatarMessageItem
                  key={receivedBy.userId}
                  title={receivedBy.user?.fullName}
                  titleWidth='sm'
                />
              ))}
            </Box>
          </Stack>
        </Box>
        <Box padding={1} overflowY={'auto'} h={'50%'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"}>
              Read by
            </Text>
            <Box>
              {readStatus?.map((readBy) => (
                <AvatarMessageItem
                  key={readBy.userId}
                  title={readBy.user?.fullName}
                  titleWidth="sm"
                />
              ))}
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(MessageInfo, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
