import * as React from "react";

import _ from "lodash";
import { MessageProps } from "@types";
import {
  Flex,
  Box,
  Text,
  Stack,
  Icon,
  DropdownIconButton,
  Avatar,
} from "@components";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "@/shared/hooks";

const Message: React.FC<MessageProps> = ({
  username,
  userId,
  message,
  maxWidth,
}) => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlMessageId = Number.parseInt(searchParams.get("messageId")!);

  const backgroundMessageColor = '#005c4b';
  const iconMessageColor = '#7fada5'

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

  const {t} = useTranslation();

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
    } else if (searchParams.has('displayChatInfo')) {
      const baseRoute = router.asPath.replace(/&?displayChatInfo=true+/, '');
      router.push(`${baseRoute}&messageId=${messageId}`);
    } else {
      router.push(`${router.asPath}&messageId=${messageId}`);
    }
  };

  return (
    <Flex
      direction="row"
      justifyContent={message.isUserMessage(userId) ? "flex-end" : "flex-start"}
      mr={message.isUserMessage(userId) ? '10' : undefined}
      ml={!message.isUserMessage(userId) ? '3' : undefined}
      mb="5"
    >
      {
        !message.isUserMessage(userId) && username ?
          <Box margin={2}>
            <Avatar name={username} size={"sm"} />
          </Box>
          :
          undefined
      }
      <Box
        marginTop={1}
        maxW={maxWidth ? maxWidth : "60%"}
        maxH={"auto"}
        padding={1}
        borderRadius="md"
        bg={message.isUserMessage(userId) ? backgroundMessageColor : "#2f3b43"}
        color={"white"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        opacity={1}
        paddingLeft={2}
      >
        {username ? (
          <Text
            fontSize="xs"
            color={message.isUserMessage(userId) ? undefined : generateColor()}
            as='b'
          >
            {username}
          </Text>
        ) : null}
        <Stack direction="row">
          <Box overflowY={"auto"} textAlign="right">
            <Text
              fontSize="md"
              whiteSpace={"pre-line"}
              overflowWrap={"break-word"}
              overflow={maxWidth ? "hidden" : undefined}
              textOverflow={maxWidth ? "ellipsis" : undefined}
              textAlign="left"
            >
              {message?.messageContent}
            </Text>
          </Box>
          <Box display={"flex"} alignItems={"end"} minW={"60px"} textAlign="right" marginLeft={1.5}>
            <Text marginTop={"5px"} fontSize="xs" color="#9dab99">
              {formatTimestamp(message?.messageDate!)}
            </Text>
            {message.isUserMessage(userId) ?
              <Box color={message?.isMessageRead && message.isUserMessage(userId) ? '#57bef8' : iconMessageColor} marginLeft={1}>
                <Icon
                  name={message?.isMessageReceived ? "doubleCheck" : "check"}
                />
              </Box>
              :
              undefined}
          </Box>
        </Stack>
      </Box>
      {isHover && message.isUserMessage(userId) ? (
        <Box float={'right'} color={iconMessageColor} marginLeft={-4} marginTop={1} onMouseEnter={handleMouseEnter}>
          <DropdownIconButton
            icon="downArrow"
            options={[{ text: t('messageOptions.messageInfo'), onClick: () => handleClick(message?.id) }]}
            boxColor={backgroundMessageColor}
          />
        </Box>
      ) :
        undefined
      }

    </Flex>
  );
};

export default React.memo(Message, (prevProps, nextProps) => {
  return _.isEqual(prevProps, nextProps);
});
