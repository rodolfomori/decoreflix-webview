// import { BottomMenu } from '../../components'
import { Container, IFramePage } from './styles'
import { Home } from '../Home/index'
import { useHome } from '../../hooks/HomeContext'
import HashLoader from 'react-spinners/HashLoader'
import { useEffect } from 'react'

export function Webview() {
  const { iFrame, setLoading, loading, iFrameKey } = useHome()

  const override = {
    position: 'fixed',
    top: 'calc(50% - 25px)',
    left: 'calc(50% - 25px)',
  }

  useEffect(() => {
    if (iFrame === 0) {
      setLoading(false)
    }
  }, [iFrame, setLoading])

  return (
    <Container>
            {/* <TopMenu /> */}
            {/* <BottomMenu /> */}

      {iFrame === 2 && <Home />}

      {iFrame === 1 && (
        <IFramePage
          src="https://decoreflix.com/"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        />
      )}
      {iFrame === 0 && (
        <IFramePage
          src="https://miembros.decoreflix.com/"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        />
      )}
      {iFrame === 3 && (
        <IFramePage
          src="https://devzapp.com.br/api-engennier/campanha/api/redirect/634089ccd8af3100011fe611"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        />
      )}
      {iFrame === 4 && (
        <IFramePage
          src="https://www.instagram.com/decoreflix"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        />
      )}
      {iFrame === 5 && (
        <IFramePage
          src="https://bit.ly/appdecoreflix"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        />
      )}
      {/* {!loading && <BottomMenu />} */}
      <HashLoader color="#9500D4" loading={loading} cssOverride={override} />
    </Container>
  )
}
