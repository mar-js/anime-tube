import { Grid } from '@chakra-ui/react'
import {
  Aside,
  Header,
  Footer,
  Main
} from 'components/organisms'

export const LayoutHome: React.FC = () => (
  <Grid
    templateAreas={ `
      'aside header'
      'aside main'
      'footer footer'
    ` }
    gridTemplateRows="auto 700px auto"
    gridTemplateColumns="20% 80%"
  >
    <Header />
    <Aside />
    <Main />
    <Footer />
  </Grid>
)
