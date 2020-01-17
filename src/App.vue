<template>
  <div class="hexagons">
    <div id="app">
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap"
        rel="stylesheet"
      />
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(
    135deg,
    rgba(47, 21, 181, 1) 0%,
    rgba(93, 84, 204, 1) 100%
  );
}

.hexagons {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='196' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.08' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

h1 {
  padding: 0;
  margin: 0 0 8px 0;
  font-size: 4rem;
  letter-spacing: 10px;
}

h2 {
  padding: 0;
  margin: 0 0 8px 0;
  font-size: 3rem;
  letter-spacing: 5px;
}

p {
  padding: 0;
  margin: 0 0 16px 0;
  font-size: 1.5rem;
}

.fa {
  font-size: 36px;
  padding: 0;
  margin: 0;
  color: white;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: Ubuntu, monospace;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1300px;
  color: #fff;
}

.app-w-defaults {
  max-width: 100%;
  padding: 0 60px;
  word-wrap: break-word;
}

.background {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  z-index: -1;
  min-height: 100vh;
  min-width: 100vw;
}
</style>
