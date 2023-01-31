import React from "react";
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

export default function IconContent(){

    const iconVar = (
        <div className='main-div'>
            <div className='icon-div'>
                <p className='icon-twitter'><FaTwitterSquare /></p>
                <p><FaFacebookSquare /></p>
                <p><FaInstagramSquare /></p>
                <p className='icon-github'><FaGithubSquare /></p>
            </div>
        </div>
    )
    return iconVar;
}