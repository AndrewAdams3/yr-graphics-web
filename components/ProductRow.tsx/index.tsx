import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useRef } from "react";
import { Product } from '../../types/index'

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "purple",
    padding: "1rem"
  },
  productsContainer: {
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
    height: "15rem"
  },
  products: {
    position: "absolute",
    width: "80%",
    top: 0, bottom: 0, left: 0, right: 0,
    margin: "auto",
    display: "flex",
    overflow: "hidden"
  },
  item: {
    backgroundColor: "white",
    margin: ".5rem",
    minWidth: "15rem",
    height: "15rem"
  }
}))

interface ProductList {
  title: string
  products: Product[]
}
const ProductRow: React.FC<ProductList> = ({ title, products }) => {
  const classes = useStyles()
  const productsRef = useRef<HTMLDivElement>()
  const itemRef = useRef<HTMLDivElement>()

  const scrollRight = () => {
    productsRef.current.scrollBy({
      top: 0,
      left: itemRef.current.clientWidth,
      behavior: 'smooth'
    });
  }
  const scrollLeft = () => {
    productsRef.current.scrollBy({
      top: 0,
      left: -productsRef.current.clientWidth,
      behavior: 'smooth'
    });
  }
  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
      <Box className={classes.productsContainer}>
        <div ref={productsRef} className={classes.products}>
          {products && products.map((product) => {
            return (
              <div ref={itemRef} key={product.product_id} className={classes.item}>
                {product.name}
              </div>
            )
          })}
        </div>
        <Button onClick={scrollLeft}>left</Button>
        <Button onClick={scrollRight}>right</Button>
      </Box>
    </Box>
  )
}

export default ProductRow