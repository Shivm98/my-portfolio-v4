let lockCount = 0;
let savedOverflow = "";
let savedPaddingRight = "";

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  lockCount += 1;
  if (lockCount !== 1) return;
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  savedOverflow = document.body.style.overflow;
  savedPaddingRight = document.body.style.paddingRight;
  document.body.style.overflow = "hidden";
  if (scrollbar > 0) {
    document.body.style.paddingRight = `${scrollbar}px`;
  }
}

export function unlockBodyScroll() {
  if (typeof document === "undefined") return;
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount !== 0) return;
  document.body.style.overflow = savedOverflow;
  document.body.style.paddingRight = savedPaddingRight;
  savedOverflow = "";
  savedPaddingRight = "";
}
