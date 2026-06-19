// Mutable scroll state — updated by Lenis, read by R3F useFrame (no re-renders)
export const scrollState = {
  progress: 0,   // 0–1 page progress
  velocity: 0,   // pixels/s
};

// Mutable mouse state — updated globally, read by R3F
export const mouseState = {
  x: 0,   // -1 to +1
  y: 0,   // -1 to +1
  rawX: 0,
  rawY: 0,
};
