import cookie from "cookie"

function parseCookies(context = {}, options = {}) {
  return cookie.parse(
    context.req && context.req.headers.cookie
      ? context.req.headers.cookie
      : document.cookie,
    options
  )
}

export default parseCookies
