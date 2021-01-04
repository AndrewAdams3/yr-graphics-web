import { Paper, makeStyles } from '@material-ui/core'
import Image from 'next/image'
import { useState } from 'react'
import { IProduct } from '../../types'

const useStyles = makeStyles((theme) => ({
  product: {
    height: "15rem",
    textAlign: 'center',
    border: "1px solid " + theme.palette.secondary.light,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    cursor: "pointer"
  },
}))


interface IProps {
  product: IProduct
}
const Product: React.FC<IProps> = ({ product: { name, images } }) => {
  const classes = useStyles()
  const [imagePreview, setImagePreview] = useState(images[0] || "/images/blank-shirt.png")

  const toggleImage = () => {
    if (imagePreview === images[0] && images[1]) {
      setImagePreview(images[1])
    } else if (images[0])
      setImagePreview(images[0])
  }

  return (
    <Paper
      elevation={2} variant="outlined"
      className={classes.product}
      onMouseEnter={toggleImage}
      onMouseLeave={toggleImage}
    >
      <Image
        src={imagePreview}
        alt="shirt"
        layout="fill"
        objectFit="contain" />
    </Paper>
  )
}

export default Product