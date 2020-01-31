<template>
  <div class="app-horizontal-defaults">
    <PageNav />
    <PageHeader text="ABOUT" subheading="" />
    <div class="top-details">
      <img id="headshot" src="../assets/Headshot.jpg" alt="" />
      <div class="factsheet">
        <h2>Factsheet</h2>
        <div class="fact-grid">

          <div class="fact1">
            <p class="fact-label">Name</p>
            <p class="fact-value">Toby Bessant</p>
          </div>

          <div class="fact2">
            <p class="fact-label">Age</p>
            <p class="fact-value">21</p>
          </div>

          <div class="fact3">
            <p class="fact-label">Dreams of Being</p>
            <p class="fact-value">Full-stack developer</p>
          </div>

          <div class="fact4">
            <p class="fact-label">Programming For</p>
            <p class="fact-value">4.5 Years</p>
          </div>

          <div class="fact5">
            <p class="fact-label">Favourite Language</p>
            <p class="fact-value">JavaScript</p>
          </div>

          <div class="fact6">
            <p class="fact-label">Wants to Learn</p>
            <p class="fact-value">Large-scale app dev</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
  name: "about",
  components: {
    PageNav,
    PageHeader
  }
};
</script>

<style scoped>
.top-details {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-details h2 {
  width: 100%;
  margin-bottom: 20px;
}

.factsheet {
  width: 100%;
}

.fact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.fact1 { grid-area: 1 / 1 / 2 / 2; }
.fact2 { grid-area: 1 / 2 / 2 / 3; }
.fact3 { grid-area: 1 / 3 / 2 / 4; }
.fact4 { grid-area: 2 / 1 / 3 / 2; }
.fact5 { grid-area: 2 / 2 / 3 / 3; }
.fact6 { grid-area: 2 / 3 / 3 / 4; }

.fact-label {
  font-weight: bold;
  margin-bottom: 0;
}

.fact-value {
  font-family: Monaco, monospace;
  font-size: 1.7rem;
  color: aquamarine;
}

#headshot {
  max-width: 215px;
  border-radius: 20%;
  margin: 12px 50px 0 0;
}
</style>
