import { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { RESET_ANIMES_FOR_DAY } from '../../redux/types/animesForDay'
import { RESET_ANIMES } from '../../redux/types/getAnimes'
import { RESET_ANIME } from '../../redux/types/getAnime'
import { RESET_SEARCH_ANIMES } from '../../redux/types/getSearchAnimes'

import Head from 'next/head'
import { Section } from '../../layouts/section'
import {
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'

import {
  ItemStyle,
  LinkStyle,
  ListStyle,
  TitleStyle
} from './styles'

const Contact: NextPage = () => {
  const DISPATCH = useDispatch()

  useEffect((): any => {
    DISPATCH({ type: RESET_ANIMES_FOR_DAY })
    DISPATCH({ type: RESET_ANIMES })
    DISPATCH({ type: RESET_ANIME })
    DISPATCH({ type: RESET_SEARCH_ANIMES })

    return () => null
  }, [])

  return (
    <>
      <Head>
        <title>Contact | AnimeTube</title>
      </Head>
      <Section>
        <TitleStyle>Touch one icon!</TitleStyle>
        <ListStyle>
          <ItemStyle>
            <LinkStyle href="https://github.com/mar-js" target="_blank">
              <IoLogoGithub />
            </LinkStyle>
          </ItemStyle>
          <ItemStyle>
            <LinkStyle href="https://gitlab.com/mar-js" target="_blank">
              <IoLogoGitlab />
            </LinkStyle>
          </ItemStyle>
          <ItemStyle>
            <LinkStyle href="mailto:maguera37@gmail.com" target="_blank">
              <IoMail />
            </LinkStyle>
          </ItemStyle>
          <ItemStyle>
            <LinkStyle href="https://linkedin.com/in/mar-js" target="_blank">
              <IoLogoLinkedin />
            </LinkStyle>
          </ItemStyle>
        </ListStyle>
      </Section>
    </>
  )
}

export default Contact
