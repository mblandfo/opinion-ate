// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

// Make shallowMount happy...
declare module '*.vue' {
  const component: any;
  export default component;
}
