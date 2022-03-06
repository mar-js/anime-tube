import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { InterfaceEsqueleto } from '../../tools/interfaces'

import 'react-loading-skeleton/dist/skeleton.css'

export const Esqueleto: React.FC<InterfaceEsqueleto> = ({
  width,
  height,
  inline,
  borderRadius
}) => (
  <SkeletonTheme
    key={ Math.round(Math.random() + 2) }
    width={ width }
    height={ height }
    inline={ inline }
    borderRadius={ borderRadius }
    baseColor="#a98ff8"
    highlightColor="#f1f1f1"
  >
    <Skeleton count={ 1 } />
  </SkeletonTheme>
)
