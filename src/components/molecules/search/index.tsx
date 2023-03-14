import { FormEvent } from 'react'

import { useAnimeSearch } from 'contexts'

import { getAnime } from 'apis'

import { formatterValueSearchToUrl, getValueForm } from 'helpers'

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
    const URL = formatterValueSearchToUrl(VALUE)

    setResult({
      title: {
        text: 'Results',
        url: 'search'
      },
      loading: 'loading'
    })

    try {
      const RESULT = await getAnime({
        slug: '/search',
        animeId: VALUE
      })

      setResult({
        title: {
          text: 'Results',
          url: `search/${URL}`
        },
        loading: 'ok',
        animes: RESULT as IAnimeApi[]
      })
    } catch (error) {
      setResult({
        title: {
          text: 'Results',
          url: 'search'
        },
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
