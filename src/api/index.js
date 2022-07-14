export const query = async ({ endpoint, id }) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-API-Key': process.env.REACT_APP_API_KEY,
      },
    }
    const result = await fetch(
      `${process.env.REACT_APP_URL_API}/${endpoint}${id ? `/${id}` : ''}`,
      options,
    )
    return await result.clone().json()
  } catch (error) {
    console.log('err =>', error)
    throw error
  }
}

export const mutation = async ({ endpoint, method, payload, id }) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': process.env.REACT_APP_API_KEY,
      },
      body: JSON.stringify(payload),
    }
    const result = await fetch(
      `${process.env.REACT_APP_URL_API}/${endpoint}${id ? `/${id}` : ''}`,
      options,
    )
    return await result.json()
  } catch (error) {
    console.log('err =>', error)
    throw error
  }
}
