import React from "react"
export default function Community(props)
{
    return (
        <div id="Community" className="card lg:card-side shadow-xl w-[60vw] bg-[#fcead4] m-auto gap-10 p-10 rounded-2xl">
        <figure className="w-[70%] m-auto"><img src="communityimage.png" alt="Album" className=" rounded-full "/></figure>
        <div className="card-body gap-8 text-left">
            <h2 className="card-title text-2xl">Join People over the world </h2>
            <p className=" flex text-xl">Hey Queen's come here and enjoy lets play laugh and party together with the most amazing people in the world with</p>
            <div className="card-actions">
            <button className="btn bg-rose-500"><a href="https://discord.gg/w5UaubDdk9"> Join GloRhea </a></button>
            </div>
        </div>
        </div>
    )
}