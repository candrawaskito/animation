var animation = bodymovin.loadAnimation({
  container: document.getElementById('anim'), // Required
  path: 'explosion.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true // Optional
  // name: "Hello World", // Name for future reference. Optional.
})