import { useCallback } from "react";

/**
 * Utility function to scroll to a section by CSS selector.
 * Consistent behavior across all components (Navbar, Footer, HeroSection).
 */
export function scrollToSection(selector: string) {
	const el = document.querySelector(selector);
	if (el) {
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	}
}

/**
 * Custom hook that returns a memoized scrollTo function.
 * Optionally accepts a callback to run after scrolling (e.g., close mobile menu).
 */
export function useScrollTo(onAfterScroll?: () => void) {
	return useCallback(
		(selector: string) => {
			scrollToSection(selector);
			onAfterScroll?.();
		},
		[onAfterScroll],
	);
}
