import { useEffect, useRef, useState } from "react";
import { Github, Mail } from "lucide-react";
import { teamMembers } from "../data/team";
import OptimizedImage from "./OptimizedImage";

export default function TeamSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#060606]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-[1000px] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div
          className="text-center max-w-[500px] mx-auto mb-16 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-[#C8956C] text-[12px] font-inter font-medium tracking-[0.12em] uppercase">
            Tim Pengembang
          </span>
          <h2 className="mt-4 text-white font-crimson-text text-[36px] md:text-[48px] font-bold leading-[1.1]">
            Meet Team
            <span className="text-[#C8956C]"> ATMA</span>
          </h2>
          <p className="mt-5 text-[#A3A3A3] text-[15px] font-inter leading-[1.7]">
            4 mahasiswa dengan keahlian berbeda, bersatu untuk membangun solusi
            IoT yang inovatif.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="group relative p-6 rounded-[14px] border border-white/5 bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(25px)",
                transitionDelay: `${200 + i * 100}ms`,
                transitionDuration: "700ms",
              }}
            >
              <div className="w-20 h-20 rounded-[12px] overflow-hidden mb-5 border border-white/5">
                <OptimizedImage
                  filename={member.imgFilename}
                  alt={`Foto ${member.name}, ${member.role} di Tim ATMA`}
                  className="w-full h-full object-cover"
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>

              <h3 className="text-white font-inter font-semibold text-[15px] mb-1">
                {member.name}
              </h3>
              <span
                className="text-[12px] font-inter font-medium"
                style={{ color: member.color }}
              >
                {member.role}
              </span>
              <p className="mt-3 text-[#9A9A9A] font-inter text-[13px] leading-[1.6]">
                {member.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-[6px]">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-[10px] py-[4px] rounded-[5px] text-[10px] font-inter font-medium text-[#888] border border-white/5 bg-white/[0.02]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#444] hover:text-[#999] transition-colors"
                  aria-label={`Github profil ${member.name}`}
                >
                  <Github size={15} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-[#444] hover:text-[#999] transition-colors"
                  aria-label={`Email ke ${member.name}`}
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
