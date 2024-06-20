<script setup lang="ts">
import maplibre from 'maplibre-gl';

const style = "https://gist.githubusercontent.com/louwers/2ca9026ec9f5733d64b30809ab6c44c4/raw/5d30b5e350278885eab40bf8b6b9839258abd7d2/demotiles-no-geolines.json";

const initialCenter: [number,  number] = [30, 20];

const initialZoom = 0.9;

const mapClickEffects: Array<null | ((map: maplibre.Map) => void)> = [
null,
(map) => map.flyTo({
  animate: false,
  zoom: initialZoom,
  center: initialCenter
}),
  (map) => map.flyTo({
    zoom: 6,
    center: [5.116026768855169, 52.092849847999574],
    animate: true
  })
];
</script>

<template>
  <Map
  :styleName="style" :attributionControl="false" :center="[30, 20]" :zoom="0.9"
  :mapClickEffects="mapClickEffects"
   />

</template>