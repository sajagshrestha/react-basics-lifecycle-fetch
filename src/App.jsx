import React from "react";
import styled from "styled-components";
import UserListFunctional from "./Components/UserList/UserListFunctional";
import UserListClass from "./Components/UserList/UserListClass";

const MainWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 3rem 0;
	display: grid;
	grid-template-rows: auto;
	grid-gap: 5rem;
`;

export const App = () => {
	return (
		<MainWrapper>
			<UserListFunctional />
			<UserListClass />
		</MainWrapper>
	);
};

export default App;
