import { useRef } from 'react'
import { Box, Button, makeStyles, Typography, IconButton, Divider, Avatar, useMediaQuery } from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { IProduct } from '../../types/index'
import Product from './Product';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: theme.spacing(1),
    margin: theme.spacing(2, 0)
  },
  productsContainer: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
    height: "15rem",
    marginTop: theme.spacing(1)
  },
  products: {
    position: "absolute",
    width: "90%",
    top: 0, bottom: 0, left: 0, right: 0,
    margin: "auto",
  },
  itemContainer: {
    padding: "1rem"
  },
  arrowButton: {
    backgroundColor: "#7b5e573d",
    border: "1px solid " + theme.palette.secondary.light,
    marginTop: "auto",
    marginBottom: "auto",
    zIndex: 100
  },
  title: {
    fontWeight: "bold"
  }
}))

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

const ProductRow: React.FC<ProductList> = ({ title, products, avatar, shopAllNav }) => {
  const carouselRef = useRef<Carousel>();
  const classes = useStyles()
  const theme = useTheme()
  const isBig = useMediaQuery(theme.breakpoints.up('sm'));

  const scrollRight = () => {
    carouselRef.current.next(carouselRef.current.state.slidesToShow)
  }
  const scrollLeft = () => {
    carouselRef.current.previous(carouselRef.current.state.slidesToShow)
  }

  return (
    <Box className={classes.container}>
      <Box display="flex" flexDirection="row" width="100%">
        <Avatar style={{ backgroundColor: "green" }} src={avatar} alt="cause" />
        <Divider orientation="vertical" variant="middle" flexItem style={{ backgroundColor: "black" }} />
        <Typography className={classes.title} variant="h6">{title}</Typography>
        <Button onClick={shopAllNav} style={{ marginLeft: "1rem" }}>Shop All</Button>
      </Box>
      <Box className={classes.productsContainer}>
        {isBig && <IconButton className={classes.arrowButton} onClick={scrollLeft}>
          <NavigateBeforeIcon />
        </IconButton>}
        <Carousel
          ref={carouselRef}
          partialVisbile={false}
          arrows={false}
          swipeable={!isBig} // ismobile?
          minimumTouchDrag={100}
          draggable={!isBig} // ismobile?
          showDots={false}
          responsive={responsive}
          ssr // means to render carousel on server-side.
          infinite={false}
          containerClass={classes.products}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType} // ismobile
          itemClass={classes.itemContainer}
          renderButtonGroupOutside
        >
          {products && products.map((product) => {
            return (<Product product={product} key={product.product_id} />)
          })}
        </Carousel>
        {isBig && <IconButton className={classes.arrowButton} onClick={scrollRight}>
          <NavigateNextIcon />
        </IconButton>}
      </Box>
    </Box>
  )
}

export default ProductRow