/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import { useState } from 'react';

const pageStyles = css`
  background: url(https://i.pinimg.com/564x/37/dd/57/37dd57bebac43cbd3da15bceed28a43a.jpg);
  height: 100vw;
`;
const headerStyles = css`
  font-weight: bold;
  font-size: 40px;
  padding: 50px;
`;
const imageStyles = css`
  height: 200px;
  width: 200px;
  display: flex;
  border: solid black 1px;
  /* justify-content: space-around; */
  /* margin: 0 auto; */
`;
const memeGeneratorStyles = css`
  display: flex;
  padding: 30px;
  justify-content: center;
`;
const allLabelStyles = css`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  /* align-items: flex-start; */
`;

const labelStyles = css`
  display: block;
  margin: 0 auto;
  width: 200px;
  padding: 10px;
`;

const buttonStyles = css`
  display: flex;
  margin: 0 auto;
  border-radius: 8px;
  font-size: 15px;
`;

function App() {
  const [topText, setTopText] = useState('memez');
  const [bottomText, setBottomText] = useState('me');
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [imageUrl, setImageUrl] = useState(
    `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
  );

  return (
    <div className="App" css={pageStyles}>
      <div css={headerStyles}>React Meme Generator</div>
      <div css={memeGeneratorStyles}>
        <div css={allLabelStyles}>
          <div>
            <label css={labelStyles}>
              {' '}
              Meme template:
              <input
                onChange={(event) => {
                  // uncomment if you want it to react without the generate button
                  // setImageUrl(
                  //   `https://api.memegen.link/images/${event.currentTarget.value}/${topText}/${bottomText}.png`,
                  // );
                  setMemeTemplate(event.currentTarget.value);

                  // {
                  //   event.currentTarget.value === ''
                  //     ? setMemeTemplate === 'bender'
                  //     :;
                  // }
                }}
              />
            </label>
          </div>
          <div>
            <label css={labelStyles}>
              {' '}
              Top text:
              <input
                onChange={(event) => {
                  // uncomment if you want it to react without the generate button
                  // setImageUrl(
                  //   `https://api.memegen.link/images/${memeTemplate}/${event.currentTarget.value}/${bottomText}.png`,
                  // );
                  setTopText(event.currentTarget.value);
                }}
              />
            </label>
          </div>

          <div>
            <label css={labelStyles}>
              {' '}
              Bottom text:
              <input
                onChange={(event) => {
                  // uncomment if you want it to react without the generate button
                  // setImageUrl(
                  //   `https://api.memegen.link/images/${memeTemplate}/${topText}/${event.currentTarget.value}.png`,
                  // );
                  setBottomText(event.currentTarget.value);
                }}
              />
            </label>
          </div>
        </div>
        <div css={imageStyles}>
          <img data-test-id="meme-image" src={imageUrl} alt="generated meme" />
        </div>
      </div>
      <div>
        <button
          css={buttonStyles}
          onClick={() =>
            setImageUrl(
              `https://api.memegen.link/images/${memeTemplate}/${topText}/${bottomText}.png`,
            )
          }
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
