import Image from 'next/image'
import Link from 'next/link'
import {nonISOencodedURI} from 'lib/util'

function EncodeLink({href,children}){
  const encodeUrl = nonISOencodedURI(href)
  console.log(href)
  console.log(encodeUrl)
  return(
    <Link href={encodeUrl}>
      {children}
    </Link>
  )
}
export function useMDXComponents(components) {
  return {Link:EncodeLink, Image,...components };
}