<template>
  <div class="row mx-0 px-0 py-1">
    <template  v-for="(item, index) in item" :key="index" >
    <div class="col-6 mx-0 px-0   d-flex justify-content-between flex-column  my-2 "
         v-if="!item.is_cupon" :class="{'pe-1':(index%2==0),'ps-1':(index%2!=0)}">
  
      <Skeleton
        :animation="false"
        :is-loaded="isLoaded"
        Skeleton-class="w-100 h-56 w-36 lg:w-96 lg:h-96 border border-warning"
        :w="null"
        h="10px"
        radius="5px"
      >
        <div
          class="flex items-center justify-center w-full h-56 lg:max-w-sm lg:h-96"
          :style="{
            background: item.bgColor,
          }"
        >
        </div>
      </Skeleton>
  
      <div class="relative flex-1 p-6 pb-12 lg:p-8">
        <div class="flex justify-between mb-3 lg:mb-6">
          <Skeleton
            Skeleton-class="w-28 h-4 lg:h-7"
            :w="null"
            :h="null"
            :is-loaded="isLoaded"
          >
            <div
              class="text-gray-500 font-body text-xs font-semibold uppercase lg:text-xl"
            >
              {{ item.tag }}
            </div>
          </Skeleton>
          <Skeleton
            Skeleton-class="w-24 h-4 lg:h-7"
            :w="null"
            :h="null"
            :is-loaded="isLoaded"
          >
            <div class="text-gray-500 font-body text-xs lg:text-xl">
              {{ item.date }}
            </div>
          </Skeleton>
        </div>
        <div class="flex flex-col">
          <Skeleton
            :is-loaded="isLoaded"
            Skeleton-class="w-full h-7 lg:h-9"
            class="mb-3"
            :w="null"
            :h="null"
          >
            <div class="h mb-1 font-title text-xl lg:mb-4 lg:text-4xl">
              {{ item.title }}
            </div>
          </Skeleton>
          <Skeleton
            class="mb-6"
            :is-loaded="isLoaded"
            Skeleton-class="w-full h-3 lg:h-5"
            :w="null"
            :h="null"
            m="0 0 8px 0"
            :rep="4"
          >
            <div class="mb-6 text-gray-900 font-body text-sm lg:text-lg">
              {{ item.desc }}
            </div>
          </Skeleton>
        </div>
        <div
          class="absolute bottom-0 left-0 flex items-center justify-between pb-6 px-6 w-full lg:px-8"
        >
          <div class="flex items-center text-center">
            <Skeleton
              :is-loaded="isLoaded"
              Skeleton-class="w-8 h-8 lg:w-11 lg:h-11"
              :w="null"
              :h="null"
              radius="100%"
              class="mr-3"
            >
              <!-- <div
                :style="{
                  backgroundImage: `url(${require(`~/assets/${item.avatar}`)})`,
                }"
                class="mr-3 w-8 h-8 bg-cover bg-center rounded-full lg:w-11 lg:h-11"
              ></div> -->
            </Skeleton>
  
            <Skeleton
              :is-loaded="isLoaded"
              Skeleton-class="w-16 h-4 lg:h-7 lg:w-28"
              :w="null"
              :h="null"
            >
              <div class="text-blue-500 text-xs font-semibold lg:text-xl">
                {{ item.author }}
              </div>
            </Skeleton>
          </div>
          <Skeleton
            :is-loaded="isLoaded"
            Skeleton-class="w-16 h-16 lg:h-7 lg:w-28"
            :w="null"
            :h="null"
          >
            <div class="flex items-center">
              <div class="mr-1 text-blue-500 text-xs font-semibold lg:text-xl">
                Read More
              </div>
             
            </div>
          </Skeleton>
        </div>
      </div>
        </div>
  
    </template>
    </div>
  </template>
  
  <script>
  import Skeleton from './Skeletone.vue';
  
  export default {
    name: 'Card',
    components: {
      Skeleton,
    },
    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
      isLoaded: {
        type: Boolean,
        default: true,
      },
    },
  }
  </script>