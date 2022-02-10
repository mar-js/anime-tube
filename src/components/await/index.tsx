import { InterfaceAwait } from '../../tools/interfaces'

import catWait from '../../assets/images/cat-wait.gif'

import { AwaitStyle } from './styles'

export const Await: React.FC<InterfaceAwait> = ({ fetching, length }) => (
  <>
    { fetching && length > 0 ? (
      <AwaitStyle src={ catWait } alt="Cat wait" />
    ) : null }
  </>
)
