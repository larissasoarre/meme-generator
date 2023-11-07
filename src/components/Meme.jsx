import React from "react";
import memesData from "../memesData.js"

function Meme() {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");

    function getMeme() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" className="form--input" />
                <input type="text" placeholder="Bottom text" className="form--input" />
                <button onClick={getMeme} className="form--button">Get a new meme image 🖼</button>
            </div>

            <div className="meme-conteiner">
                <img className="meme-img" src={memeImage} alt="" />
            </div>
        </main>
    )
}

export default Meme;
