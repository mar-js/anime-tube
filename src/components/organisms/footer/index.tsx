import { GridItem } from '@chakra-ui/react'
import { Copyright, Stars } from 'components/atoms'

export const Footer: React.FC = () => (
  <GridItem
    as="footer"
    area="footer"
    bgColor="purple.300"
    py={ 1 }
    textAlign="center"
  >
    <Copyright />
    <Stars />
  </GridItem>
)
