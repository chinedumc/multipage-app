const UserPage = ({ user }) => {
	return (
		<>
			<div>
				<span>Welcome, {user?.name}</span>
			</div>
		</>
	);
};

export default UserPage;
