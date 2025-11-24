<script lang="ts">
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';

  const projects = [
    {
      id: '1',
      year: '2024',
      name: 'VOID TOWER',
      type: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop'
    },
    {
      id: '2',
      year: '2023',
      name: 'CONCRETE HORIZON',
      type: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop'
    },
    {
      id: '3',
      year: '2023',
      name: 'BRUTALIST COMPLEX',
      type: 'MIXED-USE',
      image: 'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1200&h=800&fit=crop'
    },
    {
      id: '4',
      year: '2022',
      name: 'MONOLITHIC STRUCTURE',
      type: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    },
    {
      id: '5',
      year: '2022',
      name: 'GEOMETRIC VOID',
      type: 'CULTURAL',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop'
    },
    {
      id: '6',
      year: '2021',
      name: 'RAW CONCRETE',
      type: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop'
    },
    {
      id: '7',
      year: '2021',
      name: 'STRUCTURAL TRUTH',
      type: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop'
    }
  ];

  let floatingImage: HTMLElement | null = $state(null);
  let floatingImageContainer: HTMLElement | null = $state(null);
  let currentImage = $state<string | null>(null);
  let xTo: gsap.QuickToFunc | null = $state(null);
  let yTo: gsap.QuickToFunc | null = $state(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (xTo && yTo && floatingImageContainer) {
      // Adjust for center of container
      xTo(e.clientX - 192); // half of w-96 (384px / 2)
      yTo(e.clientY - 128); // half of h-64 (256px / 2)
    }
  };

  const handleProjectHover = (project: typeof projects[0]) => {
    if (!floatingImageContainer || !floatingImage) return;
    
    currentImage = project.image;
    gsap.to(floatingImageContainer, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleProjectLeave = () => {
    if (!floatingImageContainer) return;
    
    gsap.to(floatingImageContainer, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        currentImage = null;
      }
    });
  };

  onMount(() => {
    if (typeof window === 'undefined') return;

    window.addEventListener('mousemove', handleMouseMove);

    if (floatingImageContainer) {
      xTo = gsap.quickTo(floatingImageContainer, 'x', { 
        duration: 0.5, 
        ease: 'power3.out'
      });
      yTo = gsap.quickTo(floatingImageContainer, 'y', { 
        duration: 0.5, 
        ease: 'power3.out'
      });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
</script>

<div class="pt-32 px-8 pb-24">
  <div class="max-w-7xl mx-auto">
    <!-- Header -->
    <div class="border-b-4 border-black pb-8 mb-12">
      <h1 class="text-8xl md:text-9xl font-bold uppercase tracking-tighter">PROJECTS</h1>
    </div>

    <!-- Projects List -->
    <div class="space-y-0">
      {#each projects as project}
        <a
          href="/projects/{project.id}"
          class="block border-b-2 border-black hover:bg-gray-100 transition-colors"
          onmouseenter={() => handleProjectHover(project)}
          onmouseleave={handleProjectLeave}
          data-hover
        >
          <div class="grid grid-cols-12 gap-4 py-8 items-center">
            <div class="col-span-1 text-2xl font-bold uppercase">
              {project.year}
            </div>
            <div class="col-span-8">
              <h2 class="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
                {project.name}
              </h2>
            </div>
            <div class="col-span-3 text-xl font-bold uppercase text-right">
              {project.type}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<!-- Floating Image Reveal -->
<div
  bind:this={floatingImageContainer}
  class="fixed pointer-events-none z-50 w-96 h-64 opacity-0"
  style="will-change: transform;"
>
  {#if currentImage}
    <img
      bind:this={floatingImage}
      src={currentImage}
      alt="Project preview"
      class="w-full h-full object-cover border-4 border-black"
    />
  {/if}
</div>

