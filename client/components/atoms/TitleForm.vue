<template>
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">{{ title }}</h2>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>

  
<style>
  .text-2xl {
    font-size: 1.5rem; /* 24px */
    padding: 35px;
  }
  
  @media (min-width: 768px) {
    .text-2xl {
      font-size: 2rem; /* 32px */
    }
  }
  
  @media (min-width: 1024px) {
    .text-3xl {
      font-size: 2.25rem; /* 36px */
    }
  }
  
  @media (min-width: 1280px) {
    .text-4xl {
      font-size: 3rem; /* 48px */
    }
  }
  </style>