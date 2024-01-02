import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

import { Routes, Route } from 'react-router-dom'
import AuthenticationPage from './components/Login/Page'

type Credentials = {
	domain: string
	clientId: string
}

const credentials: Credentials = {
	domain: 'dev-yzh74xzm5aoy8mgh.us.auth0.com',
	clientId: 'lS1V7G784qgCKVAGSBuHWtGi4j1lTrUX',
}

const App = () => {
	return (
		<Auth0Provider
			domain={credentials.domain}
			clientId={credentials.clientId}
			useRefreshTokens
			// redirectUri={window.location.origin}
		>
			<Routes>
				<Route path="/" element={<AuthenticationPage />} />
			</Routes>
		</Auth0Provider>
	)
}

export default App
