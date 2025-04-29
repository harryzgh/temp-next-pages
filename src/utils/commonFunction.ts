/**
 * 两个对象浅比较
 * 适用场景：简单对象，不包含嵌套结构
 * @param obj1
 * @param obj2
 * @returns
 */
export function isShallowEqual(
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): boolean {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  return keys1.every((key) => obj1[key] === obj2[key])
}

/**
 * 深度比较两个值是否相等
 * @param obj1 第一个值
 * @param obj2 第二个值
 * @returns 如果两个值深度相等返回true，否则返回false
 */
export function isDeepEqual<T>(obj1: T, obj2: T): boolean {
  // 1. 基本类型直接比较 （包括两个同一对象）
  if (obj1 === obj2) return true

  // 2. 处理null和undefined
  if (obj1 == null || obj2 == null) return obj1 === obj2

  // 3. 处理特殊对象类型
  if (obj1 instanceof Date && obj2 instanceof Date) {
    return obj1.getTime() === obj2.getTime()
  }
  if (obj1 instanceof RegExp && obj2 instanceof RegExp) {
    return obj1.toString() === obj2.toString()
  }

  // 4. 如果不是对象类型，直接比较
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false
  }

  // 5. 获取对象的属性名集合
  const keysA = Object.keys(obj1) as Array<keyof T>
  const keysB = Object.keys(obj2) as Array<keyof T>
  if (keysA.length !== keysB.length) {
    return false
  }

  // 6. 递归比较每个属性
  return keysA.every((key) => {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return false
    }
    return isDeepEqual(obj1[key], obj2[key])
  })
}
