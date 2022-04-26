const call = async (query) => {
  const url = `https://delivery.enterspeed.com/v1?${query}`

  const response = await fetch(new Request(url), {
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.ENTERSPEED_ENVIRONMENT_API_KEY
    }
  })

  return response.json()
}

export const getByHandle = async (handle) => {
  const response = await call(`handle=${handle}`)

  return response.views[handle]
}

export const getByUrl = async (url) => {
  const response = await call(`url=${url}`)

  return response.route
}
