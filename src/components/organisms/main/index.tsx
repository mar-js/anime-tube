import { GridItem } from '@chakra-ui/react'
import { ContainerSlider } from 'components/molecules'

export const Main: React.FC = () => (
  <GridItem
    as="main"
    area="main"
    pt={ 5 }
    pl={ 5 }
  >
    <ContainerSlider />
  </GridItem>
)
