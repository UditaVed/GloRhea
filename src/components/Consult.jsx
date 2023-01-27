import React from "react"
import CardConsult from "./CardConsult"
import dataConsult from "./dataConsult"
import {motion} from 'framer-motion'
import { textVariant2 } from "../utils/motion"
export default function Consult(props)
{
    return (
        <motion.div id="Counsellor" variants={textVariant2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="carousel mt-10">
        {

            dataConsult.map(({bribe,circlephoto,bgPhoto,link},index)=>{
                console.log(bgPhoto)

                return(
                    <CardConsult key={index} Image ={circlephoto} BgImage={bgPhoto} About={bribe} SlideNum={index + 1} Link={link}/>
                )
            })

        }
        </motion.div>
    )
}
