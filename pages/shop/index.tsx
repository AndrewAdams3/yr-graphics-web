import { makeStyles, Grid, Hidden, Box } from "@material-ui/core";
import { useRouter } from "next/router";
import ProductRow from "../../components/ProductRow.tsx";
import { IProduct } from '../../types'

const useStyles = makeStyles((theme) => ({
  topBanner: {
    height: "12rem",
    backgroundColor: "red"
  },
  filterContainer: {
    height: "auto",
    backgroundColor: "blue"
  },
  itemsContainer: {
    height: "auto",
  }
}))

const products: IProduct[] = [{
  product_id: "asdlf",
  images: ["", "/images/blank-shirt.png"],
  name: "product 1"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 2"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 3"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 4"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 5"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 6"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 7"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 8"
}, {
  product_id: "afsdfasdf",
  images: [],
  name: "product 9"
}]

export default function Shop() {
  const classes = useStyles()
  const router = useRouter()
  const causeNav = (path: string) => { router.push(path) }
  return (
    <Grid container>
      <Grid item xs={12} className={classes.topBanner}>
        hello
      </Grid>
      <Hidden xsDown>
        <Grid item sm={3} md={2} className={classes.filterContainer}>
          filters
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={9} md={10} className={classes.itemsContainer}>
        <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/clean-water.png" title="Water" products={products} />
        <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/help-animals.png" title="Animals" products={products} />
        <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/clean-water.png" title="Air" products={products} />
        <ProductRow shopAllNav={() => causeNav("/shop/cause/water")} avatar="/images/help-animals.png" title="Labor" products={products} />
      </Grid>
      <Box bgcolor="green" width="100%">
        end of shop
      </Box>
    </Grid>
  )
}