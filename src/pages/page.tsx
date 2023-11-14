import { useChatsQuery, useUserQuery } from "@/shared/generated/graphql-schema";
import { Button, Image, Avatar, Box, Input, Stack, IconButton, Text, Badge, Card } from "@shared-components";

export default function Home() {

  const user = useUserQuery({
    variables: {
      where: {
        username: "test"
      }
    }
  });

  const chats = useChatsQuery({
    variables: {
      where: {
        userId: user.data?.user.id
      }
    }
  });

  console.log(user.data?.user);

  console.log(chats.data?.chats);

  

  return (
    <main>
      {
        chats.data?.chats.map((chat) => (
          <Card
            key={chat.uuid}
            title={chat.isGroup ? chat.name : chat.participants![1].user?.fullName}
            subtitle={chat.messages![0].text ? chat.messages![0].text : ''}
            messageDate={chat.messages![0].createdAt} />
        ))
      }
    </main>
  )
}
