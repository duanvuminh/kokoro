import Image from 'next/image'
import { SvgPath } from 'lib/type'
import { FlexwrapPart } from 'lib/part'

export function SummaryPart({name, children}:{name: string, children: any}): JSX.Element{
    const id = name.charCodeAt(0).toString(16)
    const path = `${SvgPath}0${id}.svg`
    return(
      <details>
        <summary>{name}</summary>
        <FlexwrapPart>
          <Image src={path} alt={id} width='200' height='200'/>
          {children}
        </FlexwrapPart>
      </details>
    )
}