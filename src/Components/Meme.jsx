const Meme = () => {

    const click = e =>{
        console.log("button clicked")
        e.preventDefault()
    }

    return (
    <main>
        <form>
            <div className="input-div">
                <input type="text" placeholder="Top Text" id="text-1"/>
                <input type="text" placeholder="Bottom text" id="text-2"/>
            </div>
            <button onClick={click}>Get a new meme image 🖼</button>
        </form>
    </main>
  )
}

export default Meme