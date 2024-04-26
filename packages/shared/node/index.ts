import which from 'which'
import os from 'node:os'
import { resolve } from 'node:path'
import { existsSync, promises as fs } from 'node:fs'

export function cmdExists(cmd:string) {
  return which.sync(cmd, { nothrow:true }) !== null
}

export async function openTempFile(path:string, name:string) {
  const tempPath = resolve(os.tmpdir(), path)
  
  if(!existsSync(tempPath)) await fs.mkdir(tempPath, { recursive:true })

  const filePath = resolve(tempPath, `${name}`)

  return fs.open(filePath, 'wx')
    .then(fd=>({
      fd,
      path:filePath,
      unlink() {

      }
    }))
}

