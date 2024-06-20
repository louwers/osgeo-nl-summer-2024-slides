<script setup lang="ts">
import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useNav } from '@slidev/client'
import { computed, getCurrentInstance, inject, InjectionKey, onMounted, provide, Ref, ref, watch, watchEffect } from 'vue';
import { mapKey } from './keys.ts';

const instance = getCurrentInstance();
const { currentSlideNo, clicks } = useNav();

// a slide is 'active' when it is the previous or the next slide
// we don't want to keep all maps active because we will run
// out of OpenGL contexts
const isSlideActive = computed(() => 
  currentSlideNo.value === instance?.setupState.$page ||
  currentSlideNo.value + 1 === instance?.setupState.$page ||
  currentSlideNo.value - 1 === instance?.setupState.$page
)

watchEffect(() => {
  console.log({
    currentSlideNo: currentSlideNo.value,
    $page: instance?.setupState.$page
  })
})

let map: Ref<maplibre.Map | null> = ref(null);

interface Props {
  attributionControl?: boolean,
  styleName: string,
  center?: [number, number],
  zoom?: number,
  mapClickEffects?: Array<(map: maplibre.Map) => void>
}

const props = withDefaults(defineProps<Props>(), {
  attributionControl: true,
  center: () => [0, 0],
  zoom: 1,
  mapClickEffects: () => []
});

const mapDiv: Ref<null | HTMLElement> = ref(null);

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
});

provide(mapKey, {
  map
});

watch(clicks, (clickNo) => {
  const mapClickEffect = props.mapClickEffects[clickNo];

  if (mapClickEffect && map.value) {
    mapClickEffect(map.value);
  }
});

watchEffect(() => {
  if (!mounted.value) return;
  if (!mapDiv.value) return;
  if (isSlideActive.value && !map.value) {
    console.log("initializing MapLibre");
    map.value = new maplibre.Map({
        container: mapDiv.value, // container id
        style: props.styleName, // style URL
        center: props.center, // starting position [lng, lat]
        zoom: props.zoom, // starting zoom
        attributionControl: props.attributionControl
    });
    map.value.on('load', () => {
      map.value?.resize();
    });
  } else if (!isSlideActive.value && map.value) {
    map.value.remove();
    map.value = null;
  }
})
</script>

<template>
    <div style="height: 100%; width: 100%;" ref="mapDiv"></div>
    <slot></slot>
</template>
