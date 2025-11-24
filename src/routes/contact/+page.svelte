<script lang="ts">
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';

  let marquee: HTMLElement | null = $state(null);
  let marqueeContent: HTMLElement | null = $state(null);

  onMount(() => {
    if (typeof window === 'undefined' || !marqueeContent || !marquee) return;

    // Clone content for seamless loop
    const clone = marqueeContent.cloneNode(true) as HTMLElement;
    clone.setAttribute('data-clone', 'true');
    marquee.appendChild(clone);

    // Get width of content
    const width = marqueeContent.scrollWidth;
    
    // Animate marquee
    gsap.to(marqueeContent, {
      x: -width,
      duration: 20,
      ease: 'none',
      repeat: -1
    });

    // Animate clone from 0 to -width (seamless loop)
    gsap.set(clone, { x: width });
    gsap.to(clone, {
      x: -width,
      duration: 20,
      ease: 'none',
      repeat: -1
    });
  });
</script>

<div class="min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-24 relative">
  <!-- Main Email Link -->
  <div class="flex-1 flex items-center justify-center">
    <a
      href="mailto:info@monolith.com"
      class="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-center hover:text-gray-600 transition-colors break-words"
      data-hover
    >
      INFO<br />@<br />MONOLITH<br />.<br />COM
    </a>
  </div>

  <!-- Infinite Marquee -->
  <div class="fixed bottom-0 left-0 w-full overflow-hidden bg-black text-white py-4 border-t-4 border-white z-40">
    <div
      bind:this={marquee}
      class="flex whitespace-nowrap"
    >
      <div
        bind:this={marqueeContent}
        class="flex items-center text-4xl md:text-6xl font-bold uppercase tracking-tighter"
      >
        <span class="px-8">AVAILABLE FOR COMMISSIONS</span>
        <span class="px-8">—</span>
        <span class="px-8">WORLDWIDE</span>
        <span class="px-8">—</span>
        <span class="px-8">MONOLITH</span>
        <span class="px-8">—</span>
      </div>
    </div>
  </div>
</div>

