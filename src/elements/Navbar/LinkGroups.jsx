import AuthContext from "@contexts/Auth/AuthContext";
import Dropdown from "@elements/Default/Dropdown";
import { respondTo } from "@styles/styledMediaQuery";
import useIsTabletOrMobile from "@utils/useIsTabletOMobile";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 1.5rem;
	.nav-selected{
		color: var(--app-text) !important;
	}
	.nav-links{
		text-decoration: none;
		color: var(--app-container-text-primary);
		transition: color 0.2s ease;
		&:hover{
			color: var(--app-container-text-primary-hover);
		}
	}
	${respondTo.md`
		grid-auto-flow: row;
	`}
`

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
`

const DropdownContainer = styled.div``

const LinkGroups = () => {
	const isTabletOrMobile = useIsTabletOrMobile();
	const { auth } = useContext(AuthContext)
	const isLoggedIn = auth !== null
	return (
		<LinkContainer>
			<DropdownContainer
				to="/explore"
				exact
				className="nav-links dropdown"
				activeClassName="nav-selected"
			>
				<StyledNavLink
					to="/explore"
					exact
				>Explore</StyledNavLink>
				{!isTabletOrMobile &&
					<Dropdown
						options={[{
							name: "On Sale",
							link: "/explore/sale"
						}, {
							name: "Auctions",
							link: "/explore/auctions"
						}, {
							name: "Raffles",
							link: "/explore/raffles"
						}, {
							name: "Loans",
							link: "/explore/loans"
						}]}
					/>
				}
			</DropdownContainer>
			{isLoggedIn && (
				<>
					{/* <NavLink to="/lagoon" exact className="nav-links" activeClassName="nav-selected">
						Lagoon
					</NavLink> */}
					<NavLink to="/create" exact className="nav-links" activeClassName="nav-selected">
						Create
					</NavLink>
				</>
			)}
		</LinkContainer>
	)
}

export default LinkGroups
