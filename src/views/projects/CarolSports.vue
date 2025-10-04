<template>
  <div class="container">
    <!-- Back Button Top -->
    <div class="back-top-wrapper">
      <button class="back-button-top" @click="goBack">
        &larr; Back to Projects
      </button>

      <div class="buttons">
        <a href="https://carol-sports-km.vercel.app/" target="_blank">
          <button class="demo-button">See Demo</button>
        </a>

        <a href="https://github.com/SrLuc/CarolSportsKM" target="_blank">
          <button class="github-button">
            <svg
              height="16"
              width="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              style="margin-right: 0.5rem; vertical-align: middle"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.5 7.5 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            View on GitHub
          </button>
        </a>
      </div>
    </div>

    <!-- Project Article -->
    <div class="project-article">
      <!-- Overview Card -->
      <div class="card">
        <h2>Overview</h2>
        <p>
          Development of a <strong>sales website for Carol Esportes</strong>, a
          local sports products store. <br />The site is designed to showcase
          and sell high-quality sports items, providing a smooth user experience
          and responsive layout.
        </p>
      </div>

      <!-- Images Card with Masonry -->
      <div class="card">
        <h2>Project Screenshots</h2>
        <div class="masonry">
          <img
            src="../../../public/assets/2.carolesportes/img (4).png"
            alt="Carol Esportes Home"
          />
          <img
            src="../../../public/assets/2.carolesportes/img (2).png"
            alt="Carol Esportes Cart"
          />
          <img
            src="../../../public/assets/2.carolesportes/img (1).gif"
            alt="Carol Esportes Home"
          />
          <img
            src="../../../public/assets/2.carolesportes/img (1).png"
            alt="Carol Esportes Products"
          />

          <img
            src="../../../public/assets/2.carolesportes/img (2).gif"
            alt="Carol Esportes Cart"
          />
          <img
            src="../../../public/assets/2.carolesportes/img (3).png"
            alt="Carol Esportes Cart"
          />
        </div>
      </div>

      <!-- Main Card: Features, Responsibilities, Usage -->
      <div class="card">
        <h2>Features</h2>
        <ul>
          <li>Product catalog with categories and detailed pages.</li>
          <li>Shopping cart functionality for online purchases.</li>
          <li>Responsive design for desktop and mobile users.</li>
          <li>Optimized for fast loading and smooth browsing.</li>
          <li class="tech-stack">
            <strong>Technologies Used:</strong>
            <div class="icons">
              <img
                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                alt="HTML5"
                title="HTML5"
              />
              <img
                src="https://img.icons8.com/?size=100&id=4d9YPiN04osD&format=png&color=000000"
                alt="CSS3"
                title="CSS3"
              />
              <img
                src="https://img.icons8.com/?size=100&id=PVRwpTTPMITk&format=png&color=000000"
                alt="JavaScript"
                title="JavaScript"
              />
            </div>
          </li>
        </ul>

        <h2>Responsibilities</h2>
        <ul>
          <li>Develop responsive layouts using HTML, CSS, and JavaScript.</li>
          <li>Create interactive elements and product filtering.</li>
          <li>Ensure cross-browser compatibility and mobile responsiveness.</li>
          <li>Optimize performance and load speed for better UX.</li>
        </ul>

        <h2>Usage</h2>
        <ul>
          <li>Browse products by categories.</li>
          <li>Add items to the shopping cart.</li>
          <li>Checkout online with user-friendly flow.</li>
          <li>Access the website from any device with internet connection.</li>
        </ul>
      </div>
    </div>

    <!-- Bottom Buttons -->
    <div class="buttons">
      <button class="back-button" @click="goBack">
        &larr; Back to Projects
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarolEsportes",
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push("/projects");
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  font-family: "Inter", sans-serif;
  color: #1f2937;
  max-width: 900px;
  margin: 0 auto;
}

.back-top-wrapper {
  text-align: left;
  margin-bottom: 1rem;
}

.back-button-top {
  background: #ffffff;
  color: #1f2937;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  cursor: pointer;
}

.project-article {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.25rem;
}

.card p {
  margin-bottom: 1rem;
  color: #374151;
}

.card ul,
.card ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.card li {
  margin-bottom: 0.5rem;
}

/* Masonry Images */
.masonry {
  column-count: 2;
  column-gap: 1rem;
}

.masonry img {
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  transition: transform 0.3s;
}

.masonry img:hover {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .masonry {
    column-count: 1;
  }
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 800px;
  margin: 2rem auto 0 auto;
}

.buttons button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button {
  background: #ffffff;
  color: #1f2937;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.github-button {
  background-color: #24292f;
  color: #ffffff;
  padding: 0 0.5rem;
}

.github-button:hover {
  background-color: #3b4045;
  transform: translateY(-2px);
}

.demo-button {
  background-color: #f28705;
  color: #ffffff;
  padding: 0 0.5rem;
}

.demo-button:hover {
  background-color: #d76c00;
  transform: translateY(-4px);
}

/* Tech Stack */
.tech-stack {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.tech-stack strong {
  white-space: nowrap;
}

.tech-stack .icons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-stack .icons img {
  width: 32px;
  height: 32px;
}

@media (max-width: 768px) {
  .buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .buttons button {
    width: 100%;
  }

  .card {
    padding: 1rem;
  }
}
</style>
