<script lang="ts">
  import '../app.css';
  import Cursor from '$lib/components/Cursor.svelte';
  import Navigation from '$lib/components/Navigation.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import Noise from '$lib/components/Noise.svelte';
  import Signature from '$lib/components/Signature.svelte';
  import { onMount } from 'svelte';
  import Lenis from 'lenis';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let { children } = $props();
  let lenisInstance: Lenis | null = $state(null);

  onMount(() => {
    if (typeof window === 'undefined') return;

    // Initialize Lenis Smooth Scroll
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2
    });

    const raf = (time: number) => {
      lenisInstance?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Connect GSAP ScrollTrigger with Lenis
    lenisInstance.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenisInstance?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenisInstance?.destroy();
    };
  });
</script>

<svelte:head>
  <title>MONOLITH — Architecture Studio</title>
  <meta name="description" content="MONOLITH Architecture Studio — Digital Brutalism Portfolio" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
</svelte:head>

<PageTransition />
<Noise />
<Cursor />
<Navigation />
<Signature />

<main class="relative z-10">
  {@render children()}
</main>
