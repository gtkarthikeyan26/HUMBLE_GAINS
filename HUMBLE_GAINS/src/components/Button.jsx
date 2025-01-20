import React from 'react'

export default function Button(props) {
    const {text,func} = props
    return (
        <button  onClick={func} className="
            px-8 py-4 
            text-2xl text-white font-semibold
            bg-slate-950 
            border border-blue-400 rounded-md
            relative z-30 overflow-hidden
            transition-all duration-700
            [text-shadow:3px_5px_2px_#be123c]
            hover:[text-shadow:2px_2px_2px_#fda4af]
            
            after:absolute
            after:-z-20
            after:h-1 after:w-1
            after:bg-black
            after:left-5 after:bottom-0
            after:rounded-md
            after:translate-y-full
            after:transition-all after:duration-700
            after:hover:scale-[300]
        ">
            <p>{text}</p>
        </button>
    )
}
