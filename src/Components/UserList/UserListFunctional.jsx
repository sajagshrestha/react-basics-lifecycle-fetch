import React from "react";
import { useState, useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import { UserListWrapper, Title, Grid } from "./UserList.styles";

const UserListFunctional = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);

	const fetchUsers = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const fetchedUsers = await response.json();
			setUsers(fetchedUsers);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const handleUserClick = (user) => {
		setSelectedUser(user);
	};

	return (
		<UserListWrapper>
			<Title>Using Functional Component</Title>
			<Title>
				Selected User:{" "}
				{selectedUser ? selectedUser.name : "Select a user"}
			</Title>
			<Grid>
				{users.map((user) => (
					<UserCard
						key={user.id}
						handleClick={handleUserClick}
						user={user}
					/>
				))}
			</Grid>
		</UserListWrapper>
	);
};

export default UserListFunctional;
