<template>
  <div class="app-horizontal-defaults app-vertical-defaults">
    <PageNav />
    <PageHeader text="ABOUT" subheading="" />
    <div class="about">
      <div class="top-details">
        <img id="headshot" src="../assets/Headshot.jpg" alt="" />
        <div class="fact-grid">
          <div class="fact">
            <p class="fact-label">Name</p>
            <p class="fact-value">Toby Bessant</p>
          </div>

          <div class="fact">
            <p class="fact-label">Age</p>
            <p class="fact-value">21</p>
          </div>

          <div class="fact">
            <p class="fact-label">Programming For</p>
            <p class="fact-value">4.5 Years</p>
          </div>
        </div>
      </div>
      <div class="body">
        <p>
          Hi there. I am an avid developer currently studying
          <strong>Computer Science & Games Development Bsc (Hons)</strong> at
          The University of Plymouth. I am due to graduate in June 2020! 🎉
        </p>
        <br />
        <p>
          I seriously enjoy all kinds of development. My degree has provided me
          with the toolset to confidently, and willingly, approach new
          challenges - knowing that there will always be something new to learn.
          I have also been exposed to a wide range of disciplines, in a
          multitide of langauges and environments. From experience-based
          projects developed in Unity3D; to core C# & Java software
          development; to unmanaged C++ & GPU programming; to NodeJS & full stack web
          development.
        </p>
        <br />
        <p>
          During the 2018/19 academic year I untertook my industry placement,
          where I was given the opportunity to utilise the skills I had aquired
          during my degree in a professional environment. This provided me with
          countless opportunities for personal development - having a profound
          impact on my confidence, communication, and wider business knowledge.
        </p>
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
.about {
  padding: 25px;
  max-width: 1120px;
  margin: 0 auto;
  border-radius: 18px;
}

.top-details {
  height: 250px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-details h2 {
  margin-bottom: 20px;
}

.body {
  margin-top: 40px;
}

.fact-grid {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.fact-label {
  font-weight: bold;
  margin-bottom: 0;
  color: #606060;
}

.fact-value {
  font-family: Monaco, monospace;
  font-size: 1.7rem;
  color: black;
}

#headshot {
  max-width: 14rem;
  border-radius: 20%;
  margin: 12px 50px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11);
}

@media (max-width: 990px) {
  .top-details {
    flex-direction: row-reverse;
    margin-bottom: 40px;
  }

  .fact-grid {
    flex-direction: column;
    align-items: flex-start;
  }

  #headshot {
    margin: 12px 0 0 0;
  }
}

@media (max-width: 640px) {
  .top-details {
    flex-direction: column;
    height: auto;
  }

  #headshot {
    margin: 0 auto 20px auto;
  }
}

</style>
