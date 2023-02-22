import { FormEvent } from 'react'

import { useAnimeSearch } from 'contexts'

import { getAnimeSearch } from 'apis'

import { getValueForm } from 'helpers'

import {
  Input,
  InputGroup,
  InputLeftAddon
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

import { IAnimeApi } from 'interfaces'

export const Search: React.FC = () => {
  const { setResult } = useAnimeSearch()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const VALUE = getValueForm(e)

    setResult({
      title: 'Results',
      loading: 'loading'
    })

    try {
      const RESULT = await getAnimeSearch(VALUE)

      setResult({
        title: 'Results',
        loading: 'ok',
        animes: RESULT as IAnimeApi[]
      })
    } catch (error) {
      setResult({
        title: 'Results',
        loading: 'fail',
        error
      })
    }
  }

  return (
    <InputGroup
      as="form"
      action="GET"
      onSubmit={ handleSubmit }
      bgColor="white"
      mb={ {
        base: 5,
        md: 0
      } }
      borderRadius={ 50 }
    >
      <InputLeftAddon
        bgColor="transparent"
        border="none"
      >
        <Search2Icon />
      </InputLeftAddon>
      <Input
        name="search"
        type="search"
        border="none"
        pl={ 0 }
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
}
