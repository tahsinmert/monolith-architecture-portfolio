<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let { data } = $props();
  $: project = data.project;

  let leftPanel: HTMLElement | null = $state(null);
  let gallery: HTMLElement | null = $state(null);
  let imageContainers: HTMLElement[] = $state([]);

  const goBack = () => {
    goto('/projects');
  };

  const goToNext = () => {
    if (project.nextProjectId) {
      goto(`/projects/${project.nextProjectId}`);
    }
  };

  onMount(() => {
    if (typeof window === 'undefined' || !gallery) return;

    // Parallax effect for images
    const imageContainers = gallery.querySelectorAll('[data-parallax-image]');
    
    imageContainers.forEach((container) => {
      const imageElement = container.querySelector('img');
      if (!imageElement) return;

      ScrollTrigger.create({
        trigger: container as HTMLElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          // Parallax: image moves slower than scroll (negative value for upward movement)
          const yOffset = -progress * 20; // Adjust intensity (percentage of image height)
          gsap.set(imageElement, {
            y: `${yOffset}%`,
            ease: 'none'
          });
        }
      });
    });
  });
</script>

<div class="min-h-screen grid grid-cols-12">
  <!-- Left Column - Sticky Info Panel -->
  <aside 
    bind:this={leftPanel}
    class="col-span-4 sticky top-0 h-screen border-r-2 border-black bg-white overflow-y-auto"
  >
    <div class="p-8 flex flex-col h-full">
      <!-- Back Button -->
      <a
        href="/projects"
        on:click={(e) => {
          e.preventDefault();
          goBack();
        }}
        class="text-xl font-bold uppercase mb-12 hover:text-gray-600 transition-colors inline-block"
        data-hover
      >
        ← INDEX
      </a>

      <!-- Project Title -->
      <h1 class="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-12 break-words">
        {project.title}
      </h1>

      <!-- Details Table -->
      <div class="space-y-6 border-t-2 border-black pt-8">
        <div class="grid grid-cols-2 gap-4">
          <div class="text-sm font-bold uppercase">YEAR:</div>
          <div class="text-lg font-bold">{project.year}</div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-sm font-bold uppercase">LOC:</div>
          <div class="text-lg font-bold">{project.location}</div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-sm font-bold uppercase">AREA:</div>
          <div class="text-lg font-bold">{project.area}</div>
        </div>
      </div>
    </div>
  </aside>

  <!-- Right Column - Scrollable Gallery -->
  <div 
    bind:this={gallery}
    class="col-span-8"
  >
    <div class="space-y-0">
      {#each project.images as image, index}
        <div 
          data-parallax-image
          class="relative overflow-hidden border-b-2 border-black"
          style="height: 100vh;"
        >
          <img 
            src={image} 
            alt="{project.title} - Image {index + 1}"
            class="w-full h-[120%] object-cover"
            style="transform: translateY(0);"
          />
        </div>
      {/each}
    </div>

    <!-- Next Project Footer -->
    {#if project.nextProjectId}
      <div class="border-t-4 border-black">
        <a
          href="/projects/{project.nextProjectId}"
          on:click={(e) => {
            e.preventDefault();
            goToNext();
          }}
          class="block w-full py-16 px-8 bg-white hover:bg-black hover:text-white transition-all duration-300 group"
          data-hover
        >
          <div class="flex items-center justify-between">
            <span class="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              NEXT PROJECT
            </span>
            <span class="text-5xl md:text-7xl font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </div>
          <div class="mt-4 text-2xl md:text-3xl font-bold uppercase">
            {project.nextProjectName}
          </div>
        </a>
      </div>
    {/if}
  </div>
</div>

