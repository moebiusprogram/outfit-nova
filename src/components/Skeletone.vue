<template>
  <transition
    name="skeleton"
    mode="out-in"
    class="skeleton"
    :css="transition && hasChild ? true : false"
  >
    <slot v-if="isLoaded" />
     <span v-else>
      <span
        v-for="index in rep"
        :key="index"
        :class="componentClass"
        :style="componentStyle"
      />
    </span> 
  </transition>
</template>

<script>
export default {
    name: 'Skeleton',
  props: {
    animation: {
      type: [String, Boolean],
      default: 'wave',
      validator: (val) => ['wave', false].includes(val),
    },
    h: {
      type: String,
      default: '20px',
    },
    isLoaded: {
      type: Boolean,
      default: false,
    },
    m: {
      type: String,
      default: '0px',
    },
    rep: {
      type: Number,
      default: 1,
    },
    radius: {
      type: String,
      default: '4px',
    },
    skeletonClass: {
      type: String,
      default: '',
    },
    transition: {
      type: Boolean,
      default: true,
    },
    w: {
      type: String,
      default: '100%',
    },
  },
  computed: {
    componentClass() {
      return [
        this.skeletonClass,
        'skeleton',
        this.animation ? `skeleton--${this.animation}` : null,
      ]
    },
    componentStyle() {
      return {
        width: this.w,
        height: this.h,
        borderRadius: this.radius,
        margin: this.m,
      }
    },
    hasChild() {
      return this.$slots && this.$slots.default
    },
  },
}
</script>

<style lang="scss" scoped>

.relleno{
  background:#ddd;

}
.skeleton {
  color: transparent;
  display: block;
  user-select: none;
  background:  #dddbdd9d;
  position: relative;

  * {
    visibility: hidden;
  }

  &--wave {
    position: relative;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    &::after {
      animation: wave 1.5s linear 0s infinite;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.678),
        transparent
      );
      content: '';
      position: absolute;
      transform: translate3d(-100%, 0, 0);
      will-change: transform;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }
  }
}

  .skeleton::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
   animation: shimmer 5s infinite;
    content: '';
 }



@keyframes wave {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  60% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}

 @keyframes shimmer {
   100% {
     transform: translateX(100%);
   }
 }

.skeleton-enter-active,
.skeleton-leave-active-active {
  transition: opacity 0.1s ease-in-out;
}

.skeleton-enter,
.skeleton-leave-active {
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
}

</style>