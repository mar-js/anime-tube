import NextLink from 'next/link'

import { Link as LinkCH } from '@chakra-ui/react'

import { ILink } from 'interfaces'

export const Link: React.FC<ILink> = ({ text, path }) => (
  <LinkCH as={ NextLink } href={ path }>
    { text }
  </LinkCH>
)
