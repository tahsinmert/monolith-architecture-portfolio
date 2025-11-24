<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Sample project data (in real app, fetch from API)
  const projects: Record<string, any> = {
    '1': {
      title: 'VOID TOWER',
      year: '2024',
      location: 'ISTANBUL',
      area: '15,000 M²',
      images: [
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1600&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=1000&fit=crop'
      ],
      description: 'A monolithic structure that challenges the conventional understanding of space and void.'
    },
    '2': {
      title: 'CONCRETE HORIZON',
      year: '2023',
      location: 'ANKARA',
      area: '8,500 M²',
      images: [
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=1000&fit=crop',
        'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1600&h=1000&fit=crop'
      ],
      description: 'Brutalist architecture meets the horizon in this concrete masterpiece.'
    }
  };

  let projectId = $derived($page.params.id);
  let project = $derived(projects[projectId] || projects['1']);

  let infoPanel: HTMLElement | null = $state(null);
  let gallery: HTMLElement | null = $state(null);

  onMount(() => {
    if (gallery) {
      const images = gallery.querySelectorAll('img');
      gsap.from(images, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gallery,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }
  });
</script>

<div class="min-h-screen grid grid-cols-12">
  <!-- Sticky Info Panel -->
  <aside 
    bind:this={infoPanel}
    class="col-span-3 border-r-2 border-black sticky top-24 h-[calc(100vh-6rem)] p-8 bg-white"
  >
    <div class="flex flex-col gap-8">
      <div class="grid-border pb-8">
        <h1 class="text-6xl font-black uppercase tracking-tighter mb-6">
          {project.title}
        </h1>
        <div class="space-y-4 text-lg">
          <div>
            <span class="font-bold uppercase">YEAR</span>
            <p>{project.year}</p>
          </div>
          <div>
            <span class="font-bold uppercase">LOCATION</span>
            <p>{project.location}</p>
          </div>
          <div>
            <span class="font-bold uppercase">AREA</span>
            <p>{project.area}</p>
          </div>
        </div>
      </div>
      <div class="pt-8">
        <p class="text-lg leading-relaxed">{project.description}</p>
      </div>
    </div>
  </aside>

  <!-- Scrolling Gallery -->
  <div 
    bind:this={gallery}
    class="col-span-9"
  >
    {#each project.images as image, index}
      <div class="w-full border-b-2 border-black">
        <img 
          src={image} 
          alt="{project.title} - Image {index + 1}"
          class="w-full h-auto object-cover"
        />
      </div>
    {/each}
  </div>
</div>

