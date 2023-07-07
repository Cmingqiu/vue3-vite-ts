<template>
  <div class="virtual-scroll">
    <div class="btn">
      <div v-if="!setInt" @click="roll">开始滚动</div>
      <div v-else @click="endRoll">停止滚动</div>
    </div>
    <div class="div">
      <div ref="divv" :style="styleObj">
        <div v-for="(item, index) in scrollList" :key="index">
          <div class="cell">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref, watch } from 'vue'
type cellType = {
  id: number
  title: string
}
interface faceRequest {
  data: cellType[]
  total: number
}
const divv = ref()

// 总数组的数据
const totalList = ref<Array<cellType>>([])
const scrollList = ref<Array<cellType>>([]) // 滚动的数组
let loading = false // 数据是否全部加载完毕

// 模拟异步请求
const request = () => {
  return new Promise<faceRequest>((resolve, reject) => {
    let data: Array<cellType> = []
    // 每次返回30条数据
    for (let i = 0; i < 30; i++) {
      data.push({
        id: i,
        title: 'cell---' + i
      })
    }
    let total = 300 // 数据的总数
    resolve({ data, total })
  })
}
const getData = () => {
  request().then((res) => {
    totalList.value = totalList.value.concat(res.data)

    // 默认获取第一次请求回来的数据
    if (totalList.value.length <= 30) {
      scrollList.value = scrollList.value.concat(res.data)
    }
    // 当前请求的数量小于总数则继续请求
    if (totalList.value.length < res.total) {
      getData()
    } else {
      loading = true
    }
  })
}
getData()

const ScrollHeight = ref<number>(0) // 当前滚动高度

// 储存定时器
const setInt = ref()
const styleObj = ref({
  transform: 'translate(0px, 0px)'
})
// 内容滚动
const roll = () => {
  nextTick(() => {
    let offsetHeight = divv.value.childNodes[1].offsetHeight
    setInt.value = setInterval(() => {
      if (ScrollHeight.value == offsetHeight) {
        onDel()
        ScrollHeight.value = 0
      }
      ScrollHeight.value++
      styleObj.value.transform = `translate(0px, -${ScrollHeight.value}px)`
    }, 10)
  })
}
onMounted(() => {
  roll()
})
/* 
1.保存需要被删除的数据
2.删除超出视窗的数据
3.获取总数组的数据添加到滚动数组的最后一位
4.总数组全部加载完成，将被删除的数组数据添加到总数组最后面
5.清空被删除的数组数据
6.当滚动到最后一条数据时重置下标为0，首尾相连
 */
let index = 29
const onDel = () => {
  index++
  console.log('loading:', index)
  if (loading) {
    // 当滚动到最后一条数据时重置下标为0
    if (index == totalList.value.length) {
      index = 0
    }
    scrollList.value.shift()
    scrollList.value.push(totalList.value[index])
  } else {
    if (index == totalList.value.length) {
      index = 0
    }
    // 保存需要被删除的数据
    let value = scrollList.value[0]
    // 删除超出视窗的数据
    scrollList.value.shift()
    // 获取总数组的数据添加到滚动数组的最后一位
    scrollList.value.push(totalList.value[index])
    // 将被删除的数组数据添加到总数组最后面
    totalList.value.push(value)
  }
}

// 停止滚动
const endRoll = () => {
  clearInterval(setInt.value)
  setInt.value = null
}
</script>

<style lang="scss" scoped>
.virtual-scroll {
  .btn {
    display: flex;
    padding: 10px;
  }

  .btn > div {
    margin-right: 20px;
    background-color: cornflowerblue;
    border-radius: 10px;
    padding: 2px 10px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
  }

  .div {
    width: 150px;
    height: 200px;
    background-color: aquamarine;
    overflow: hidden;
    padding: 10px;
  }

  .cell {
    height: 30px;
  }
}
</style>
