import fs from 'fs'
import path from 'path'
import { PostParameterModel } from 'lib/model'

export function getAllPostIds(mdxPath: string) {
  const postsDirectory = path.join(process.cwd(), mdxPath)

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return new PostParameterModel(fileName.replace(/\.mdx$/, ''))
  })
}