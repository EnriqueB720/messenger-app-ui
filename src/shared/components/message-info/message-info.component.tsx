import * as React from "react";

import _ from "lodash";

import { MessageInfoProps } from "@types";
import { Message, Box, Stack, AvatarMessageItem, Text, IconButton } from "@components";
import { useRouter } from "next/router";

const MessageInfo: React.FC<MessageInfoProps> = ({
  message,
  messageStatuses,
  headerHeight,
  userId
}) => {
  const receivedStatus = messageStatuses?.filter((status) => status.isReceived);
  const readStatus = messageStatuses?.filter((status) => status.isRead);

  const router = useRouter();
  const titleColor = "#8696a0";''

  const closeMessageInfo = () => {
    const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
    router.push(baseRoute);
  }

  return (
    <>
      <Box bg={'#202c33'} textAlign={'right'} borderLeftColor="#2f3b43"
        borderLeftWidth="2px" h={`${headerHeight}px`} paddingTop={1}>
        <IconButton
          style={{
            marginTop: '4px'
          }}
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
          userId={userId}
          maxWidth="45vh"
        />
      </Box>
      <Box
        h={'70%'}
      >
        <Box padding={1} overflowY={'auto'} h={'50%'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"} color={titleColor}>
              Received by
            </Text>
            <Box >
              {receivedStatus?.map((receivedBy) => (
                <AvatarMessageItem
                  key={receivedBy.userId}
                  bg={'#111b21'}
                  title={receivedBy.user?.fullName}
                  titleWidth='sm'
                />
              ))}
            </Box>
          </Stack>
        </Box>
        <Box padding={1} overflowY={'auto'} h={'50%'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"} color={titleColor}>
              Read by
            </Text>
            <Box>
              {readStatus?.map((readBy) => (
                <AvatarMessageItem
                  key={readBy.userId}
                  bg={'#111b21'}
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
