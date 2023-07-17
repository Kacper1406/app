function TextContent(){
    return (
        <div className="text-content">
            <Part1/>
            <Part2/>
        </div>
    )
}

function Part1(){
    return(
        <div className="description">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
    )
}

function Part2(){
    return(
        <div className="description">
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}

export default TextContent