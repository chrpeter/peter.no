import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "test",
  },
});

window.app = app;

export default app;
