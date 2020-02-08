<template>
  <div class="app-horizontal-defaults">
    <PageNav />
    <PageHeader text="CONTACT" subheading="Looking to get in touch? Check out the options below." />
    <div class="page-style-defaults">
      <div class="page-content">
        <div class="email">
          <div>
            <i class="fa fa-envelope"></i>
            <input
              ref="email"
              class="email-input"
              value="toby.bessant@tobybessant.co.uk"
              readonly="readonly"
            />
          </div>
          <button class="copy-button" @click="copyEmailToClipboard">
            <i ref="copyButtonIcon" class="fa fa-clone" aria-hidden="true"></i>
            <span ref="copyButtonText">Copy</span>
          </button>
        </div>
        <div class="contact-options">
          <ContactPlatform
            name="LinkedIn"
            url="https://www.linkedin.com/in/tobybessant/"
            faIcon="fa-linkedin"
            gradientColour="#2867b2"
          />
          <ContactPlatform
            name="GitHub"
            url="https://github.com/tobybessant"
            faIcon="fa-github"
            gradientColour="grey"
          />
          <ContactPlatform
            name="Twitter"
            url="#"
            faIcon="fa-twitter"
            gradientColour="#00aced"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageNav from "@/components/PageNav.vue";
import PageHeader from "@/components/PageHeader.vue";
import ContactPlatform from "@/components/ContactPlatform.vue";

export default {
  name: "contact",
  components: {
    PageNav,
    PageHeader,
    ContactPlatform
  },
  methods: {
    copyEmailToClipboard: function() {
      // copy lobby code to clipboard when clicked
      this.$refs.email.select();
      document.execCommand("copy");

      // show successfully copied message
      this.$refs.copyButtonText.textContent = "Copied";
      this.$refs.copyButtonIcon.classList.remove("fa-clone");
      this.$refs.copyButtonIcon.classList.add("fa-check");
    }
  }
};
</script>

<style scoped>
.email {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 20px;
  flex-wrap: wrap;
  border-radius: 9px 9px 0 0;
  border-bottom: 1px solid black;
}

.email-input {
  color: black;
  background: none;
  font-size: 2rem;
  margin: 0;
  width: 500px;
  border: none;
  padding: 0;
  outline: none;
}

.fa-envelope {
  margin-right: 20px;
}

.copy-button > .fa-clone,
.fa-check {
  color: black;
  margin-right: 10px;
}

button {
  background-color: white;
  border: none;
  color: black;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  padding: 12px 16px;
  font-size: 1.3rem;
  cursor: pointer;
  text-align: center;
  margin-left: 40px;
  min-width: 110px;
  width: 130px;
  transition: 0.3s;
}

/* Darker background on mouse-over */
button:hover {
  background-color: aquamarine;
}

.contact-options {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
}

.contact-options > a:not(:last-child) {
  margin-right: 40px;
}

@media (max-width: 850px) {
  .fa-envelope {
    display: none;
  }
}

@media (max-width: 800px) {
  button {
    margin-left: 0;
    margin-top: 20px;
  }

  .email {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

   .email>div {
    width: 100%;
  }
}

@media (max-width: 630px) {
  .email-input {
    font-size: 1.5rem;
    width: 100%;
  }
}

@media (max-width: 400px) {
  .email-input {
    font-size: 1.3rem;
    width: 100%;
  }
}
</style>
