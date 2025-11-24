<script lang="ts">
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let isMenuOpen = $state(false);
  let menuButton: HTMLElement | null = $state(null);
  let menuPanel: HTMLElement | null = $state(null);
  let logo: HTMLElement | null = $state(null);

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    
    if (!menuPanel || typeof window === 'undefined') return;

    if (isMenuOpen) {
      // Open: Slide down from top
      gsap.fromTo(menuPanel, 
        { y: '-100%' },
        { 
          y: '0%', 
          duration: 0.8, 
          ease: 'power3.inOut' 
        }
      );
    } else {
      // Close: Slide up
      gsap.to(menuPanel, {
        y: '-100%',
        duration: 0.8,
        ease: 'power3.inOut'
      });
    }
  };

  const navigateTo = (path: string) => {
    if (!menuPanel || typeof window === 'undefined') {
      goto(path);
      return;
    }

    // Close menu with animation
    gsap.to(menuPanel, {
      y: '-100%',
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        isMenuOpen = false;
        goto(path);
      }
    });
  };

  onMount(() => {
    if (menuPanel && typeof window !== 'undefined') {
      gsap.set(menuPanel, { y: '-100%' });
    }
  });
</script>

<nav class="sticky top-0 z-50 bg-white border-b-4 border-black">
  <div class="flex items-center justify-between px-6 py-4">
    <a
      href="/"
      bind:this={logo}
      class="text-4xl font-bold uppercase tracking-tighter text-black hover:text-gray-600 transition-colors cursor-pointer"
      data-hover
    >
      MONOLITH
    </a>
    
    <button
      bind:this={menuButton}
      on:click={toggleMenu}
      class="border-2 border-black px-6 py-2 uppercase font-bold text-black bg-white hover:bg-black hover:text-white transition-colors"
      data-hover
    >
      {isMenuOpen ? 'CLOSE' : 'MENU'}
    </button>
  </div>

  <!-- Mega Menu Overlay (Garage Door Effect) -->
  <div
    bind:this={menuPanel}
    class="fixed inset-0 w-full h-full bg-black text-white z-40"
  >
    <div class="flex flex-col items-center justify-center h-full gap-12">
      <button
        class="text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:text-gray-400 transition-colors bg-transparent border-none cursor-pointer"
        data-hover
        on:click={() => navigateTo('/projects')}
      >
        PROJECTS
      </button>
      <button
        class="text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:text-gray-400 transition-colors bg-transparent border-none cursor-pointer"
        data-hover
        on:click={() => navigateTo('/studio')}
      >
        STUDIO
      </button>
      <button
        class="text-6xl md:text-8xl font-bold uppercase tracking-tighter hover:text-gray-400 transition-colors bg-transparent border-none cursor-pointer"
        data-hover
        on:click={() => navigateTo('/contact')}
      >
        CONTACT
      </button>
    </div>
  </div>
</nav>
