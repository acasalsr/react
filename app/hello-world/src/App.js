import logo from "./logo.svg";
import "./App.css";
import Hello from "./hello";
import Box from "./box";
import Comment from "./Comment";

export default function App() {
  return (
    <>
      <Comment
        author={{
          avatarUrl:
            "https://pbs.twimg.com/profile_images/1554940713/cunningham_400x400.jpg",
          name: "Ward Cunninghan",
        }}
        text="Extreme Programming's roots start with a few people on a few projects taking a fresh look at what they do. It could have been any number of such small groups. The ideas of Extreme Programming have been invented over and over. But one group took advantage of the unique properties of the world wide web to articulate, refine and expand their ideas in an ever enlarging community."
        date="June 2009"
      />{" "}
      <Comment
        author={{
          avatarUrl:
            "https://miro.medium.com/max/3150/2*JAaDel4nA2PXn6UpDKQXvA.jpeg",
          name: "Kent Beck",
        }}
        text="Extreme Programming's roots start with a few people on a few projects taking a fresh look at what they do. It could have been any number of such small groups. The ideas of Extreme Programming have been invented over and over. But one group took advantage of the unique properties of the world wide web to articulate, refine and expand their ideas in an ever enlarging community."
        date="June 2009"
      />
    </>
  );
  /* 
    <div className="App">
      <header className="App-header">
        <Avatar />
        <Box>
          <img src={logo} className="App-logo" alt="logo" />
          <Hello name={nomVariable} />
          <Hello />
          <Box>
            <p>this is my first line of code.</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p className="testClass">Hola que tal? </p>
          </Box>
        </Box>
        ; let nomVariable = "Andreu";
      </header>
    </div>
  );*/
}
