<script lang="ts">
  import { gsap } from 'gsap';
  import { Flip } from 'gsap/Flip';
  import { onMount } from 'svelte';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(Flip);
  }

  interface Project {
    id: string;
    title: string;
    year: string;
    location: string;
    image: string;
    colSpan: number;
    colStart: number;
  }

  let { project }: { project: Project } = $props();
  let cardElement: HTMLElement | null = $state(null);
  let modalOpen = $state(false);

  const handleClick = () => {
    if (!cardElement || typeof window === 'undefined') return;

    const state = Flip.getState(cardElement);
    modalOpen = true;
    
    requestAnimationFrame(() => {
      const modal = document.querySelector(`[data-project-modal="${project.id}"]`);
      if (modal) {
        Flip.from(state, {
          targets: modal,
          duration: 1.2,
          ease: 'power2.inOut',
          scale: true,
          absolute: true,
          simple: true
        });
      }
    });
  };

  const closeModal = () => {
    if (!cardElement || typeof window === 'undefined') return;
    
    const modal = document.querySelector(`[data-project-modal="${project.id}"]`);
    if (!modal) return;

    const state = Flip.getState(modal);
    modalOpen = false;

    requestAnimationFrame(() => {
      Flip.from(state, {
        targets: cardElement,
        duration: 1.2,
        ease: 'power2.inOut',
        scale: true,
        absolute: true,
        simple: true
      });
    });
  };
</script>

<div
  bind:this={cardElement}
  onclick={handleClick}
  class="relative overflow-hidden cursor-pointer group"
  style="grid-column: {project.colStart} / span {project.colSpan};"
  data-hover
>
  <div class="grid-border aspect-[4/3] bg-gray-200">
    <img 
      src={project.image} 
      alt={project.title}
      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div class="absolute bottom-0 left-0 right-0 bg-black text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 class="text-2xl font-black uppercase">{project.title}</h3>
      <p class="text-sm mt-1">{project.year} • {project.location}</p>
    </div>
  </div>
</div>

<!-- Modal for Quick View -->
{#if modalOpen}
  <div
    data-project-modal={project.id}
    class="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    onclick={closeModal}
  >
    <div class="relative w-full h-full flex items-center justify-center">
      <img 
        src={project.image} 
        alt={project.title}
        class="w-full h-full object-contain"
      />
      <button
        onclick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        class="absolute top-8 right-8 text-white text-4xl font-black uppercase border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors z-10"
        data-hover
      >
        CLOSE
      </button>
      <div class="absolute bottom-8 left-8 text-white z-10">
        <h2 class="text-6xl font-black uppercase mb-4">{project.title}</h2>
        <p class="text-xl">{project.year} • {project.location}</p>
      </div>
    </div>
  </div>
{/if}

