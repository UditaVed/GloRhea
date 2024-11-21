import React from "react"
export default function Community(props)
{
    return (
        <div id="Community" className="card lg:card-side shadow-xl w-[80vw] sm:w-[60vw] bg-[#fcead4] m-auto gap-10 p-10 rounded-2xl">
        <figure className="sm:w-[70%] sm:m-auto"><img src="communityimage.png" alt="Album" className=" rounded-full " onLoad={props.onLoad}/></figure>
        <div className="card-body  justify-center align center gap-8 text-left p-0 text-[#2b3440]">
            <h2 className="card-title text-2xl">Join People over the world </h2>
            <p className="flex-none text-xl">Hey Queen's come here and enjoy lets play laugh and party together with the most amazing people in the world with</p>
            <div className="card-actions">
            <button className="btn bg-[#f4405f] text-white"><a href="https://discord.gg/w5UaubDdk9"> Join GloRhea </a></button>
            </div>
        </div>
        </div>
    )
}