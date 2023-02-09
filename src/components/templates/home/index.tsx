import { Grid } from '@chakra-ui/react'
import {
  Aside,
  Header,
  Footer
} from 'components/organisms'

export const LayoutHome: React.FC = () => (
  <Grid
    templateAreas={ `
      'header header'
      'aside main'
      'footer footer'
    ` }
    templateRows="auto 1fr auto"
    gridTemplateColumns="190px 1fr"
  >
    <Header />
    <Aside />
    <Footer />
  </Grid>
)
