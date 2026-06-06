import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for IntersectionObserver-based visibility detection.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 * Once visible, stays visible (one-shot trigger for scroll animations).
 */
export function useInView(threshold = 0.1) {
	const [visible, setVisible] = useState(false);
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setVisible(true);
			},
			{ threshold },
		);
		const current = ref.current;
		if (current) observer.observe(current);
		return () => {
			if (current) observer.unobserve(current);
		};
	}, [threshold]);

	return { ref, visible };
}
