<script setup lang="ts">
import maplibre from 'maplibre-gl';
import {jawgStyle} from "./styles.ts";

// const mapClickEffects: Array<(map:  maplibre.Map) => void> = [
//   (map) => {
//     map.flyTo({
//       zoom: 4,
//       center: [5.116026768855169, 52.092849847999574]
//     })
//   },
//   (map) => {
//     map.flyTo({
//       zoom: 15,
//       center: [5.116026768855169, 52.092849847999574]
//     });
//   }
// ]

</script>

<template>
  <Map :styleName="jawgStyle"
  :center="[5.116026768855169, 52.092849847999574]"
  :zoom="6"
 >
  </Map>
</template>