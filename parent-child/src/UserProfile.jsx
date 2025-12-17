import UserInfo from "./UserInfo";

function UserProfile() {
    const userName = "John Doe";
    const userAge = 25;

    return (
        <div>
            <h2>User Profile</h2>
            <UserInfo name={userName} age={userAge} />
        </div>
    );
}

export default UserProfile;
