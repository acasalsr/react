import "./App.css";

export default function App() {
  const contingut = [
    {
      title: "Titul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
    {
      title: "Titul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
    {
      title: "Titul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
    {
      title: "Titul",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat, ab aliquid esse eos nam, reprehenderit eum qui quisquam assumenda, quidem error dolorum earum. Commodi cum odio atque velit consectetur! Dicta, assumenda consequatur repellendus ex eligendi magni provident et dignissimos? Quos, quam. Placeat a voluptatem dicta eius voluptate consequuntur. Iusto ab natus pariatur iure dignissimos nesciunt laboriosam nisi ratione reiciendis?",
    },
  ];
  return (
    <>
      {contingut.map((contingutLlibre) => (
        <div className="wrapper">
          <h1>{contingutLlibre.title}</h1>
          <p className="hiddenContent">{contingutLlibre.content}</p>
        </div>
      ))}
    </>
  );
}
