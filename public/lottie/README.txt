Place your Lottie JSON here so it loads from the site root:

  public/lottie/background.json

The component that uses it lives at:
  src/components/background/LottieBackground.tsx

It is rendered from App.tsx behind the page (z-index 1). If this file is missing,
you still get an animated CSS gradient mesh background; adding background.json
layers the Lottie animation on top with mix-blend-screen.
