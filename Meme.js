import React from "react";
import MemeData from "./MemeData";
let url;
export default function Meme() {
    const [memeImage , setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = MemeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        console.log(memesArray[randomNumber].url);
        setMemeImage(memesArray[randomNumber].url);
    }

    // const getMemeImage = () => {
    //     const memesArray = MemeData.data.memes;
    //     const randomNumber = Math.floor(Math.random() * memesArray.length);
    //     setMemeImage(memesArray[randomNumber].url)
    // }

    return (
        <main><p> {url}</p>

            <div className="form">
                <input type="text" className="form--inputs" placeholder="Top text" />
                <input type="text" className="form--inputs" placeholder="Bottom text" />
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage}  alt = "alt1" className="img--div"/>
        </main>
    )
}