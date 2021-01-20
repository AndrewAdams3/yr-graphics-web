import { Flex, Container, Box, Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { GetServerSideProps } from 'next'
import ProductRow from "../../components/ProductRow.tsx";
import { getAllProducts } from '../../lib/products/getAll'


export default function Shop({ products }) {
  const router = useRouter()
  const causeNav = (path: string) => { router.push(path) }
  return (
    <Container maxW="90%" h={"auto"} width="100%" flexDir="column">
      <Flex height={"50vh"} width="100%" margin="1rem 0">
        <Flex flex={2.5} bg="lightgrey">
          left
        </Flex>
        <Flex flex={1} flexDirection="column">
          <Flex flex={1} bg="yellow.500" mb="1rem" ml="1rem">top</Flex>
          <Flex flex={1} bg="brown.500" mt="1rem" ml="1rem">bottom</Flex>
        </Flex>
      </Flex>
      <Flex dir="row">
        <Flex flex={1} bg="blue.500">
          filters
        </Flex>
        <Flex height="auto" flex={5} flexDirection="column">
          <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/clean-water.png" title="Water" products={products} />
          <ProductRow shopAllNav={() => causeNav("/shop/cause/food")} avatar="/images/clean-water.png" title="Food" products={products} />
          <ProductRow shopAllNav={() => causeNav("/shop/cause/merch")} avatar="/images/clean-water.png" title="Merch" products={products} />
          {/* <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/help-animals.png" title="Animals" products={products} />
          <Spacer />
          <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/clean-water.png" title="Air" products={products} />
          <Spacer />
          <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/help-animals.png" title="Labor" products={products} />
          <Spacer /> */}
        </Flex>
      </Flex>
      <Box backgroundColor="green.500" width="100%" height="5rem">
        end of shop
      </Box>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const products = await getAllProducts();
  return {
    props: {
      products
    }
  }
}