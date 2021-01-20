import { Box, useStyleConfig } from "@chakra-ui/react"

export default function NoOutlineButton(props) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig("Button", { size, variant })
  return <Box as="button" onMouseDown={e => e.preventDefault()} sx={styles} {...rest} />
}