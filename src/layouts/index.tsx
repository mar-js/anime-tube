import { Header } from './header'

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    { children }
  </>
)
