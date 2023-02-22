import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle
} from '@chakra-ui/react'

import { IError } from 'interfaces'

export const Error: React.FC<IError> = ({ title, error }) => (
  <Alert status="error">
    <AlertIcon />
    <AlertTitle>Error in { title }:</AlertTitle>
    <AlertDescription>{ JSON.stringify(error) }</AlertDescription>
  </Alert>
)
