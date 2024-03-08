import * as React from "react";

import _ from "lodash";

import { MessageInfoProps } from "@types";
import { Message, Box, Stack, AvatarMessageItem, Text, IconButton, RightSideBarHeader } from "@components";
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
  const titleColor = "#8696a0";

  const closeMessageInfo = () => {
    const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
    router.push(baseRoute);
  }

  return (
    <>
     <RightSideBarHeader text={'Message Information.'} height={headerHeight} onCloseFunction={closeMessageInfo}/>
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
        <Box padding={1} h={'50%'} overflowY={'auto'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"} color={titleColor}>
              Received by
            </Text>
            <Box>
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
        <Box padding={1} h={'50%'} overflowY={'auto'}>
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
