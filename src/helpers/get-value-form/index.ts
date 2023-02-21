
import { FormEvent } from 'react'

import { ISearch } from 'interfaces'

export const getValueForm = (e: FormEvent) => {
  const TARGET = e.target as HTMLFormElement
  const DATA = Object.fromEntries(new FormData(TARGET))
  const { search } = DATA as unknown as ISearch

  return search
}
