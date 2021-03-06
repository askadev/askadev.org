import React from "react"

import { login } from '../../utils/auth'

function currentYear() {
  return new Date().getFullYear()
}

const Github = () => (
  <svg height="512" width="512" viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg>
)

const Meetup = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><path fill="none" d="M-.2.1h53.8v53.4H-.2z"/><path d="M5.1 24.8c.1.6 0 1.1-.3 1.6s-.8.8-1.4.9-1.1 0-1.6-.4c-.5-.3-.8-.8-.9-1.4-.1-.6 0-1.1.3-1.6.4-.5.8-.8 1.4-.9s1.1 0 1.6.3c.5.4.8.9.9 1.5zm38.8 3.6c1.3 2.1 1.7 4.4 1.2 6.8-.5 2.4-1.7 4.4-3.8 5.8-1.7 1.2-3.5 1.7-5.6 1.7-.4 1.5-1.2 2.7-2.4 3.5-1.2.9-2.5 1.3-4 1.2-1.5 0-2.8-.6-3.9-1.6-.2.2-.3.3-.4.3-1.9 1.3-4 1.8-6.3 1.4s-4.1-1.6-5.4-3.5c-.9-1.4-1.4-2.9-1.5-4.6-1.5-.3-2.9-.9-4-2s-1.9-2.2-2.2-3.6c-.4-1.3-.4-2.7-.1-4.2.4-1.5 1.1-2.8 2.3-3.9-.7-1.1-1-2.3-1.1-3.6 0-1.3.2-2.4.7-3.5.5-1.1 1.2-2 2.2-2.7 1-.8 2.1-1.2 3.4-1.4.6-1.6 1.5-3 2.8-4.1 1.2-1.2 2.6-2 4.1-2.6s3-.7 4.7-.5 3.1.8 4.5 1.9c1.3-.4 2.6-.6 3.9-.5 1.3.1 2.5.4 3.6 1s2.1 1.3 2.9 2.2c.8.9 1.4 2 1.9 3.2.4 1.3.6 2.6.5 3.9 1 .3 1.8.8 2.4 1.6.7.8 1.1 1.6 1.3 2.5s.1 1.8-.2 2.8c-.2 1.1-.7 1.9-1.5 2.5zM10.1 41.1c.2.1.4.4.4.6.1.3 0 .5-.1.8-.1.2-.4.4-.6.4-.3.1-.5 0-.7-.1-.2-.1-.4-.4-.4-.6-.1-.3 0-.5.1-.8.1-.2.4-.4.6-.4.2-.1.5-.1.7.1zM12.6 10c.3.4.3.8.3 1.2-.1.5-.3.8-.7 1.1-.4.3-.8.3-1.2.3-.5-.1-.8-.3-1-.7-.3-.4-.3-.8-.3-1.2.1-.5.3-.8.7-1.1.4-.3.8-.3 1.2-.3.4.1.7.3 1 .7zm24.5 25.7c-.1-.4-.3-.8-.8-.9-.4-.2-.9-.3-1.4-.3-.5 0-.9-.1-1.4-.3s-.7-.6-.7-1.1c-.1-.9.2-2.2.9-3.9l2.1-5.1c.7-1.7 1-2.8.9-3.6-.3-1.9-1.3-2.8-3.3-2.9-.8 0-1.5.1-2.1.4l-.1.1c-.1 0-.1.1-.1.1s-.1 0-.1.1c-.1 0-.1 0-.1.1H30.6s-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1-.3-.2l-.3-.3-.2-.2c-.1-.1-.2-.2-.3-.2-.1 0-.2-.1-.3-.2-.1-.1-.2-.1-.3-.1-.1 0-.2-.1-.3-.1-.6-.1-1-.1-1.3.1s-.8.4-1.3.9c0 0-.1.1-.3.2s-.3.2-.3.3c-.1.1-.2.2-.4.3-.2.1-.3.2-.5.2-.1 0-.3 0-.5-.1-1-.5-1.8-.9-2.3-1.1-.8-.3-1.6-.3-2.6.1s-1.7 1-2.1 1.8c-.3.5-.7 1.4-1.1 2.7-.5 1.3-.9 2.5-1.2 3.7-.3 1.2-.7 2.4-1.1 3.7s-.6 2-.6 2c-.4 1.3-.2 2.4.5 3.3s1.8 1.4 3.1 1.3c.6 0 1-.2 1.4-.4.4-.2.7-.7 1.1-1.3.1-.2.9-2.1 2.2-5.6 1.3-3.5 2.1-5.3 2.1-5.4.1-.2.3-.4.6-.5.3-.1.6-.1.8 0 .5.3.7.8.6 1.5 0 .3-.5 1.6-1.4 3.9-.9 2.3-1.4 3.5-1.4 3.7-.1.7.1 1.2.5 1.6.5.3 1 .4 1.7.2s1.2-.7 1.5-1.4c.1-.1.5-1 1.3-2.6s1.5-3.1 2.3-4.6 1.2-2.3 1.3-2.5c.4-.5.8-.8 1.1-.8.5 0 .8.4.7 1.1 0 .3-.6 1.7-1.8 4.1-1.2 2.4-1.8 3.9-2 4.5-.2 1-.1 1.9.4 2.9.5.9 1.2 1.6 2.1 2.1.3.2.8.3 1.4.4.6.1 1.3.2 2 .2s1.3-.1 1.7-.4c.6-.2.8-.7.7-1.3zM17 2.2c.1.3 0 .6-.1.9-.2.3-.4.4-.7.5-.3.1-.6 0-.9-.2-.3-.2-.5-.4-.5-.7-.1-.3 0-.6.2-.9.2-.3.4-.4.7-.5.3-.1.6 0 .9.2.2.1.3.4.4.7zm9.4 46.9c.2.3.3.7.2 1-.1.4-.3.7-.6.9s-.7.3-1 .2c-.4-.1-.7-.3-.9-.6-.2-.3-.3-.7-.2-1 .1-.4.3-.7.6-.9.3-.2.7-.3 1-.2s.7.2.9.6zm5.2-45.4c.3.5.4 1 .2 1.6s-.5 1-1 1.3c-.5.3-1 .4-1.6.2-.6-.1-1-.5-1.3-1-.3-.5-.4-1.1-.2-1.6.1-.6.5-1 1-1.3.5-.3 1-.4 1.6-.3.5.3 1 .6 1.3 1.1zm9.2 41.6c.4.5.5 1.1.4 1.7-.1.6-.4 1.1-.9 1.5-.5.4-1.1.5-1.7.4-.6-.1-1.1-.4-1.4-.9-.4-.5-.5-1.1-.4-1.7.1-.6.4-1.1.9-1.5.5-.4 1.1-.5 1.7-.4.5.1 1 .4 1.4.9zm6.2-30c.3.4.4.9.3 1.4-.1.5-.3.9-.7 1.2-.4.3-.9.4-1.4.3-.5-.1-.9-.3-1.2-.8-.3-.4-.4-.9-.3-1.4.1-.5.3-.9.8-1.2.4-.3.9-.4 1.4-.3.5.1.9.4 1.1.8zm3.1 13.3c.1.4 0 .7-.2 1-.2.3-.5.5-.9.6-.4.1-.7 0-1-.2-.3-.2-.5-.5-.6-.9-.1-.4 0-.7.2-1 .2-.3.5-.5.9-.6.4-.1.7 0 1 .2.3.3.5.6.6.9zm2.3-6.6c.1.3 0 .5-.1.8-.1.2-.4.4-.6.5-.3.1-.5 0-.8-.2-.2-.2-.4-.4-.4-.6-.1-.3 0-.5.1-.8.1-.2.4-.4.6-.4.3-.1.5 0 .7.1.3.1.4.3.5.6z"/></svg>
)

const Twitter = () => (
  <svg height="512" width="512" viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg>
)

const Footer = () => (
  <footer className="container copyright">
    <p>&copy; Copyright Ask a Dev {currentYear()} | Logo by <a href="http://northbryan.com/"> North Bryan</a> | <a href="#" onClick={login}>Login</a></p>
    <p>
      <a href="https://www.meetup.com/Ask-A-Dev/"><Meetup /></a>
      <a href="https://github.com/askadev"><Github /></a>
      <a href="https://twitter.com/askadevorg"><Twitter /></a>
    </p>

  </footer>
)

export default Footer
