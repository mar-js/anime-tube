import Loader from 'react-loader-spinner'

import { LoaderStyle } from './styles'

export const LoaderLo: React.FC = () => (
  <LoaderStyle>
    <Loader
      type="Puff"
      color="#9775ff"
      secondaryColor="#a29bbb"
      height={ 50 }
      width={ 55 }
      timeout={ 10000 }
    />
  </LoaderStyle>
)
