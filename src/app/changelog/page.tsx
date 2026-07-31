import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DeveloperTerminalModal } from "@/components/ui/DeveloperTerminalModal";
import { Footer } from "@/components/Footer";
import { History, GitCommit, Award, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Changelog & Activity Log · Ibrahim Nasser",
  description:
    "Dynamic timeline of recent engineering commits, published articles, store updates, and GDG community mentorship.",
};

export default function ChangelogPage() {
  const activityLogs = [
    {
      date: "March 2026",
      type: "Store Release",
      title: "Hungry E-Commerce App Update v2.1.0",
      desc: "Optimized BLoC state rebuilding, integrated new payment gateway webhooks, and updated custom shimmer loading skeletons.",
      icon: GitCommit,
      tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      date: "February 2026",
      type: "GDG Mentorship",
      title: "Flutter Mentorship & Workshop @ Suez Canal University",
      desc: "Mentored 40+ computer science students on Clean Architecture principles, Git branching workflows, and State Management using BLoC.",
      icon: Award,
      tagColor: "bg-[#E58A2B]/20 text-[#E58A2B] border-[#E58A2B]/30",
    },
    {
      date: "January 2026",
      type: "Publication",
      title: "Article Published: Demystifying Clean Architecture in Flutter",
      desc: "Deep dive into decoupling domain logic from UI widgets, handling error exceptions gracefully with Either<Failure, Success>.",
      icon: BookOpen,
      tagColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      date: "December 2025",
      type: "Open Source",
      title: "Shipped Donors Management System (Flutter Desktop)",
      desc: "Released desktop administrative dashboard built with MVVM, get_it dependency injection, and responsive desktop grid views.",
      icon: GitCommit,
      tagColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  return (
    <AuroraBackground>
      <CustomCursor />
      <Navbar />
      <main className="py-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E58A2B]/10 border border-[#E58A2B]/20 text-[#E58A2B] text-xs font-mono font-semibold mb-4">
            <History className="w-3.5 h-3.5" />
            <span>Engineering Changelog</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Activity & Updates Log
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Continuous milestones, open-source contributions, store releases, and technical community talks.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 space-y-12 ml-4">
          {activityLogs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 p-2 rounded-full bg-[#15171E] border border-[#E58A2B] text-[#E58A2B] shadow-lg group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-[#15171E] border border-white/10 space-y-3 shadow-2xl group-hover:border-[#E58A2B]/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className={`px-3 py-1 rounded-full border text-xs font-mono font-bold ${item.tagColor}`}>
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-gray-400 font-medium">{item.date}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-[#E58A2B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <DeveloperTerminalModal />
      <Footer />
    </AuroraBackground>
  );
}
