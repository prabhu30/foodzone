import UserClass from "./UserClass";

export default function About() {
    const obj = { name: "Prabhu Kalyan", email: "prabhu@gmail.com", location: "Guntur" };
    const { name, email, location } = obj;

    return (
        <div className="about-page">
            <h1>Meet our Team 👨🏻‍💻</h1>
            <UserClass data={obj} />
        </div>
    )
}