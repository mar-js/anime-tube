export const formatterValueSearchToUrl = (url: string): string => {
  const VALUE_SEARCH = url.split(' ').join('-')

  return VALUE_SEARCH
}
