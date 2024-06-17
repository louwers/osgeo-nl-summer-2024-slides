<script setup lang="ts">
import maplibre from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useNav } from '@slidev/client'
import { computed, getCurrentInstance, onMounted, Ref, ref, watch, watchEffect } from 'vue';

const instance = getCurrentInstance();
const { currentSlideNo } = useNav();

const isSlideActive = computed(() => currentSlideNo.value === instance?.setupState.$page)

let map: maplibre.Map | null = null;

interface Props {
  attributionControl?: boolean
  styleName: string
}

const props = withDefaults(defineProps<Props>(), {
  attributionControl: false,
});

const mapDiv: Ref<null | HTMLElement> = ref(null);

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
})

watchEffect(() => {
  if (!mounted.value) return;
  if (!mapDiv.value) return;
  if (isSlideActive.value && !map) {
    map = new maplibre.Map({
        container: mapDiv.value, // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 1 // starting zoom
    });
    map.on('load', () => {
      map?.resize();
    });
  } else if (!isSlideActive && map) {
    map.remove();
    map = null;
  }
})
</script>

<template>
    <div style="height: 100%; width: 100%;" ref="mapDiv"></div>
</template>
