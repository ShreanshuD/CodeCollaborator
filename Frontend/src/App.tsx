import React from 'react'

import { Routes, Route } from 'react-router-dom'

import AuthenticationPage from './components/Login/Page'
import Form from './components/Create/Form'
import {ChatComponent} from './components/Socket/chatbox'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<AuthenticationPage />} />
			<Route path="/create" element={<Form />} />
			<Route path='/chatbox' element={<ChatComponent/>}/>
		</Routes>
	)
}

export default App
