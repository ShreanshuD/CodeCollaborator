import React from 'react'

const Form = () => {
	return (
		<>
			<form>
				<label htmlFor="roomId">Room ID: </label>
				<input type="text" id="roomId" name="roomId" />

				<button type="submit">Create Room</button>
			</form>
		</>
	)
}

export default Form
