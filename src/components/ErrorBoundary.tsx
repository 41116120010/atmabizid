import { Component, type ReactNode } from "react";
import ErrorLayout from "./ErrorLayout";

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
    if (import.meta.env.DEV) { console.error("[ErrorBoundary]", error, errorInfo); }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorLayout
          badge="Runtime Error"
          title="Terjadi Kesalahan"
          description="Halaman mengalami error yang tidak terduga. Silakan muat ulang halaman atau kembali ke beranda."
          icon={
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8956C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          }
          primaryAction={
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-[13px] bg-[#C8956C] hover:bg-[#B8855C] text-[#0A0A0A] text-[14px] font-inter font-semibold rounded-[10px] transition-all duration-200 hover:shadow-lg hover:shadow-[#C8956C]/20"
            >
              Muat Ulang
            </button>
          }
          secondaryAction={
            <a
              href="/"
              className="px-8 py-[13px] border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-[14px] font-inter font-medium rounded-[10px] transition-all duration-200"
            >
              Kembali ke Beranda
            </a>
          }
        />
      );
    }

    return this.props.children;
  }
}
