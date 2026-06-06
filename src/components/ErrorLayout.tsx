import type { ReactNode } from "react";

interface ErrorLayoutProps {
	statusCode?: number;
	title: string;
	description: string;
	badge: string;
	icon: ReactNode;
	primaryAction: ReactNode;
	secondaryAction?: ReactNode;
}

/**
 * Shared error page layout used by both React Error Boundary
 * and React Router ErrorBoundary to eliminate UI duplication.
 */
export default function ErrorLayout({
	statusCode,
	title,
	description,
	badge,
	icon,
	primaryAction,
	secondaryAction,
}: ErrorLayoutProps) {
	return (
		<div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
			{/* Background effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
						backgroundSize: '60px 60px',
					}}
				/>
				<div className="absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-[#C8956C]/5 blur-[120px]" />
				<div className="absolute bottom-[-30%] left-[-15%] w-[400px] h-[400px] rounded-full bg-[#C8956C]/3 blur-[100px]" />
			</div>

			<div className="relative z-10 text-center max-w-lg">
				{/* Logo */}
				<a href="/" className="inline-flex items-center gap-3 mb-12 group">
					<img
						src="/image/atma-final.jpeg"
						alt="ATMA Logo"
						className="w-9 h-9 object-contain"
						width={36}
						height={36}
					/>
					<span className="text-white font-inter font-semibold text-[18px] tracking-[0.02em] group-hover:text-[#C8956C] transition-colors duration-200">
						ATMA
					</span>
				</a>

				{/* Error code watermark (only for route errors with status code) */}
				{statusCode && (
					<div className="mb-6">
						<span className="text-[120px] md:text-[160px] font-crimson-text font-bold leading-none text-white/[0.04] select-none">
							{statusCode}
						</span>
					</div>
				)}

				{/* Icon */}
				<div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#C8956C]/10 border border-[#C8956C]/20 flex items-center justify-center">
					{icon}
				</div>

				{/* Status badge */}
				<div className="inline-flex items-center gap-2 px-4 py-[7px] rounded-[8px] border border-[#C8956C]/20 bg-[#C8956C]/5 mb-6">
					<div className="w-[6px] h-[6px] rounded-full bg-[#C8956C] animate-pulse" />
					<span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.08em] uppercase">
						{badge}
					</span>
				</div>

				{/* Title */}
				<h1 className="text-white font-crimson-text text-[32px] md:text-[42px] font-bold leading-[1.1] mb-4">
					{title}
				</h1>

				{/* Description */}
				<p className="text-[#A3A3A3] font-inter text-[15px] leading-[1.7] mb-10 max-w-md mx-auto">
					{description}
				</p>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					{primaryAction}
					{secondaryAction}
				</div>

				{/* Footer note */}
				<div className="mt-16 pt-8 border-t border-white/5">
					<p className="text-[#9A9A9A] text-[12px] font-inter">
						Jika masalah berlanjut, hubungi kami di{' '}
						<a href="mailto:help@atma.biz.id" className="text-[#C8956C] hover:underline">
							help@atma.biz.id
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
