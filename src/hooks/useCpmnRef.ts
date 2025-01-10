import { ref } from 'vue'

// /* eslint @typescript-eslint/no-explicit-any: off */
export function useCpmnRef<T extends new (...args: any[]) => any>() {
  return ref<InstanceType<T>>()
}
