<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  let cursor = $state<HTMLElement | null>(null);
  let isHovering = $state(false);
  let x = $state(0);
  let y = $state(0);

  const updateCursor = (e: MouseEvent) => {
    x = e.clientX;
    y = e.clientY;
  };

  const handleMouseEnter = () => {
    isHovering = true;
  };

  const handleMouseLeave = () => {
    isHovering = false;
  };

  onMount(() => {
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, img, [data-hover]');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    addHoverListeners();
    window.addEventListener('mousemove', updateCursor);

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      observer.disconnect();
    };
  });
</script>

<div 
  bind:this={cursor}
  class="cursor"
  class:hover={isHovering}
  style="left: {x}px; top: {y}px;"
></div>

