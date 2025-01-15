/**
 * 判断传入的值是否为对象类型。
 *
 * @param value 需要判断的值。
 * @returns 如果传入的值是对象类型，则返回 true；否则返回 false。
 */
export function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null
}
