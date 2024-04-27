import which from 'which'
import os from 'node:os'
import { resolve } from 'node:path'
import { existsSync, promises as fs } from 'node:fs'
import childProcess from 'node:child_process'
import https from 'node:https'
import { mkdirSync } from 'node:fs'


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

export function clearConsole() {
  process.stdout.write(process.platform === 'win32' ? 
    '\x1B[2J\x1B[0f' 
    : '\x1B[2J\x1B[3J\x1B[H'
  )
}

export function isUsingYarn() {
  return (process.env.npm_config_user_agent || '').indexOf('yarn') === 0
}

export function tryRequire() {}

export function exec(command:string) {}

export function fetch() {}

export function mkdirp() {}

export function getRelativePath(from:string, to:string) {}


