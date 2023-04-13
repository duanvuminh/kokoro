export function JsonLd({jsonLd}:{jsonLd:{}}): JSX.Element {
    return(
        <script type= "application/ld+json" 
            dangerouslySetInnerHTML = {{__html: JSON.stringify(jsonLd)}}/>
    )
}