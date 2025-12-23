import React from 'react';

interface LinkProps{
    url: string;
    content: string;
}

const Link = ({url, content}: LinkProps) => {
    return(
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        </div>
    )
}

export default Link