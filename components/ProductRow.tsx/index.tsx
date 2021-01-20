import { useRef } from 'react'
import { Box, Button, IconButton, Avatar, Heading, Flex, Divider } from "@chakra-ui/react";
import { MdNavigateNext } from '@react-icons/all-files/md/MdNavigateNext'
import { MdNavigateBefore } from '@react-icons/all-files/md/MdNavigateBefore'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { IProduct } from '../../types/index'
import Product from './Product';
import styles from "./ProductRow.module.css"
import styled from '@emotion/styled';

interface ProductList {
  title: string
  avatar: string
  products: IProduct[]
  shopAllNav: () => void
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ArrowIcon = styled(IconButton)(props => ({
  borderRadius: "10rem",
  border: "1px solid grey",
  margin: "auto 0",
  backgroundColor: "#7b5e573d",
  zIndex: 100
}))

const ProductRow: React.FC<ProductList> = ({ title, products, avatar, shopAllNav }) => {
  const carouselRef = useRef<Carousel>();
  const isBig = true;
  const scrollRight = () => {
    carouselRef.current.next(carouselRef.current.state.slidesToShow)
  }
  const scrollLeft = () => {
    carouselRef.current.previous(carouselRef.current.state.slidesToShow)
  }

  return (<>
    <Flex direction="column" padding=".5rem">
      <Box display="flex" flexDirection="row" alignItems="center" width="100%" m=".25rem">
        <Avatar style={{ backgroundColor: "green" }} src={avatar} alt="cause" />
        <Divider orientation="vertical" margin="0 .5rem" />
        <Heading variant="h6">{title}</Heading>
        <Button onClick={shopAllNav} style={{ marginLeft: "1rem" }} variant="ghost" colorScheme="whiteAlpha">Shop All</Button>
      </Box>
      <Box className={styles["products-container"]}>
        {isBig &&
          <ArrowIcon
            icon={<MdNavigateBefore />}
            borderRadius="10rem"
            margin="auto 0"
            backgroundColor="white !important"
            border="none !important"
            zIndex={100}
            aria-label="Next-Button"
            size="lg"
            onClick={scrollLeft} />
        }
        <Carousel
          ref={carouselRef}
          partialVisbile={false}
          arrows={false}
          swipeable={!isBig} // ismobile?
          minimumTouchDrag={100}
          draggable={!isBig} // ismobile?
          showDots={false}
          responsive={responsive}
          ssr
          infinite={false}
          containerClass={styles.products}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType} // ismobile
          itemClass={styles["item-container"]}
          renderButtonGroupOutside
        >
          {products && products.map((product) => {
            return (<Product product={product} key={product.product_id} />)
          })}
        </Carousel>
        {isBig &&
          <ArrowIcon
            icon={<MdNavigateNext />}
            borderRadius="10rem"
            border="none !important"
            margin="auto 0"
            backgroundColor="white !important"
            zIndex={100}
            aria-label="Next-Button"
            size="lg"
            onClick={scrollRight} />
        }
      </Box>
    </Flex>
  </>)
}

export default ProductRow