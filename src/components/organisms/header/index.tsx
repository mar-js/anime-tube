import { GridItem } from '@chakra-ui/react'
import { Navigation } from 'components/molecules'

export const Header: React.FC = () => (
  <GridItem as="header" area="header">
    <Navigation />
  </GridItem>
)
