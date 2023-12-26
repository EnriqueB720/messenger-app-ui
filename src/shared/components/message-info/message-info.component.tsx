import * as React from "react";

import _ from "lodash";

import { MessageInfoProps } from "@types";
import { Message, Box } from "@components";

const MessageInfo: React.FC<MessageInfoProps> = ({ message, messageStatuses }) => {
  return (
    <>
      <Box 
        backgroundImage={`url(./images/backgroundImage.png)`}
        h={"30%"}
        display={"flex"}
        alignItems={"center"}
        overflowY={"auto"}
        maxW="inherit">
        <Message message={message} isUserMessage={true} messageInfoDisplayWidth="45vh"/>
      </Box>
    </>
  );
};

export default React.memo(MessageInfo, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
