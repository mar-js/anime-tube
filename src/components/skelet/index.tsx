import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import { InterfaceSkelet } from '../../tools/interfaces'

import 'react-loading-skeleton/dist/skeleton.css'

export const Skelet: React.FC<InterfaceSkelet> = ({ inline, repeat, width, height, borderRadius }) => {
  const ARR = new Array(repeat).fill(0).map(v => {
    v = Math.floor(Math.random() * 4)

    return v
  })

  console.log(ARR)

  return (
    <>
      { ARR.map(a => (
        <SkeletonTheme
          key={ a + 2 }
          width={ width }
          height={ height }
          inline={ inline }
          borderRadius={ borderRadius }
          baseColor="#a98ff8"
          highlightColor="#f1f1f1"
        >
          <Skeleton
            count={ 1 }
            style={ {
              marginBottom: 2 + 'rem'
            } }
          />
        </SkeletonTheme>
      )) }
    </>
  )
}
