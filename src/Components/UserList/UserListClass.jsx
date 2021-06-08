import { Component } from "react";
import { UserListWrapper, Title, Grid } from "./UserList.styles";
import UserCard from "../UserCard/UserCard";

class UserListClass extends Component {
	state = {
		users: [],
		selectedUser: null,
	};

	fetchUsers = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			const fetchedUsers = await response.json();
			this.setState({ ...this.state, users: fetchedUsers });
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount() {
		this.fetchUsers();
	}

	handleUserClick = (user) => {
		this.setState({ ...this.state, selectedUser: user });
	};

	render() {
		const { users, selectedUser } = this.state;
		return (
			<UserListWrapper>
				<Title>Using Class Component</Title>
				<Title>
					Selected User:{" "}
					{selectedUser ? selectedUser.name : "Select a user"}
				</Title>
				<Grid>
					{users.map((user) => (
						<UserCard
							key={user.id}
							handleClick={this.handleUserClick}
							user={user}
						/>
					))}
				</Grid>
			</UserListWrapper>
		);
	}
}
export default UserListClass;
