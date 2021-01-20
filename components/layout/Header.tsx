import React from 'react';
import { useRouter } from 'next/router'
import { signIn, useSession, signOut } from 'next-auth/client'
import { Button, Flex, Heading } from '@chakra-ui/react';


export default function Header() {
  const router = useRouter()
  const [session, loading] = useSession()

  const navigate = (path: string) => {
    router.push(path)
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={5}
      bg={"green.600"}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Button
        onClick={() => navigate("/shop")}
        colorScheme="white" variant="ghost">
        Shop
      </Button>
      <Flex flexGrow={1} dir="column" justifyContent="center">
        <Heading size={"lg"} color="white">EcoGraphicPrints</Heading>
      </Flex>
      {session ?
        <Button onClick={() => signOut()}
          variant="ghost" colorScheme="white">Sign Out</Button>
        :
        <Button onClick={() => signIn("google")}
          variant="ghost" colorScheme="white">Sign In</Button>}
    </Flex>
  );
}
