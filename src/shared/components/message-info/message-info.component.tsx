import * as React from "react";

import _ from "lodash";

import { MessageInfoProps } from "@types";
import { Message, Box, Stack, AvatarMessageItem, Text } from "@components";

const MessageInfo: React.FC<MessageInfoProps> = ({
  message,
  messageStatuses,
}) => {
  const receivedStatus = messageStatuses?.filter((status) => status.isReceived);
  const readStatus = messageStatuses?.filter((status) => status.isRead);

  return (
    <>
      <Box
        backgroundImage={`url(./images/backgroundImage.png)`}
        h={"30%"}
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
      <Box padding={1}>
        <Stack direction="column" divider>
          <Text fontSize="lg" textAlign={"center"}>
            Received by
          </Text>
          {receivedStatus?.map((receivedBy) => (
            <AvatarMessageItem
              key={receivedBy.userId}
              title={receivedBy.user?.fullName}
              titleWidth='sm'
            />
          ))}
        </Stack>
      </Box>
      <Box padding={1}>
        <Stack direction="column" divider>
          <Text fontSize="lg" textAlign={"center"}>
            Read by
          </Text>
          {readStatus?.map((readBy) => (
            <AvatarMessageItem
              key={readBy.userId}
              title={readBy.user?.fullName}
              titleWidth="sm"
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default React.memo(MessageInfo, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
