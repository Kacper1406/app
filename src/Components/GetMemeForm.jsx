import memesData from "../data/memeData";

const GetMemeForm = () => {
  const getMeme = (e) => {
    e.preventDefault();
    const memesArr = memesData.data.memes;
    const randomItem = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomItem].url;
    console.log(url);
  };

  return (
    <main>
      <form>
        <div className='input-div'>
          <input type='text' placeholder='Top Text' id='text-1' />
          <input type='text' placeholder='Bottom text' id='text-2' />
        </div>
        <button onClick={getMeme}>Get a new meme image 🖼</button>
      </form>
    </main>
  );
};

export default GetMemeForm;
