<template>
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="500"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="close">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from 'vue'

defineComponent({
  name: 'DwDialog',
})

const emit = defineEmits(['update:dialogVisible'])

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
})

const dialogVisible = computed({
  get: () => props.dialogVisible,
  set: (val) => emit('update:dialogVisible', val),
})

import { ElMessageBox } from 'element-plus'

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

const close = () => {
  dialogVisible.value = false
}
</script>
