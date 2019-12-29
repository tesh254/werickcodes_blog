<script>
  import Header from "../components/Header.svelte";
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: #0a0a0a;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    color: rgb(66, 255, 135);
  }
</style>

<svelte:head>
  <title>Erick Wachira - Blog</title>
  <meta name="description" content="Simple software development tutorials" />
  <meta name="keywords" content="coder developer fullstack" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://werick.codes" />
  <meta property="og:title" content="Erick Wachira - Blog" />
  <meta
    property="og:description"
    content="Simple software development tutorials" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/duoxba7n1/image/upload/v1550337618/mascot_16.jpg" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://werick.codes" />
  <meta property="twitter:title" content="Erick Wachira - Blog" />
  <meta
    property="twitter:description"
    content="Simple software development tutorials" />
  <meta
    property="twitter:image"
    content="https://res.cloudinary.com/duoxba7n1/image/upload/v1550337618/mascot_16.jpg" />
</svelte:head>

<Header />

<main>
  <slot />
</main>
