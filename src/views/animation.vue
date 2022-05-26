<template>
  <section class="animation">
    <el-button @click="start">开始</el-button>

    <transition
      name="down"
      @before-enter="hook('beforeEnter')"
      @enter="hook('enter')"
      @after-enter="next"
      @before-leave="hook('beforeLeave')"
      @leave="hook('leave')"
      @after-leave="hook('afterLeave')"
    >
      <div v-show="showBox1" class="box1"></div>
    </transition>

    <transition name="toRight">
      <div v-show="showBox2" class="box2"></div>
    </transition>

    <!-- animate.css -->
    <div>
      <button @click="addClass">开始</button>
      <div :class="styleClass"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showBox1 = ref<boolean>(false)
const showBox2 = ref<boolean>(false)

const start = () => {
  showBox1.value = !showBox1.value
}

const hook = (str: string): void => {
  console.log(str)
}

const next = () => {
  showBox2.value = !showBox2.value
  console.log('after-enter')
}

const ani = 'animate__rubberBand'
const styleClass = ref<string>('ani-box animate__animated animate__fast animate__infinite')
const addClass = () => {
  if (styleClass.value.includes(ani)) {
    styleClass.value = styleClass.value.substring(0, styleClass.value.indexOf(ani) - 1)
  } else {
    styleClass.value += ` ${ani}`
  }
}
</script>

<style lang="scss" scoped>
.animation {
  position: relative;
  height: 100%;
  .box1 {
    width: 50px;
    height: 50px;
    background: violet;
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -25px;
    transform: scale(0.5);
  }
  .box2 {
    width: 50px;
    height: 50px;
    background: wheat;
    position: absolute;
    top: 200px;
    left: 50%;
    margin-left: -25px;
  }

  .ani-box {
    width: 50px;
    height: 50px;
    background: yellowgreen;
    // animation: bounce 1s infinite;
  }
}

// 向下
.down-enter-active,
.down-leave-active {
  transition: all 1s;
}
.down-enter-from,
.down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

// 向右
.toRight-enter-from {
  // transform: translateX(-9999px);
}
.toRight-enter-active {
  // transition: transform 1s;
  animation: toRight 1s;
}
@keyframes toRight {
  0% {
    left: -50px;
  }
  100% {
    left: 50%;
  }
}
</style>
