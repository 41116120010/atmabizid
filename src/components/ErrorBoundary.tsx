import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[ErrorBoundary]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#C8956C]/10 border border-[#C8956C]/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8956C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-[7px] rounded-[8px] border border-[#C8956C]/20 bg-[#C8956C]/5 mb-6">
              <div className="w-[6px] h-[6px] rounded-full bg-[#C8956C] animate-pulse" />
              <span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.08em] uppercase">
                Runtime Error
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white font-crimson-text text-[32px] md:text-[42px] font-bold leading-[1.1] mb-4">
              Terjadi Kesalahan
            </h1>

            {/* Description */}
            <p className="text-[#A3A3A3] font-inter text-[15px] leading-[1.7] mb-10 max-w-md mx-auto">
              Halaman mengalami error yang tidak terduga. Silakan muat ulang halaman atau kembali ke beranda.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-[13px] bg-[#C8956C] hover:bg-[#B8855C] text-[#0A0A0A] text-[14px] font-inter font-semibold rounded-[10px] transition-all duration-200 hover:shadow-lg hover:shadow-[#C8956C]/20"
              >
                Muat Ulang
              </button>
              <a
                href="/"
                className="px-8 py-[13px] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-[14px] font-inter font-medium rounded-[10px] transition-all duration-200"
              >
                Kembali ke Beranda
              </a>
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

    return this.props.children;
  }
}
