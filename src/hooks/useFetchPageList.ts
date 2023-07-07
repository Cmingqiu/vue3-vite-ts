// 分页请求列表

import { reactive, ref } from 'vue'
interface ListData {
  total: number // 总页数
  records: unknown[]
  current: number
  size: number
}

export function useFetchPageList(fetchFunction: (arg: any) => Promise<any>) {
  const loading = ref(false)
  // 分页信息
  const page = ref(1) // 列表数据源
  const sourceData = reactive<ListData[]>([])
  const fetch = async () => {
    loading.value = true
    const listRes = await fetchFunction({ page_number: page.value, page_size: 15 })
    loading.value = false
    if (sourceData.length < listRes.total) {
      page.value++
      // sourceData = sourceData.concat(listRes.records) 失去了响应式
      sourceData.push(...listRes.records)
    }
  }

  return {
    loading,
    page,
    sourceData,
    fetch
  }
}
