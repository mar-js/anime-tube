import { GridItem } from '@chakra-ui/react'
import { Title } from 'components/molecules'
import { Navigation } from 'components/organisms'

export const Aside: React.FC = () => {

  return (
    <GridItem
      as="aside"
      area="aside"
    >
      <Title />
      <Navigation />
    </GridItem>
  )
}
