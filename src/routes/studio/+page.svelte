<script lang="ts">
  const team = [
    { name: 'ALEX MONOLITH', role: 'FOUNDER & PRINCIPAL' },
    { name: 'SARA CONCRETE', role: 'SENIOR ARCHITECT' },
    { name: 'MAX VOID', role: 'DESIGN DIRECTOR' },
    { name: 'LENA BRUTAL', role: 'PROJECT MANAGER' },
    { name: 'NIK RAW', role: 'STRUCTURAL ENGINEER' }
  ];
</script>

<div class="pt-32 min-h-screen">
  <div class="grid grid-cols-2 min-h-screen">
    <!-- Left Column - Sticky -->
    <div class="sticky top-0 h-screen flex items-center justify-center border-r-4 border-black bg-white">
      <h1 class="text-7xl md:text-9xl font-bold uppercase tracking-tighter text-center px-8">
        WE REJECT<br />ORNAMENT.
      </h1>
    </div>

    <!-- Right Column - Scrollable -->
    <div class="px-12 py-24 space-y-16">
      <!-- Philosophy Section -->
      <div class="space-y-8">
        <p class="text-2xl md:text-3xl font-bold leading-relaxed uppercase">
          MONOLITH REJECTS THE DECORATIVE. WE BUILD STRUCTURES THAT SPEAK THROUGH FORM ALONE. EVERY LINE SERVES A PURPOSE. EVERY SURFACE BEARS THE TRUTH OF ITS MATERIAL.
        </p>

        <p class="text-2xl md:text-3xl font-bold leading-relaxed uppercase">
          CONCRETE IS NOT HIDDEN. STEEL IS NOT PAINTED. GLASS REVEALS THE INTERIOR. WE DO NOT APOLOGIZE FOR THE RAW, THE HEAVY, THE MASSIVE.
        </p>

        <p class="text-2xl md:text-3xl font-bold leading-relaxed uppercase">
          OUR ARCHITECTURE IS A STATEMENT AGAINST THE TEMPORARY, THE TRENDY, THE SUPERFICIAL. WE BUILD FOR CENTURIES, NOT SEASONS.
        </p>

        <p class="text-2xl md:text-3xl font-bold leading-relaxed uppercase">
          THE VOID IS AS IMPORTANT AS THE SOLID. SPACE IS NOT EMPTY—IT IS THE BREATH BETWEEN STRUCTURES. WE CRAFT ABSENCE WITH THE SAME INTENTION AS PRESENCE.
        </p>
      </div>

      <!-- Team Section -->
      <div class="border-t-4 border-black pt-12 mt-16">
        <h2 class="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-12">TEAM</h2>
        
        <div class="space-y-0">
          {#each team as member}
            <div class="grid grid-cols-2 gap-8 py-6 border-b-2 border-black">
              <div class="text-2xl md:text-3xl font-bold uppercase">
                {member.name}
              </div>
              <div class="text-xl md:text-2xl font-bold uppercase text-right">
                {member.role}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Manifesto Footer -->
      <div class="mt-24 pt-12 border-t-4 border-black">
        <p class="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
          FORM FOLLOWS<br />FUNCTION.<br />FUNCTION FOLLOWS<br />TRUTH.
        </p>
      </div>
    </div>
  </div>
</div>

