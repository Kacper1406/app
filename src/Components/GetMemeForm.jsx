import { useState } from "react";
import memesData from "../data/memeData";

const GetMemeForm = () => {
  const [memeImg, setMemeImg] = useState("");
  const memesArr = memesData.data.memes;
  const randomItem = Math.floor(Math.random() * memesArr.length);

  const getMeme = (e) => {
    const url = memesArr[randomItem].url;
    setMemeImg(url);
    e.preventDefault();
  };

  return (
    <main>
      <form>
        <div className='input-div'>
          <input type='text' placeholder='Top Text' id='text-1' />
          <input type='text' placeholder='Bottom text' id='text-2' />
        </div>
        <button onClick={getMeme}>Get your meme!</button>
      </form>
      <div className='meme-img'>
        {memeImg.length > 0 ? (
          <img src={memeImg} alt='random img' width={300} height={300} />
        ) : null}
      </div>
    </main>
  );
};

export default GetMemeForm;
