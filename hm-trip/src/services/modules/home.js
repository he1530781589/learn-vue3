import hyRequest from '../request'

export function getHotSuggestsData() {
  return hyRequest.get({
    url: "/home/hotSuggests",
  })
}

export function getCategories() {
  return hyRequest.get({
    url: "/home/categories",
  })
}

export function getHouseList(page) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page
    }
  })
}
