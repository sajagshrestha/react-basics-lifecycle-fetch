import styled from "styled-components";

export const UserListWrapper = styled.div`
	display: grid;
	grid-template-rows: auto;
	grid-gap: 3rem;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 1.5rem;
	text-align: center;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	grid-gap: 3rem;
`;
