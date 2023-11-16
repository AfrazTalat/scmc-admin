import { mqType } from './src/config/mq';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $mq: mqType
  }
}