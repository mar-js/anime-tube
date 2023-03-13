import { IOnScroll } from 'interfaces'

export const onInfiniteScroll = ({
  setLoading,
  page,
  setPage
}: IOnScroll) => {
  const scrollTop = document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight
  const clientHeight = document.documentElement.clientHeight

  if (scrollTop + clientHeight >= scrollHeight) {
    setLoading(true)

    setPage(page + 1)
  }
}
