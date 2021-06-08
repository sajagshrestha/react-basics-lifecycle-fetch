import styled from "styled-components";

export const UserCardContainer = styled.div`
	width: 15rem;
	height: 15rem;
	display: grid;
	place-items: center;
	cursor: pointer;
	text-align: center;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	transition: all 0.5s ease;
	&:hover {
		box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
			0 15px 12px rgba(0, 0, 0, 0.22);
	}
`;
