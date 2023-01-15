import React from "react";

import {motion} from 'framer-motion'
import { fadeIn } from "../utils/motion";
export default function Stories(props)
{
    var index = props.Key;
    var bgColor = [``,'',]
    var textColor = ['text-amber-900','text-white']
    var num = index%2;
    return (
            <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className={`card w-80 ${num?'bg-[#B08585]':`bg-[#E7CAB2]` } h-96 shadow-xl p-0 text-left`}>
            <figure><img src={props.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className={`card-title ${textColor[num]}`}>{props.title}</h2>
            </div>
            </motion.div>   
    )
}
