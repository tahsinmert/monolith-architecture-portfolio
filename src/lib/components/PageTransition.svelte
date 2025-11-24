<script lang="ts">
  import { onMount } from 'svelte';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import { gsap } from 'gsap';

  let shutter: HTMLElement | null = $state(null);
  let isTransitioning = $state(false);
  let isLoading = $state(false);

  onMount(() => {
    if (typeof window === 'undefined' || !shutter) return;

    // Set initial state
    gsap.set(shutter, {
      scaleY: 0,
      transformOrigin: 'top'
    });
  });

  beforeNavigate(({ to, from, cancel }) => {
    if (!shutter || typeof window === 'undefined') return;

    // Skip transition for same page or initial load
    if (!to || !from) return;
    if (to.url.pathname === from.url.pathname) return;

    isTransitioning = true;
    isLoading = true;

    // Animate shutter down (cover screen)
    gsap.to(shutter, {
      scaleY: 1,
      transformOrigin: 'top',
      duration: 0.6,
      ease: 'expo.inOut'
    });
  });

  afterNavigate(() => {
    if (!shutter || typeof window === 'undefined') return;

    // Small delay for content to render
    setTimeout(() => {
      isLoading = false;
      
      // Animate shutter up (reveal new page)
      gsap.to(shutter, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 0.6,
        ease: 'expo.inOut',
        onComplete: () => {
          isTransitioning = false;
        }
      });
    }, 150);
  });
</script>

<!-- Concrete Shutter -->
<div
  bind:this={shutter}
  class="fixed inset-0 bg-black z-[9999]"
  class:pointer-events-none={!isTransitioning}
  style="transform: scaleY(0); transform-origin: top;"
>
  <!-- Loading Content -->
  {#if isLoading}
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-white text-center">
        <h2 class="text-6xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
          MONOLITH
        </h2>
        <p class="text-xl md:text-2xl font-bold uppercase tracking-tight opacity-70">
          LOADING...
        </p>
      </div>
    </div>
  {/if}
</div>

