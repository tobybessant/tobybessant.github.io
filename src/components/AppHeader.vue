<template>
  <div class="app-heading">
    <h1 id="app-title" class="">TOBY BESSANT</h1>
    <div id="subheading">
      <p>
        A motivated final year student studying Computer Science & Games
        Development at Plymouth University, graduating in June 2020.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTitle"
};
</script>

<style scoped>
.app-heading {
  margin: 50px 0;
  text-align: center;
}

#app-title {
  font-size: 5em;
	font-weight: 700;
	margin-bottom: 30px;
}

.white {
  color: #fff;
  text-shadow: 
		0 1px 0 #ccc, 
		0 2px 0 #c9c9c9, 
		0 3px 0 #bbb, 
		0 4px 0 #b9b9b9,
		0 5px 0 #aaa, 
		0 6px 1px rgba(0, 0, 0, 0.1),
		0 0 5px rgba(0, 0, 0, 0.1),
		0 1px 3px rgba(0, 0, 0, 0.3),
		0 3px 5px rgba(0, 0, 0, 0.2),
		0 5px 10px rgba(0, 0, 0, 0.25),
		0 10px 10px rgba(0, 0, 0, 0.2),
		0 20px 20px rgba(0, 0, 0, 0.15);
}

.hero {
	color: #202020;
	text-shadow: -10px 10px 0px #00e6e6,
                 -20px 20px 0px #01cccc,
                 -30px 30px 0px #00bdbd;
}

.pressed {
	color: transparent;
	background: #505050;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
}

#subheading {
  max-width: 900px;
  margin: 0 auto;
}
</style>
