import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';

export default function useProduct(props, products, scrollHandler) {

  const textNavBarWhite = ref(false);
  const showMenu = ref(false);
  const numElements = ref(6);
  const offer_end = ref(false);
  const offer_start = ref(false);
  const agotado = ref(false);

  const label = reactive({
    name: "Amazon",
    date: new Date(),
    ticking: false,
  });

  const NavBarBlack = (data) => {
    textNavBarWhite.value = data;
  };

  function menuTyping(data) {
    showMenu.value = data;
    // console.log("🚀 ~ file: Product.vue ~ line 74 ~ menuTyping ~ data", data)
  };

  // función para mostrar más elementos
  const showMore = () => {
    numElements.value += 6;
  };

  // Valido cuando se han leido todos los elementos
  const allElementsShown = computed(() => numElements.value >= products.length);
  const windowWidth = ref(window.innerWidth);
  const windowHeight = ref(window.innerHeight);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  };


  onMounted(() => {
    if (props.id == 2) {
      offer_end.value = true;
    }
    if (props.id == 3) {
      agotado.value = true;
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', scrollHandler);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', handleResize);
  });

  return {
    label,
    NavBarBlack,
    menuTyping,
    showMore,
    allElementsShown,
    textNavBarWhite,
    showMenu,
    numElements,
    offer_end,
    offer_start,
    agotado,
    windowWidth,
    windowHeight
  };
}