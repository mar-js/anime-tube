import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { RESET_SEARCH_ANIMES } from '../../redux/types/getSearchAnimes'

import {
  SearchStyle,
  SearchImageStyle,
  SearchContainerStyle,
  FormStyle,
  SearchInputStyle,
  CloseImageStyle
} from './styles'

export const Search: React.FC = () => {
  const [ isSearch, setIsSearch ] = useState<boolean>(false)
  const [ isSearchText, setIsSearchText ] = useState<string>('')
  const HISTORY = useRouter()

  const DISPATCH = useDispatch()

  const SEARCH = () => {
    setIsSearch(true)

    window.scrollTo(0, 0)

    document.body.style.overflow = 'hidden'

    DISPATCH({ type: RESET_SEARCH_ANIMES })
  }

  const FORM = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsSearch(false)
    setIsSearchText('')

    document.body.style.overflow = ''

    HISTORY.push(`/search?q=${isSearchText}`)
  }

  const INPUT = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchText(target.value)

  }

  const CLOSE = () => {
    setIsSearch(false)
    setIsSearchText('')

    document.body.style.overflow = ''
    document.body.removeAttribute('style')
  }

  return (
    <SearchStyle title="Search">
      <SearchImageStyle className={ !isSearch ? 'show' : 'hide' }
        onClick={ SEARCH }
      />
      <SearchContainerStyle className={ isSearch ? 'show' : 'hide' }>
        <FormStyle onSubmit={ FORM }>
          <SearchInputStyle
            onChange={ INPUT }
            id="search"
            name="search"
            type="search"
            minLength={ 3 }
            value={ isSearchText }
            placeholder="Search an anime"
            required
          />
        </FormStyle>
        <CloseImageStyle className={ !isSearch ? 'show' : 'hide' }
          onClick={ CLOSE }
        />
      </SearchContainerStyle>
    </SearchStyle>
  )
}
