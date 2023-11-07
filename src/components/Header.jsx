import trollFace from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="head">
            <img src={trollFace} className="head--image" />
            <h2 className="head--title">Meme Generator</h2>
            <h4 className="head--project">React Course - Project 3</h4>
        </header>
    )
}
