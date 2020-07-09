const BASE_URL = 'https://raw.githubusercontent.com/etspring/pdd_russia/master'

export const request = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`)
    const data = await response.json()
    return data
  } catch (e) {
    throw new Error('Ошибка получения данных. Попробуйте позже')
  }
}
