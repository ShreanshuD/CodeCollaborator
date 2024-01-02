import React from 'react'

import { Routes, Route } from 'react-router-dom'

import AuthenticationPage from './components/Login/Page'
import Form from './components/Create/Form'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<AuthenticationPage />} />
			<Route path="/create" element={<Form />} />
		</Routes>
	)
}

export default App
