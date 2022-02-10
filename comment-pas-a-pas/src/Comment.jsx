import UserInfo from "./UserInfo";

export default function Comment({ author, text, date }) {
  return (
    <div className="Comment">
      <UserInfo author={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("ca", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
