import { Box, Spinner } from "@chakra-ui/react"

export const LoadingGeneral = () => {
  return (
    <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={999}
        >
          <Spinner color="white" size="xl" />
        </Box>
  )
}