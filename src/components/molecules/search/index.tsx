import {
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export const Search: React.FC = () => (
  <InputGroup
    w="250px"
    bgColor="white"
    borderRadius={ 50 }
  >
    <InputLeftAddon
      bgColor="transparent"
      border="none"
    >
      <Search2Icon />
    </InputLeftAddon>
    <Input
      type="search"
      border="none"
      borderRadius={ 50 }
      sx={ {
        '&:focus-visible': {
          border: 'none',
          boxShadow: 'none'
        }
      } }
    />
  </InputGroup>
)
