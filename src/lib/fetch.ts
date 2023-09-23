/* eslint-disable no-undef */
export async function fetchWrapper<T = unknown>(
  inputUrl: RequestInfo | URL,
  init?: RequestInit | undefined,
) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${inputUrl}`,
    init,
  )

  const result = await data.json()

  return {
    status: data.status,
    data: result,
  } as T
}
