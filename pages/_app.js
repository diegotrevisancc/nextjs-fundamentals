import MainContainer from "../components/MainContainer"

export default function MyApp({ Component, pageProps }) {
  return (
  <>
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  </>
  )
}

