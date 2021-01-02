import { makeStyles, Grid, Hidden } from "@material-ui/core";
import ProductRow from "../../components/ProductRow.tsx";
import { Product } from '../../types'

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
    background: "yellow"
  }
}))

const products: Product[] = [{
  product_id: "asdlf",
  images: [],
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
}]

export default function Shop() {
  const classes = useStyles()
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
        <ProductRow title="US Fires" products={products} />
      </Grid>
    </Grid>
  )
}