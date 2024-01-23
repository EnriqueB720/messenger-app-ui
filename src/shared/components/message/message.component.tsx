import * as React from "react";

import _ from "lodash";
import { MessageProps } from "@types";
import {
  Flex,
  Box,
  Text,
  Stack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@components";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const Message: React.FC<MessageProps> = ({
  username,
  isUserMessage,
  message,
  messageInfoDisplayWidth,
}) => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlMessageId = Number.parseInt(searchParams.get("messageId")!);

  function formatTimestamp(timestamp: Date) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "p. m." : "a. m.";

    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    return formattedTime;
  }

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    return `#${randomColor}`;
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = (messageId: any) => {
    if (searchParams.has("messageId")) {
      if (messageId !== urlMessageId) {
        const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
        router.push(`${baseRoute}&messageId=${messageId}`);
      }
    } else {
      router.push(`${router.asPath}&messageId=${messageId}`);
    }
  };

  return (
    <Flex
      direction="row"
      justifyContent={isUserMessage ? "flex-end" : "flex-start"}
      mb="5"
    >
      <Box
        marginTop={1}
        maxW={messageInfoDisplayWidth ? messageInfoDisplayWidth : "60%"}
        maxH={"auto"}
        padding={1}
        borderRadius="md"
        bg={isUserMessage ? "blue.400" : "gray.200"}
        color={isUserMessage ? "white" : "black"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {username ? (
          <Text
            fontSize="xs"
            color={isUserMessage ? undefined : generateColor()}
          >
            {username}
          </Text>
        ) : null}
        <Stack direction="row">
          <Box overflowY={"auto"}>
            <Text
              fontSize="md"
              whiteSpace={"pre-line"}
              overflowWrap={"break-word"}
              overflow={messageInfoDisplayWidth ? "hidden" : undefined}
              textOverflow={messageInfoDisplayWidth ? "ellipsis" : undefined}
            >
              {message?.messageContent}
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"end"} minW={"57px"}>
            <Text marginTop={"5px"} fontSize="xs">
              {formatTimestamp(message?.messageDate!)}
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={isHover && isUserMessage ? "center" : "end"}
            marginLeft={0}
            color={message?.isMessageRead && !isHover && isUserMessage ? "blue" : undefined}
          >
            {isHover && isUserMessage ? (
              <Box
                style={{
                  cursor: "pointer",
                }}
              >
                <Menu>
                  <MenuButton
                    as={"button"}
                    variant={"outline"}
                    title={"More options"}
                  >
                    <Icon name={"downArrow"} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      color={"black"}
                      onClick={() => handleClick(message?.id)}
                    >
                      Message Info.
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            ) : (
              isUserMessage ?
                <Icon
                  name={message?.isMessageReceived ? "doubleCheck" : "check"}
                />
                :
                undefined
            )}
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default React.memo(Message, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
