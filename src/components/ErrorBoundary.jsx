import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[ErrorBoundary]", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#C8956C]/10 flex items-center justify-center">
              <span className="text-[#C8956C] text-2xl">⚠</span>
            </div>
            <h1 className="text-white font-inter font-semibold text-xl mb-3">
              Terjadi Kesalahan
            </h1>
            <p className="text-[#A3A3A3] font-inter text-sm leading-relaxed mb-6">
              Halaman mengalami error yang tidak terduga. Silakan muat ulang halaman.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#C8956C] hover:bg-[#B8855C] text-[#0A0A0A] text-sm font-inter font-semibold rounded-lg transition-colors"
            >
              Muat Ulang
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
