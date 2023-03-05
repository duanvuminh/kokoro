import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'app/mdx/kanji')


export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      id: fileName.replace(/\.mdx$/, '')
    }
  })
}