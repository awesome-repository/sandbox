import { it, expect } from 'vitest'
import {
  cmdExists,
  openTempFile,
  
} from '.'

it('', ()=>{
  expect(cmdExists('node')).toBeTruthy()
  expect(cmdExists('yum')).toBeFalsy()


})
