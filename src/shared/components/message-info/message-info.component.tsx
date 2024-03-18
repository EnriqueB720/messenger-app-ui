import * as React from "react";

import _ from "lodash";

import { MessageInfoProps } from "@types";
import { Message, Box, Stack, AvatarMessageItem, Text, IconButton, RightSideBarHeader } from "@components";
import { useRouter } from "next/router";
import { useTranslation } from "@/shared/hooks";

const MessageInfo: React.FC<MessageInfoProps> = ({
  message,
  messageStatuses,
  headerHeight,
  user
}) => {
  const receivedStatus = messageStatuses?.filter((status) => status.isReceived);
  const readStatus = messageStatuses?.filter((status) => status.isRead);

  const router = useRouter();
  const {t} = useTranslation();
  
  const titleColor = "#8696a0";

  const closeMessageInfo = () => {
    const baseRoute = router.asPath.replace(/&?messageId=\d+/, '');
    router.push(baseRoute);
  }

  return (
    <>
     <RightSideBarHeader text={t('messageInformation.closeTitle')} height={headerHeight} onCloseFunction={closeMessageInfo}/>
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
          userId={user.userId}
          maxWidth="45vh"
        />
      </Box>
      <Box
        h={'70%'}
      >
        <Box padding={1} h={'50%'} overflowY={'auto'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"} color={titleColor}>
              {t('messageInformation.receivedBy')}
            </Text>
            <Box>
              {receivedStatus?.map((receivedBy) => (
                <AvatarMessageItem
                  key={receivedBy.userId+'receivedBy'}
                  bg={'#111b21'}
                  title={user?.isThisUserMyContact(receivedBy.userId!) ? user.getContactName(receivedBy.userId!) : receivedBy.user?.phoneNumber?.toString()} 
                  subtitle={user?.isThisUserMyContact(receivedBy.userId!) ? undefined : receivedBy.user?.fullName}
                  avatarImage={user?.isThisUserMyContact(receivedBy.userId!) ? undefined : `./images/defaultUserImage.png`}
                  titleWidth='sm'
                />
              ))}
            </Box>
          </Stack>
        </Box>
        <Box padding={1} h={'50%'} overflowY={'auto'}>
          <Stack direction="column" divider>
            <Text fontSize="lg" textAlign={"center"} color={titleColor}>
              {t('messageInformation.readBy')}
            </Text>
            <Box>
              {readStatus?.map((readBy) => (
                <AvatarMessageItem
                  key={readBy.userId+'readBy'}
                  bg={'#111b21'}
                  title={user?.isThisUserMyContact(readBy.userId!) ? user.getContactName(readBy.userId!) : readBy.user?.phoneNumber?.toString()} 
                  subtitle={user?.isThisUserMyContact(readBy.userId!) ? undefined : readBy.user?.fullName}
                  avatarImage={user?.isThisUserMyContact(readBy.userId!) ? undefined : `./images/defaultUserImage.png`}
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
