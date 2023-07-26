import hyRequest from '../request'

export function getHotSuggestsData() {
  return hyRequest.get({
    url: "/home/hotSuggests",
  })
}
