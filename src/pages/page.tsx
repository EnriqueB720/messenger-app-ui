import { useUserQuery } from "@/shared/generated/graphql-schema";
import { Button,Image, Avatar } from "@shared-components";

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
      </div>
    </main>
  )
}
