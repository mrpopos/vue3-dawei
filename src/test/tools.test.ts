import { describe, expect, it } from 'vitest'
import { isObject } from '@/utils/tools'

describe('utils tools', () => {
  it('test', () => {
    expect(1).toBe(1)
  })
  it('isObject', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(1)).toBe(false)
    expect(isObject('1')).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
  it('sum', () => {
    expect(1 + 1).toBe(2)
  })
})
