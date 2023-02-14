import { GridItem } from '@chakra-ui/react'
import { Top } from 'components/molecules'

export const Header: React.FC = () => (
  <GridItem
    h="90px"
    as="header"
    area="header"
    display="flex"
    justifyContent="center"
    alignItems="center"
    pr={ 5 }
  >
    <Top />
  </GridItem>
)
