<template>
  <div class="system-user">
    <el-table :data="tableData" stripe border>
      <el-table-column
        prop="createAt"
        label="创建时间"
        align="center"
        min-width="180"
      />
      <el-table-column prop="id" label="编号" align="center" min-width="140" />
      <el-table-column
        prop="username"
        label="用户名"
        align="center"
        min-width="100"
      />
      <el-table-column prop="age" label="年龄" align="center" min-width="100" />
      <el-table-column
        prop="gender"
        label="性别"
        align="center"
        min-width="100"
      />
      <el-table-column
        prop="avator"
        label="头像"
        align="center"
        min-width="100"
      />
      <el-table-column
        prop="email"
        label="邮箱"
        align="center"
        min-width="100"
      />
      <el-table-column
        prop="phone"
        label="电话"
        align="center"
        min-width="100"
      />
      <el-table-column
        prop="address"
        label="地址"
        align="center"
        min-width="100"
      />
    </el-table>
    <!-- 分页 -->
    <el-row justify="space-evenly" class="pagination">
      <el-pagination
        background
        layout="sizes, prev, pager, next, jumper"
        :total="total"
        :page-sizes="[5, 10, 20, 50]"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { page } from '@/api/user'
import { IUserRecord } from '@/api/user/types'

defineComponent({
  name: 'UserPage',
})

const tableData = ref<IUserRecord[]>()
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
})
const total = ref<number>()

async function getTableData() {
  const res = await page(queryParams)
  tableData.value = res.data.list
  total.value = res.data.total
}

function handleSizeChange(val: number) {
  queryParams.pageSize = val
  getTableData()
}

function handleCurrentChange(val: number) {
  queryParams.pageNum = val
  getTableData()
}

onMounted(() => {
  getTableData()
})
</script>

<style lang="less" scoped>
.pagination {
  margin-top: 20px;
}
</style>
