import UserClass from "./UserClass";

export default function About() {
  const obj = {
    name: "Prabhu Kalyan",
    email: "prabhu@gmail.com",
    location: "Guntur",
  };
  return (
    <div className="about-page">
      <UserClass data={obj} />
    </div>
  );
}
