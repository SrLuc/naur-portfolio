<template>
  <div class="container">

    <!-- Back Button Top -->
    <div class="back-top-wrapper">
      <button class="back-button-top" @click="goBack">
        &larr; Back to Projects
      </button>
    </div>

    <!-- Project Article -->
    <div class="project-article">
      <!-- Overview Card -->
      <div class="card">
        <h2>Overview</h2>
        <p>
          Development of a <strong>responsive Smart Fit location finder</strong> with advanced filtering capabilities, real-time status display, and optimized user experience.  
          <br/>Built with modern frontend technologies and following best practices for performance and maintainability.
        </p>
      </div>

         <!-- Images Card -->
      <div class="card">
        <h2>Project Screenshots</h2>
        <img src="" alt="Smart Fit Filter View" />
        <img src="" alt="Smart Fit Mobile View" />
      </div>

      <!-- Main Card: Features, Responsibilities, Usage -->
      <div class="card">
        <h2>Features</h2>
        <ul>
          <li><strong>Location Search:</strong> Find Smart Fit units with comprehensive filtering options.</li>
          <li><strong>Real-time Status:</strong> Display open/closed status and operating hours.</li>
          <li><strong>Responsive Design:</strong> Fully optimized for desktop and mobile devices.</li>
          <li><strong>Performance Optimized:</strong> Fast loading and smooth user interactions.</li>
          <li><strong>Modern Stack:</strong> Built with React, TypeScript, and Styled-Components.</li>
        </ul>
        <h2>Responsibilities</h2>
        <ul>
          <li>Develop responsive React components with TypeScript.</li>
          <li>Implement API integration for location data fetching.</li>
          <li>Create advanced filtering and search functionality.</li>
          <li>Optimize performance and ensure cross-browser compatibility.</li>
          <li>Deploy and maintain the application on Vercel.</li>
        </ul>
        <h2>Usage</h2>
        <ul>
          <li>Search for Smart Fit locations by various criteria.</li>
          <li>Filter units by open/closed status and operating hours.</li>
          <li>View detailed information about each location.</li>
          <li>Access the application on any device with internet connection.</li>
        </ul>
      </div>

   
    </div>

    <!-- Bottom Buttons -->
    <div class="buttons">
      <button class="back-button" @click="goBack">
        &larr; Back to Projects
      </button>

      <a href="https://smart-fit-challenger.vercel.app/" target="_blank">
        <button class="demo-button">See Demo</button>
      </a>

      <a href="https://github.com/SrLuc/SmartFit-Challenger" target="_blank">
        <button class="github-button">
          <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" style="margin-right: 0.5rem; vertical-align: middle;">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82a7.5 7.5 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          View on GitHub
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GymFit',
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1)
      } else {
        this.$router.push('/projects')
      }
    }
  }
}
</script>

<style scoped>
/* Container geral */
.container {
  padding: 1rem;
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  max-width: 900px;   /* limita largura */
  margin: 0 auto;     /* centraliza horizontalmente */
}

/* Back button top */
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-weight: 500;
  cursor: pointer;
}

/* Projeto */
.project-article {
  max-width: 800px;
  margin: 0 auto; /* centraliza os cards */
}

/* Card */
.card {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
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

.card ul, .card ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.card li {
  margin-bottom: 0.5rem;
}

.card img {
  width: 100%;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

/* Bottom Buttons */
.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* centraliza horizontalmente */
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

.buttons button a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

/* Back button bottom */
.back-button {
  background: #ffffff;
  color: #1f2937;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.back-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* GitHub button */
.github-button {
  background-color: #24292f;
  color: #ffffff;
  padding: 0 0.5rem;
}

.github-button:hover {
  background-color: #3b4045;
  transform: translateY(-2px);
}

/* Demo button */
.demo-button {
  background-color: #f28705;
  color: #ffffff;
  padding: 0 0.5rem;
}

.demo-button:hover {
  background-color: #d76c00;
  transform: translateY(-4px);
}

/* Responsividade */
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
