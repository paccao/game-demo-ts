import { useEffect } from 'react'
import styled from 'styled-components'
import { setConfig } from './helpers/initGame'

function App() {
	useEffect(() => {
		setConfig({ width: 800, height: 600 })
	}, [])

	return <Main className="App"></Main>
}

export default App

const Main = styled.main`
	background-color: #282c34;
	height: 100vh;
`
