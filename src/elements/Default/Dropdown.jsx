import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';
import { css } from "styled-components";

const opacityToggle = css`
	${props => props.isVisible ? `
		opacity: 1;
		display: block;
	` : `
		opacity: 0;
		display: none;
	`}
`

const Wrapper = styled.div`
	position: absolute;
	top: 100%;
	transform: translateY(-4rem);
	padding-top:2rem;
	${opacityToggle}
`

const DropdownContainer = styled.div`
	background: var(--app-modal-btn-primary);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding: 0.75rem 0.5rem;
	cursor: default;
	overflow: hidden;
	min-width: 10rem;
`

const Option = styled(NavLink)`
	padding: 0.675rem 1.75rem;
	border-radius: 0.25rem;
	text-decoration: none;
	color: var(--app-text);
	&:hover{
		background: var(--app-container-bg-secondary);
	}
`

const Dropdown = ({ options, isVisible }) => {
	const [locallyVisible, setLocallyVisible] = useState(false);
	return (
		<CSSTransition onEnter={() => setLocallyVisible(true)} onExit={() => setLocallyVisible(false)} in={isVisible} timeout={200} classNames="dropdown">
			<Wrapper isVisible={locallyVisible}>
				<DropdownContainer>
					{options.map(option => (
						<Option key={option.name} to={option.link}>
							{option.name}
						</Option>
					))}
				</DropdownContainer>
			</Wrapper>
		</CSSTransition>
	)
}

export default Dropdown