import { BottomMenu } from '../../components/BottomMenu'
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
  }, [iFrame])

  return (
    <Container>
      {iFrame === 0 && <Home />}
      {iFrame === 1 && (
        <IFramePage
          src="https://miembros.decoreflix.com/"
          onLoad={() => setLoading(false)}
          key={iFrameKey}
        />
      )}

      {!loading && <BottomMenu />}

      <HashLoader color="#9500D4" loading={loading} cssOverride={override} />
    </Container>
  )
}
