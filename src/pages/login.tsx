import {Box, Flex, Login as LoginComponent } from "@components";
import { useEffect, useState } from "react";


export default function Login() {

  const [windowInnerHeight, setWindowInnerHeight] = useState<number>();

  useEffect(() => {
    setWindowInnerHeight(window.innerHeight);
  }, []);

  return (
    <Flex 
    bg={'#0b141a'}
    h={windowInnerHeight?.toString()} 
    justifyContent={"center"} 
    backgroundImage={`url(./images/backgroundImage.png)`}
    >
      <LoginComponent />
    </Flex>

  )
}