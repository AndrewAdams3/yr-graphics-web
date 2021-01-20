import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import { IProduct } from '../../types'


interface IProps {
  product: IProduct
}

// const styles = {
//   product: {
//     height: "15rem",
//     width: '10rem',
//     textAlign: "center",
//     border: '1px solid grey'
//     borderRadius: "1rem",
//     overflow: "hidden";
//     cursor: pointer;
//   }
// }
const Product: React.FC<IProps> = ({ product: { name, images } }) => {
  const [imagePreview, setImagePreview] = useState(images[0] || "/images/blank-shirt.png")

  const toggleImage = () => {
    if (imagePreview === images[0] && images[1]) {
      setImagePreview(images[1])
    } else if (images[0])
      setImagePreview(images[0])
  }

  return (<>
    <Box
      h="13rem"
      w="12rem"
      textAlign="center"
      bgColor="white.500"
      overflow="hidden"
      cursor="pointer"
      position="relative"
      onMouseEnter={toggleImage}
      onMouseLeave={toggleImage}
    >
      <Image
        src={imagePreview}
        alt="shirt"
        layout="fill"
        objectFit="contain"
      />
    </Box>
  </>)
}

export default Product