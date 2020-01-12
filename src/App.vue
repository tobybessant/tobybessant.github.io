<template>
  <div id="app">
		<link rel="stylesheet" href="https://use.typekit.net/wnm4fpp.css">
		<vue-particles class="background"
      color="#dedede"
      :particleOpacity="0.5"
      :particlesNumber="30"
      shapeType="circle"
      :particleSize="4"
      :lineLinked="false"
      :moveSpeed="0.2"
      :hoverEffect="false"
      :clickEffect="false"
    >
    </vue-particles>
		<router-view />
  </div>
</template>

<style>
body {
	padding: 0;
	margin: 0;
	min-height: 100vh;
	min-width: 100vw;
	background: rgb(48,73,83);
	background: radial-gradient(circle, rgba(48,73,83,1) 0%, rgba(0,0,0,1) 160%);
}

h1 {
	padding: 0;
	margin: 0 0 8px 0;
	font-size: 4rem;
	letter-spacing: 10px;
}

p {
	padding: 0;
	margin: 0 0 16px 0;
	font-size: 1.5rem;
}

#app {
	font-family: source-code-pro, monospace;
	font-weight: 400;
	font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	max-width: 1000px;
  color: #FFF;
	padding: 0 160px;
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
