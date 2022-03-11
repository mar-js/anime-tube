import { InterfaceAwait } from '../../tools/interfaces'

import Image from 'next/image'

export const Await: React.FC<InterfaceAwait> = ({ fetching, length }) => (
  <>
    { fetching && length > 0 ? (
      <Image
        width="320"
        height="400"
        src="/images/cat-wait.gif"
        alt="Cat wait"
      />
    ) : null }
  </>
)
