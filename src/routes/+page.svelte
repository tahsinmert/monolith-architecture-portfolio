<script lang="ts">
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { Flip } from 'gsap/Flip';
  import { onMount } from 'svelte';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, Flip);
  }

  // Sample project data
  const projects = [
    {
      id: '1',
      title: 'VOID TOWER',
      year: '2024',
      location: 'ISTANBUL',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop'
    },
    {
      id: '2',
      title: 'CONCRETE HORIZON',
      year: '2023',
      location: 'ANKARA',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop'
    },
    {
      id: '3',
      title: 'BRUTALIST COMPLEX',
      year: '2023',
      location: 'IZMIR',
      image: 'https://images.unsplash.com/photo-1518008687504-5c5ae98a4b38?w=1200&h=800&fit=crop'
    },
    {
      id: '4',
      title: 'MONOLITHIC STRUCTURE',
      year: '2022',
      location: 'BODRUM',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop'
    },
    {
      id: '5',
      title: 'GEOMETRIC VOID',
      year: '2022',
      location: 'ANTALYA',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop'
    },
    {
      id: '6',
      title: 'RAW CONCRETE',
      year: '2021',
      location: 'BURSA',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop'
    },
    {
      id: '7',
      title: 'STRUCTURAL TRUTH',
      year: '2021',
      location: 'ESKISEHIR',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&h=800&fit=crop'
    },
    {
      id: '8',
      title: 'BRUTALIST FORTRESS',
      year: '2020',
      location: 'TRABZON',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop'
    },
    {
      id: '9',
      title: 'CONCRETE CANYON',
      year: '2020',
      location: 'MERSIN',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop'
    },
    {
      id: '10',
      title: 'MASSIVE FORM',
      year: '2019',
      location: 'ADANA',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop'
    }
  ];

  let heroText: HTMLElement | null = $state(null);
  let projectGrid: HTMLElement | null = $state(null);
  let modalOpen = $state(false);
  let selectedProject = $state<any>(null);

  const handleProjectClick = (project: any, event: MouseEvent) => {
    if (typeof window === 'undefined') return;
    
    const clickedCard = event.currentTarget as HTMLElement;
    if (!clickedCard) return;

    const state = Flip.getState(clickedCard);
    selectedProject = project;
    modalOpen = true;

    requestAnimationFrame(() => {
      const modal = document.querySelector('[data-project-modal]');
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
    if (typeof window === 'undefined') return;
    
    const modal = document.querySelector('[data-project-modal]');
    if (!modal || !selectedProject) return;

    const state = Flip.getState(modal);
    modalOpen = false;

    requestAnimationFrame(() => {
      const clickedCard = document.querySelector(`[data-project-id="${selectedProject.id}"]`) as HTMLElement;
      if (clickedCard) {
        Flip.from(state, {
          targets: clickedCard,
          duration: 1.2,
          ease: 'power2.inOut',
          scale: true,
          absolute: true,
          simple: true
        });
      }
    });

    selectedProject = null;
  };

  onMount(() => {
    if (heroText) {
      gsap.from(heroText, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out'
      });
    }

    if (projectGrid) {
      const cards = projectGrid.querySelectorAll('[data-project-card]');
      gsap.from(cards, {
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectGrid,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    }
  });
</script>

<!-- Hero Section -->
<section class="min-h-screen flex items-center justify-center px-8 border-b-2 border-black">
  <h1 
    bind:this={heroText}
    class="text-8xl sm:text-[12rem] md:text-[18rem] font-black uppercase tracking-tighter leading-none text-center"
  >
    WE BUILD<br />VOIDS.
  </h1>
</section>

<!-- Project Gallery -->
<section class="w-full">
  <div 
    bind:this={projectGrid}
    class="grid grid-cols-12 gap-0 border-t-2 border-black"
    data-project-grid
  >
    <!-- Item 1: Big start -->
    <div 
      data-project-card
      data-project-id={projects[0].id}
      role="button"
      tabindex="0"
      class="col-span-8 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[0], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[0], e as any)}
      data-hover
    >
      <img 
        src={projects[0].image} 
        alt={projects[0].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-6xl md:text-8xl font-black uppercase text-white text-stroke-black">
          {projects[0].title}
        </h3>
      </div>
    </div>

    <!-- Item 2: Fills the rest of row 1 -->
    <div 
      data-project-card
      data-project-id={projects[1].id}
      role="button"
      tabindex="0"
      class="col-start-9 col-span-4 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[1], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[1], e as any)}
      data-hover
    >
      <img 
        src={projects[1].image} 
        alt={projects[1].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-4xl md:text-6xl font-black uppercase text-white text-stroke-black">
          {projects[1].title}
        </h3>
      </div>
    </div>

    <!-- Item 3: Tall vertical block -->
    <div 
      data-project-card
      data-project-id={projects[2].id}
      role="button"
      tabindex="0"
      class="col-span-5 row-span-2 border-2 border-black aspect-[5/8] relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[2], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[2], e as any)}
      data-hover
    >
      <img 
        src={projects[2].image} 
        alt={projects[2].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-5xl md:text-7xl font-black uppercase text-white text-stroke-black">
          {projects[2].title}
        </h3>
      </div>
    </div>

    <!-- Item 4: Wide horizontal block next to it -->
    <div 
      data-project-card
      data-project-id={projects[3].id}
      role="button"
      tabindex="0"
      class="col-start-6 col-span-7 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[3], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[3], e as any)}
      data-hover
    >
      <img 
        src={projects[3].image} 
        alt={projects[3].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-5xl md:text-7xl font-black uppercase text-white text-stroke-black">
          {projects[3].title}
        </h3>
      </div>
    </div>

    <!-- Item 5: Massive wide footer block -->
    <div 
      data-project-card
      data-project-id={projects[4].id}
      role="button"
      tabindex="0"
      class="col-start-3 col-span-10 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[4], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[4], e as any)}
      data-hover
    >
      <img 
        src={projects[4].image} 
        alt={projects[4].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-6xl md:text-8xl font-black uppercase text-white text-stroke-black">
          {projects[4].title}
        </h3>
      </div>
    </div>

    <!-- Item 6: Medium block -->
    <div 
      data-project-card
      data-project-id={projects[5].id}
      role="button"
      tabindex="0"
      class="col-span-6 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[5], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[5], e as any)}
      data-hover
    >
      <img 
        src={projects[5].image} 
        alt={projects[5].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-4xl md:text-6xl font-black uppercase text-white text-stroke-black">
          {projects[5].title}
        </h3>
      </div>
    </div>

    <!-- Item 7: Medium block -->
    <div 
      data-project-card
      data-project-id={projects[6].id}
      role="button"
      tabindex="0"
      class="col-span-6 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[6], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[6], e as any)}
      data-hover
    >
      <img 
        src={projects[6].image} 
        alt={projects[6].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-4xl md:text-6xl font-black uppercase text-white text-stroke-black">
          {projects[6].title}
        </h3>
      </div>
    </div>

    <!-- Item 8: Wide block -->
    <div 
      data-project-card
      data-project-id={projects[7].id}
      role="button"
      tabindex="0"
      class="col-span-8 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[7], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[7], e as any)}
      data-hover
    >
      <img 
        src={projects[7].image} 
        alt={projects[7].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-5xl md:text-7xl font-black uppercase text-white text-stroke-black">
          {projects[7].title}
        </h3>
      </div>
    </div>

    <!-- Item 9: Small block -->
    <div 
      data-project-card
      data-project-id={projects[8].id}
      role="button"
      tabindex="0"
      class="col-span-4 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[8], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[8], e as any)}
      data-hover
    >
      <img 
        src={projects[8].image} 
        alt={projects[8].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-3xl md:text-5xl font-black uppercase text-white text-stroke-black">
          {projects[8].title}
        </h3>
      </div>
    </div>

    <!-- Item 10: Final wide block -->
    <div 
      data-project-card
      data-project-id={projects[9].id}
      role="button"
      tabindex="0"
      class="col-span-12 border-2 border-black aspect-video relative group overflow-hidden cursor-pointer"
      onclick={(e) => handleProjectClick(projects[9], e)}
      onkeydown={(e) => e.key === 'Enter' && handleProjectClick(projects[9], e as any)}
      data-hover
    >
      <img 
        src={projects[9].image} 
        alt={projects[9].title}
        class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
      />
      <div class="absolute bottom-6 left-6 z-10">
        <h3 class="text-6xl md:text-8xl font-black uppercase text-white text-stroke-black">
          {projects[9].title}
        </h3>
      </div>
    </div>
  </div>
</section>

<!-- Modal for Quick View -->
{#if modalOpen && selectedProject}
  <div
    data-project-modal
    role="button"
    tabindex="0"
    class="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden cursor-pointer"
    onclick={closeModal}
    onkeydown={(e) => e.key === 'Enter' && closeModal()}
  >
    <div class="relative w-full h-full flex items-center justify-center">
      <img 
        src={selectedProject.image} 
        alt={selectedProject.title}
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
        <h2 class="text-6xl font-black uppercase mb-4">{selectedProject.title}</h2>
        <p class="text-xl">{selectedProject.year} • {selectedProject.location}</p>
      </div>
    </div>
  </div>
{/if}
