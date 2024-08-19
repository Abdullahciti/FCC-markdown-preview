import { useState } from "react";
import "./index.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function App() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here is some code,  \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

{function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}}
\`\`\`

You can also make text **bold**... whoa!
<br>

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.


There's also [links](https://www.freecodecamp.org), and

> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [markdowntext, setMarkdowntext] = useState(defaultMarkdown);

  return (
    <div className="App">
      <div className="editor-container">
        <div className="header">
          <h3>Editor</h3>
          <div className="icon">
            <i className="fa-solid fa-arrow"></i>
          </div>
        </div>
        <textarea
          className="editor"
          value={markdowntext}
          onChange={(e) => setMarkdowntext(e.target.value)}
        >
          hello
        </textarea>
      </div>
      <div className="viewer-container">
        <div className="header">
          <h3>Previewer</h3>
          <div className="icon">
            <i className="fa-solid fa-arrow"></i>
          </div>
        </div>
        <div className="viewer">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdowntext}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
