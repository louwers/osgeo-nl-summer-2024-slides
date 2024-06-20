import { InjectionKey, Ref } from "vue";
import maplibre from 'maplibre-gl';

export const mapKey = Symbol() as InjectionKey<{
  map: Ref<maplibre.Map | null>
}>;