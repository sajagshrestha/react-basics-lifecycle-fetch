import React from "react";
import { UserCardContainer } from "./UserCard.styles";

export const UserCard = ({ user, handleClick }) => {
	return (
		<UserCardContainer onClick={() => handleClick(user)}>
			{user.name}
		</UserCardContainer>
	);
};

export default UserCard;
