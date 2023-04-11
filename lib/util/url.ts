import { validator } from "lib/util"

export  function nonISOencodedURI(url: string): string{
    const parts: string[] = url.split("/")
    const result: string[] = parts.map((value:string)=>validator(value)?value:encodeURI(value))
    return result.join("/")
}