import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
	background: transparent;
	fill: currentColor;
`

const AcceptIcon = () => {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
			<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
		</SVG>
	)
}

export default AcceptIcon
