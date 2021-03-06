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
  ItemStyle,
  ListStyle,
  FlexStyle,
  SubtitleStyle,
  TextStyle,
  TitleStyle
} from './styles'

import Image from 'next/image'

const AboutApp: NextPage = () => {
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
        <title>About app | AnimeTube</title>
      </Head>
      <Section>
        <TitleStyle>Hi!</TitleStyle>
        <SubtitleStyle>My name is Martín and I&apos;m a frontend dev, but this view is not to talk about me but to give you a summary of the app.</SubtitleStyle>
        <FlexStyle>
          <ListStyle>
            <ItemStyle>
              <TextStyle>Home: under the heading the animes that are broadcast on tv the day you are watching the app (based on japanese tv). What follows are the most popular animes, the first two appear and as you scroll, two more are added, which would be the animes that continue in popularity.</TextStyle>
            </ItemStyle>
            <ItemStyle>
              <TextStyle>Search: you are looking for anime: the search is done by word, it is not an exact search. For example: if you search for &quot;Dragon Ball&quot; not only will the anime Dragon Ball appear, but also anime that have the word Dragon and/or Ball. </TextStyle>
            </ItemStyle>
            <ItemStyle>
              <TextStyle>Anime card: when touching any card of the animes, either those that appear by days, the most popular or those that come out of the search result: it directs you to another view where a video appears (if you have one) or else a image, the name of the anime in English and Japanese, a summary, etc. </TextStyle>
            </ItemStyle>
          </ListStyle>
          <Image
            width="320"
            height="320"
            src="/images/luffy.gif"
            alt="Monkey D. Luffy"
          />
        </FlexStyle>
      </Section>
    </>
  )
}

export default AboutApp
