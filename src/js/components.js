import "../css/components.css";

const createHTML = () => {
  const body = document.body;

  const div = document.createElement("div");
  div.innerHTML = `<img src="./assets/logo.png"></>
                    <h1>Happy Coding</h1>`;

  body.append(div);
};

export const init = () => {
  createHTML();
};
