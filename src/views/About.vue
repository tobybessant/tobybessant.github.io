<template>
  <div class="app-horizontal-defaults app-vertical-defaults">
    <PageNav />
    <PageHeader text="ABOUT" subheading="" />
    <div class="padding">
      <div class="about card">
        <div class="top-details">
          <img id="headshot" src="../assets/Headshot.jpg" alt="" />
          <div class="fact-grid">
            <div class="fact">
              <p class="fact-label">Name</p>
              <p class="fact-value">Toby Bessant</p>
            </div>

            <div class="fact">
              <p class="fact-label">Age</p>
              <p class="fact-value">{{ getAgeInYears }}</p>
            </div>

            <div class="fact">
              <p class="fact-label">Programming For</p>
              <p class="fact-value">{{ getComputingAgeInYears }} Years</p>
            </div>
          </div>
        </div>
        <div class="body">
          <p>
            Hi there. I am an avid developer currently studying
            <strong>Computing & Games Development Bsc (Hons)</strong> at
            The University of Plymouth. I am due to graduate in June 2020! 🎉
          </p>
          <br />
          <p>
            I started developing software in sixth-form, where I built a basic
            appointment management / CRM application in VB.NET. I quickly
            progressed onto C# & Java, before finding my true interest in
            <strong>web development</strong> - using JavaScript and TypeScript.
            My degree has provided me with the skillset to confidently approach
            new problems and challenges - knowing that there will always be
            something new to learn. I have been exposed to a wide range of other
            disciplines, in a multitide of langauges and environments. From
            experience-based projects developed in <strong>Unity3D</strong>; to
            core <strong>C# & Java</strong> software development; to unmanaged
            <strong>C++ & GPU</strong> programming; to
            <strong>NodeJS & full-stack</strong> web development.
          </p>
          <br />
          <p>
            During the 2018/19 academic year I untertook my industry placement,
            where I was given the opportunity to utilise the skills I had
            aquired during my degree in a professional environment. This
            provided me with countless opportunities for personal development -
            having a profound impact on my confidence, communication, and wider
            business knowledge.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";

const BIRTH_DAY = 13;
const BIRTH_MONTH = 3;
const BIRTH_YEAR = 1998;

const PROGRAMMER_YEAR = 2015;

export default {
  name: "about",
  components: {
    PageNav,
    PageHeader
  },
  computed: {
    getAgeInYears: function() {
      const today = new Date();
      const month = today.getMonth() - BIRTH_MONTH;
      let age = today.getFullYear() - BIRTH_YEAR;
      if (month < 0 || (month === 0 && today.getDate() < BIRTH_DAY)) {
        age = age - 1;
      }

      return age;
    },
    getComputingAgeInYears: function() {
      const today = new Date();
      let age = today.getFullYear() - PROGRAMMER_YEAR;
      if (today.getMonth() >= 6) {
        age += 0.5;
      }

      return age;
    }
  }
};
</script>

<style scoped>
.padding {
  padding: 0 25px;
}

.about {
  padding: 25px;
  max-width: 1120px;
  margin: 0 auto;
  border-radius: 18px;
}

.top-details {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.top-details h2 {
  margin-bottom: 20px;
}

.card {
  margin-top: 40px;
  background: whitesmoke;
  color: #434343;
  border-radius: 19px;
  padding: 40px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11);
}

.body {
  margin-top: 40px;
}

.fact-grid {
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.fact-label {
  font-weight: bold;
  margin-bottom: 0;
  color: rgb(153, 153, 153);
}

.fact-value {
  font-family: Monaco, monospace;
  font-size: 1.7rem;
  color: rgb(68, 68, 68);
}

#headshot {
  max-width: 14rem;
  border-radius: 19px;
  margin: 0 50px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11),
    0 16px 16px rgba(0, 0, 0, 0.11), 0 32px 32px rgba(0, 0, 0, 0.11);
}

@media (max-width: 990px) {
  .top-details {
    flex-direction: row-reverse;
    margin-bottom: 40px;
  }

  .fact-grid {
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;
  }

  #headshot {
    margin: 12px 0 0 0;
  }

  .card {
    padding: 20px;
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
