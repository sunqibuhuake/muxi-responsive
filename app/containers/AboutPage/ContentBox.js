import React from 'react'
import str2html from '../../utils/str2html'

export default function({text,style}) {
    return (
        <article
        style={style}
        dangerouslySetInnerHTML={{__html: str2html(text)}}
        ></article>
    )

}