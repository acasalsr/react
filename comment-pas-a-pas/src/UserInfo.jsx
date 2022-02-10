import Avatar from "./Avatar.1";

export default function UserInfo({ author }) {
  return (
    <div className="UserInfo">
      <Avatar author={author} />
      <div className="UserInfo-name">{author.name}</div>
    </div>
  );
}
