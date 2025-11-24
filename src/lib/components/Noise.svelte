<script lang="ts">
  // Noise overlay component for brutalist texture
</script>

<style>
  @keyframes noise {
    0% {
      background-position: 0 0;
    }
    10% {
      background-position: -10% -10%;
    }
    20% {
      background-position: -20% 10%;
    }
    30% {
      background-position: 10% -20%;
    }
    40% {
      background-position: -10% 20%;
    }
    50% {
      background-position: 20% -10%;
    }
    60% {
      background-position: -20% -20%;
    }
    70% {
      background-position: 10% 10%;
    }
    80% {
      background-position: -10% -10%;
    }
    90% {
      background-position: 20% 20%;
    }
    100% {
      background-position: 0 0;
    }
  }

  .noise-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    pointer-events: none;
    opacity: 0.1;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    animation: noise 0.5s steps(10) infinite;
  }
</style>

<div class="noise-overlay"></div>

