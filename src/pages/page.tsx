import { useUserQuery } from "@/shared/generated/graphql-schema";
import { Button,Image, Avatar, Box, Input, Stack, IconButton, Text } from "@shared-components";

export default function Home() {

  //  const user = useUserQuery({
  //   variables:{
  //     where:{
  //       username: "test"
  //     }
  //   }
  //  });

  //  console.log(user);
  return (
    <main>
      <div style={{
        textAlign: "center",
        margin: "40px"
      }}>
      <Button loading={false} variant={"outline"} text="tesdsst" color="blue"/>
      <Image src="https://bit.ly/dan-abramov" w={"400px"} h={"300px"} boxSize="100px" borderRadius='full' alt='Dan Abramov'></Image>
      <Avatar name="Enrique barroso" />
      <Box bg="lightgreen" style={{
        textAlign: "center"
      }}>
          <Input placeholder="Example text" />
          <Image src="https://bit.ly/dan-abramov" w={"400px"} h={"300px"} boxSize="100px" borderRadius='full' alt='Dan Abramov'></Image>
      </Box>
      <Input placeholder="Example text" />
      <Stack direction="column" spacing={4} align="stretch" divider={false}>
      <Box bg="lightblue" text='text box'/>
      <Box bg="lightblue" text='text box'/>
      <Box bg="lightblue" text='text box'/>
        </Stack>
       <IconButton icon="send"></IconButton>
      <Text as={'b'} noOfLines={2} color="green" fontSize="lg">
       Lorem, ipsum dolor sit amet consectetur 
       adipisicing elit. Minima animi, id illo odit nobis, fuga optio molestiae modi molestias earum harum maxime iste mollitia dolorem est magni consectetur labore suscipit.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti expedita cum totam, quisquam aperiam labore voluptatum? Consequuntur voluptas vero, quaerat maxime, 
      fuga suscipit ipsam magni hic necessitatibus dolorum eius provident.
        </Text> 

        
      </div>
    </main>
  )
}
