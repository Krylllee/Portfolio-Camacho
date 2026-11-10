
"use client";

import { useEffect, useState } from "react";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
};


const skills = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GitHub",
];
type GitHubProfile = {
  public_repos: number;
  followers: number;
  following: number;
};
export default function Home() {
  const [dark, setDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
const [loading, setLoading] = useState(true);
const [githubProfile, setGithubProfile] =
  useState<GitHubProfile | null>(null);

const [totalStars, setTotalStars] = useState(0);

useEffect(() => {
  async function fetchRepositories() {
    try {
      const response = await fetch(
        "https://api.github.com/users/Krylllee/repos?sort=updated&per_page=100"
      );

      if (!response.ok) {
        throw new Error("Could not fetch repositories");
      }

      const data: GitHubRepo[] = await response.json();

      setProjects(
        data.filter((repo) => !repo.fork).slice(0, 4)
      );
      const profileResponse = await fetch(
  "https://api.github.com/users/Krylllee"
);

if (profileResponse.ok) {
  const profile: GitHubProfile = await profileResponse.json();
  setGithubProfile(profile);
}

setTotalStars(
  data
    .filter((repo) => !repo.fork)
    .reduce((total, repo) => total + repo.stargazers_count, 0)
);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  fetchRepositories();
}, []);

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-[#09090f] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      
<nav
  className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
    dark
      ? "border-white/10 bg-[#09090f]/80"
      : "border-gray-200 bg-white/80"
  }`}
>
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
    <a href="#" className="text-lg font-bold tracking-tight">
      AK<span className="text-violet-500">.</span>
    </a>

    <div className="hidden items-center gap-8 text-sm md:flex">
      {[
        ["About", "#about"],
        ["Projects", "#projects"],
        ["Tech Stack", "#skills"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          className="opacity-70 transition hover:text-violet-400 hover:opacity-100"
        >
          {label}
        </a>
      ))}
    </div>

    <div className="flex items-center gap-3">
      <button
        onClick={() => setDark(!dark)}
        className={`rounded-full border px-4 py-2 text-sm transition ${
          dark
            ? "border-white/20 hover:bg-white/10"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        {dark ? "☀ Light" : "☾ Dark"}
      </button>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`rounded-lg border px-3 py-2 text-lg md:hidden ${
          dark ? "border-white/20" : "border-gray-300"
        }`}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>

  {mobileMenuOpen && (
    <div className={`border-t px-6 py-5 md:hidden ${
      dark ? "border-white/10" : "border-gray-200"
    }`}>
      {[
        ["About", "#about"],
        ["Projects", "#projects"],
        ["Tech Stack", "#skills"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          onClick={() => setMobileMenuOpen(false)}
          className="block py-3 text-sm opacity-70 transition hover:text-violet-400 hover:opacity-100"
        >
          {label}
        </a>
      ))}
    </div>
  )}
</nav>


     

<section className="relative mx-auto grid min-h-[650px] max-w-6xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
  <div className={`absolute left-1/4 top-1/4 -z-0 h-72 w-72 rounded-full blur-[120px] ${
    dark ? "bg-violet-600/20" : "bg-violet-400/20"
  }`} />

  <div className="relative z-10">
    <div className="mb-6">
      <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
        dark
          ? "border-green-500/20 bg-green-500/10 text-green-400"
          : "border-green-700/20 bg-green-700/10 text-green-800"
      }`}>
        <span className={`h-2 w-2 rounded-full ${
          dark ? "bg-green-400" : "bg-green-700"
        }`}></span>
        Open to Opportunities
      </div>

      <p className={`font-mono text-sm ${
        dark ? "text-violet-400" : "text-violet-700"
      }`}>
        HELLO, WORLD. I'M
      </p>
    </div>

    <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
      Andreas Kylle
      <br />
      <span className={`bg-clip-text text-transparent ${
        dark
          ? "bg-gradient-to-r from-violet-400 to-blue-400"
          : "bg-gradient-to-r from-violet-700 to-blue-700"
      }`}>
        Camacho.
      </span>
    </h1>

    <h2 className="mt-8 text-xl font-medium sm:text-2xl">
      IT & Computer Science Enthusiast
    </h2>

    <p className="mt-5 max-w-xl text-base leading-8 opacity-70">
      I'm interested in computers and technology, with an academic background in Information Technology and Computer Science. I enjoy exploring different areas of computing, building projects and developing my technical skills.
    </p>

    <div className="mt-9 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
      >
        Explore my work ↗
      </a>

      <a
        href="https://github.com/Krylllee"
        target="_blank"
        rel="noreferrer"
        className={`rounded-lg border px-6 py-3 text-sm font-semibold transition ${
          dark
            ? "border-white/20 hover:bg-white/10"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        GitHub ↗
      </a>
    </div>
  </div>

  <div className="relative z-10 mx-auto w-full max-w-lg">
    <div className={`overflow-hidden rounded-2xl border shadow-2xl ${
      dark
        ? "border-white/10 bg-[#0d1117] shadow-violet-950/40"
        : "border-gray-200 bg-white shadow-gray-300/50"
    }`}>

      {/* Editor title bar */}
      <div className={`flex items-center justify-between border-b px-4 py-3 ${
        dark ? "border-white/10 bg-[#161b22]" : "border-gray-200 bg-gray-50"
      }`}>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span className="text-xs opacity-50">ANDREAS — PORTFOLIO</span>
        <span className={`font-mono text-xs ${
          dark ? "text-sky-400" : "text-sky-700"
        }`}>TS</span>
      </div>

      {/* File tab */}
      <div className={`flex items-center border-b ${
        dark ? "border-white/10 bg-[#0d1117]" : "border-gray-200 bg-white"
      }`}>
        <div className={`flex items-center gap-2 border-t-2 border-violet-500 px-5 py-3 text-xs ${
          dark ? "bg-[#161b22]" : "bg-gray-50"
        }`}>
          <span className={dark ? "text-sky-400" : "text-sky-700"}>TS</span>
          <span>profile.ts</span>
          <span className="opacity-40">●</span>
        </div>
      </div>

      {/* Code editor */}
      <div className="overflow-x-auto px-4 py-6 font-mono text-xs leading-8 sm:px-6 sm:text-sm">
        <div className="min-w-[340px] space-y-0">

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">01</span>
            <span className={`pl-6 italic ${dark ? "text-gray-400" : "text-gray-600"}`}>// A little about me</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">02</span>
            <span className="pl-6"><span className={dark ? "text-purple-400" : "text-purple-700"}>const</span> <span className={dark ? "text-sky-300" : "text-sky-700"}>profile</span> = {"{"}</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">03</span>
            <span className="pl-12">name: <span className={dark ? "text-green-400" : "text-green-800"}>"Andreas Kylle Camacho"</span>,</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">04</span>
            <span className="pl-12">background: <span className={dark ? "text-green-400" : "text-green-800"}>"IT & Computer Science"</span>,</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">05</span>
            <span className="pl-12">interests: [</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">06</span>
            <span className={`pl-16 ${dark ? "text-green-400" : "text-green-800"}`}>"Software & Engineering",</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">07</span>
            <span className={`pl-16 ${dark ? "text-green-400" : "text-green-800"}`}>"AI & Data Science",</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">08</span>
            <span className={`pl-16 ${dark ? "text-green-400" : "text-green-800"}`}>"Cybersecurity",</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">09</span>
            <span className={`pl-16 ${dark ? "text-green-400" : "text-green-800"}`}>"Cloud & DevOps",</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">10</span>
            <span className={`pl-16 ${dark ? "text-green-400" : "text-green-800"}`}>"Hardware & Networking"</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">11</span>
            <span className="pl-12">],</span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">12</span>
            <span className="pl-12">mindset: <span className={dark ? "text-green-400" : "text-green-800"}>"Always learning"</span></span>
          </div>

          <div className="flex">
            <span className="w-9 shrink-0 text-right opacity-25">13</span>
            <span className="pl-6">{"};"}</span>
          </div>

        </div>
      </div>

      {/* Bottom status bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3 ${
        dark ? "border-white/10 bg-[#161b22]" : "border-gray-200 bg-gray-50"
      }`}>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "React", "Java"].map((tech) => (
            <span
              key={tech}
              className={`rounded-md px-2.5 py-1 text-xs ${
                dark
                  ? "bg-violet-500/10 text-violet-400"
                  : "bg-violet-700/10 text-violet-800"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] opacity-50">UTF-8 · TypeScript</span>
      </div>
    </div>

    {/* Floating status card */}
    <div className={`relative mt-5 ml-5 w-fit rounded-xl border px-5 py-3 shadow-xl ${
      dark
        ? "border-white/10 bg-[#171724]"
        : "border-gray-200 bg-white"
    }`}>
      <p className="text-xs opacity-60">CURRENT STATUS</p>
      <p className="mt-1 text-sm font-semibold">
        Exploring & Building <span className={dark ? "text-green-400" : "text-green-700"}>●</span>
      </p>
    </div>
  </div>
</section>

      

<section id="about" className="mx-auto max-w-6xl px-6 py-24">
  <p className={`mb-3 font-mono text-sm ${
    dark ? "text-violet-400" : "text-violet-700"
  }`}>
    01 / ABOUT
  </p>

  <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
    <div>
      <h2 className="text-3xl font-bold sm:text-4xl">
        A little about me.
      </h2>

      <p className="mt-8 text-base leading-8 opacity-70">
        I'm interested in computers and technology, with an academic
        background in Information Technology and Computer Science.
        I enjoy exploring different areas of computing, building
        projects and developing my technical skills.
      </p>

      <p className="mt-5 text-base leading-8 opacity-70">
        From software development and networking to hardware and
        emerging technologies, I'm interested in understanding how
        different parts of the technology world work together.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2">
      {[
        {
          icon: "💻",
          title: "IT & Computer Science",
          description: "Academic foundations in computing and technology."
        },
        {
          icon: "🚀",
          title: "Project Building",
          description: "Learning through practical projects and experimentation."
        },
        {
          icon: "⚙️",
          title: "Technical Interests",
          description: "Software, hardware, networking and emerging technologies."
        },
        {
          icon: "📚",
          title: "Continuous Learning",
          description: "Exploring new tools, concepts and technical skills."
        }
      ].map((item) => (
        <div
          key={item.title}
          className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
            dark
              ? "border-white/10 bg-white/[0.03] hover:border-violet-500/30 hover:bg-white/[0.06]"
              : "border-gray-200 bg-white shadow-sm hover:border-violet-300 hover:bg-violet-50/40 hover:shadow-md"
          }`}
        >
          <div className="mb-4 text-2xl">{item.icon}</div>

          <h3 className="font-semibold">{item.title}</h3>

          <p className="mt-2 text-sm leading-6 opacity-70">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



  



<section id="projects" className="mx-auto max-w-6xl px-6 py-24">
  <p className={`mb-3 font-mono text-sm ${
    dark ? "text-violet-400" : "text-violet-700"
  }`}>
    02 / PROJECTS
  </p>

  <div className="flex flex-wrap items-end justify-between gap-4">
    <div>
      <h2 className="text-3xl font-bold sm:text-4xl">
        Things I've worked on.
      </h2>
      <p className="mt-3 text-sm opacity-70">
        Academic projects, experiments and things I've built.
      </p>
    </div>

    <a
      href="https://github.com/Krylllee?tab=repositories"
      target="_blank"
      rel="noreferrer"
      className={`text-sm font-medium transition ${
        dark
          ? "text-violet-400 hover:text-violet-300"
          : "text-violet-700 hover:text-violet-900"
      }`}
    >
      View all repositories ↗
    </a>
  </div>

  {loading ? (
    <p className="mt-12 opacity-70">Loading repositories...</p>
  ) : projects.length === 0 ? (
    <div className={`mt-12 rounded-2xl border border-dashed p-12 text-center ${
      dark ? "border-white/10" : "border-gray-300"
    }`}>
      <p className="text-3xl">⌘</p>
      <p className="mt-4 font-semibold">Projects coming soon</p>
      <p className="mt-2 text-sm opacity-60">
        Check out my GitHub for current repositories.
      </p>
    </div>
  ) : (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
          className={`group flex flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
            dark
              ? "border-white/10 bg-[#11111b] hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-950/20"
              : "border-gray-200 bg-white shadow-sm hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/10"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
              dark
                ? "bg-violet-500/10 text-violet-400"
                : "bg-violet-100 text-violet-800"
            }`}>
              {"</>"}
            </div>

            <span className={`text-lg opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 ${
              dark ? "group-hover:text-violet-400" : "group-hover:text-violet-700"
            }`}>
              ↗
            </span>
          </div>

          <h3 className={`mt-7 text-xl font-bold transition ${
            dark
              ? "group-hover:text-violet-400"
              : "group-hover:text-violet-700"
          }`}>
            {project.name}
          </h3>

          <p className="mt-3 min-h-20 text-sm leading-7 opacity-70">
            {project.description || "No description provided yet."}
          </p>

          <div className={`mt-8 flex items-center justify-between border-t pt-5 ${
            dark ? "border-white/10" : "border-gray-200"
          }`}>
            <span className="flex items-center gap-2 text-xs font-medium opacity-80">
              <span className={`h-2 w-2 rounded-full ${
                dark ? "bg-violet-400" : "bg-violet-700"
              }`} />
              {project.language || "Other"}
            </span>

            <span className="text-xs opacity-70">
              ★ {project.stargazers_count}
            </span>
          </div>
        </a>
      ))}
    </div>
  )}
</section>




<section className="mx-auto max-w-6xl px-6 py-20">
  <div className="flex flex-wrap items-end justify-between gap-4">
    <div>
      <p className={`mb-3 font-mono text-sm ${
        dark ? "text-violet-400" : "text-violet-700"
      }`}>
        GITHUB / ACTIVITY
      </p>

      <h2 className="text-3xl font-bold sm:text-4xl">
        My GitHub presence.
      </h2>

      <p className="mt-3 text-sm opacity-70">
        A snapshot of my public GitHub profile.
      </p>
    </div>

    <a
      href="https://github.com/Krylllee"
      target="_blank"
      rel="noreferrer"
      className={`text-sm font-medium transition ${
        dark
          ? "text-violet-400 hover:text-violet-300"
          : "text-violet-700 hover:text-violet-900"
      }`}
    >
      Visit GitHub ↗
    </a>
  </div>

  <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
    {[
      { label: "Public Repositories", value: githubProfile?.public_repos ?? "—", icon: "⌘" },
      { label: "Total Stars", value: totalStars, icon: "☆" },
      { label: "Followers", value: githubProfile?.followers ?? "—", icon: "♙" },
      { label: "Following", value: githubProfile?.following ?? "—", icon: "↗" },
    ].map((stat) => (
      <div
        key={stat.label}
        className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${
          dark
            ? "border-white/10 bg-[#11111b] hover:border-violet-500/40"
            : "border-gray-200 bg-white shadow-sm hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/10"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className={`text-2xl ${
            dark ? "text-violet-400" : "text-violet-700"
          }`}>
            {stat.icon}
          </span>

          <span className="text-xs opacity-40">GITHUB</span>
        </div>

        <p className="mt-6 text-3xl font-bold tracking-tight">
          {stat.value}
        </p>

        <p className="mt-2 text-sm opacity-70">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</section>



      

<section id="skills" className="mx-auto max-w-6xl px-6 py-24">
  <p className={`mb-3 font-mono text-sm ${
    dark ? "text-violet-400" : "text-violet-700"
  }`}>
    03 / TECH STACK
  </p>

  <h2 className="text-3xl font-bold sm:text-4xl">
    Tools & technologies.
  </h2>

  <p className="mt-4 text-sm opacity-70">
    Technologies I've used, worked with or am currently exploring.
  </p>

  <div className="mt-12 grid gap-10 md:grid-cols-2">
    {[
      {
        category: "Frontend",
        technologies: [
          { name: "HTML5", icon: "html5" },
          { name: "CSS3", icon: "css" },
          { name: "JavaScript", icon: "javascript" },
          { name: "TypeScript", icon: "typescript" },
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextdotjs" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
      },
      {
        category: "Backend & Languages",
        technologies: [
          { name: "Java", icon: "openjdk" },
          { name: "Python", icon: "python" },
          { name: "Go", icon: "go" },
          { name: "Rust", icon: "rust" },
          { name: "MySQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
      },
      {
        category: "Tools & Platforms",
        technologies: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "VS Code", icon: "visualstudiocode" },
          { name: "Linux", icon: "linux" },
          { name: "Vercel", icon: "vercel" },
        ],
      },
    ].map((group) => (
      <div key={group.category}>
        <h3 className={`mb-5 text-sm font-semibold ${
          dark ? "text-violet-400" : "text-violet-700"
        }`}>
          {group.category}
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {group.technologies.map((tech) => (
            <div
              key={tech.name}
              className={`flex items-center gap-3 rounded-xl border p-4 transition duration-200 hover:-translate-y-1 ${
                dark
                  ? "border-white/10 bg-white/[0.03] hover:border-violet-500"
                  : "border-gray-200 bg-white shadow-sm hover:border-violet-400 hover:shadow-md"
              }`}
            >
              {tech.icon === "visualstudiocode" ? (
                <div className="flex h-6 w-6 items-center justify-center rounded bg-[#007ACC] text-sm font-bold text-white">
                  V
                </div>
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${tech.icon}`}
                  alt={tech.name}
                  className="h-6 w-6"
                />
              )}

              <span className="text-sm font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>




<section id="contact" className="mx-auto max-w-6xl px-6 py-24">
  <div className={`rounded-3xl border p-8 shadow-sm sm:p-14 ${
    dark
      ? "border-white/10 bg-white/[0.03]"
      : "border-gray-200 bg-white shadow-gray-200/60"
  }`}>
    <p className={`mb-3 font-mono text-sm ${
      dark ? "text-violet-400" : "text-violet-700"
    }`}>
      04 / CONTACT
    </p>

    <h2 className="text-3xl font-bold sm:text-5xl">
      Let's connect.
    </h2>

    <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">
      I'm currently building my skills and expanding my experience
      in technology. I'm open to opportunities in software
      development, IT and other computer-related fields where
      I can contribute, learn and grow.
    </p>

    <div className="mt-9 flex flex-wrap gap-4">
      <a
        href="mailto:andigylle10@gmail.com"
        className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
      >
        Email me ↗
      </a>

      <a
        href="tel:+61469398838"
        className={`rounded-lg border px-6 py-3 text-sm font-semibold transition ${
          dark
            ? "border-white/20 hover:bg-white/10"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        Call me
      </a>

      <a
        href="https://github.com/Krylllee"
        target="_blank"
        rel="noreferrer"
        className={`rounded-lg border px-6 py-3 text-sm font-semibold transition ${
          dark
            ? "border-white/20 hover:bg-white/10"
            : "border-gray-300 hover:bg-gray-100"
        }`}
      >
        View GitHub ↗
      </a>
    </div>

    <div className={`mt-10 grid gap-5 border-t pt-8 sm:grid-cols-2 ${
      dark ? "border-white/10" : "border-gray-200"
    }`}>
      <div>
        <p className={`mb-2 text-xs font-mono ${
          dark ? "text-violet-400" : "text-violet-700"
        }`}>
          EMAIL
        </p>
        <a
          href="mailto:andigylle10@gmail.com"
          className="text-sm transition hover:underline"
        >
          andigylle10@gmail.com
        </a>
      </div>

      <div>
        <p className={`mb-2 text-xs font-mono ${
          dark ? "text-violet-400" : "text-violet-700"
        }`}>
          PHONE
        </p>
        <a
          href="tel:+61469398838"
          className="text-sm transition hover:underline"
        >
          +61 469 398 838
        </a>
      </div>
    </div>
  </div>
</section>



<footer
  className={`border-t px-6 py-8 ${
    dark ? "border-white/10" : "border-gray-200"
  }`}
>
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
    <div>
      <p className="text-sm font-semibold">
        Andreas Kylle Camacho
        <span className="text-violet-400">.</span>
      </p>
      <p className="mt-1 text-xs opacity-50">
        IT & Computer Science Enthusiast
      </p>
    </div>

    <div className="flex items-center gap-5 text-xs opacity-60">
      <a
        href="https://github.com/Krylllee"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-violet-400"
      >
        GitHub ↗
      </a>
      <a
        href="#"
        className="transition hover:text-violet-400"
      >
        Back to top ↑
      </a>
    </div>

    <p className="text-xs opacity-40">
      © 2026 Andreas Kylle Camacho
    </p>
  </div>
</footer>

    </main>
  );
}
