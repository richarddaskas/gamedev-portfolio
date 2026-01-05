'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('projects');
        return;
      }
      
      const viewportMiddle = scrollPosition + windowHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (viewportMiddle >= offsetTop) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-theme-primary text-theme-secondary">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-theme-primary sm:text-5xl">
                Richard Daskas
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-theme-primary sm:text-xl">
                Unity Developer & Systems Designer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-theme-muted">
                Building engaging gameplay systems and mechanics with Unity and C#. Shipped commercial title on Steam.
              </p>

              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                      className={`group flex items-center py-3 ${
                        activeSection === 'about' ? 'active' : ''
                      }`}
                    >
                      <span className={`nav-indicator mr-4 h-1.5 w-1.5 rounded-full transition-all ${
                        activeSection === 'about' 
                          ? 'w-8 bg-theme-accent' 
                          : 'bg-slate-400 group-hover:w-8 group-hover:bg-theme-accent'
                      }`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        activeSection === 'about'
                          ? 'text-theme-primary'
                          : 'text-theme-subtle group-hover:text-theme-primary'
                      }`}>
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                      className={`group flex items-center py-3 ${
                        activeSection === 'experience' ? 'active' : ''
                      }`}
                    >
                      <span className={`nav-indicator mr-4 h-1.5 w-1.5 rounded-full transition-all ${
                        activeSection === 'experience' 
                          ? 'w-8 bg-theme-accent' 
                          : 'bg-slate-400 group-hover:w-8 group-hover:bg-theme-accent'
                      }`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        activeSection === 'experience'
                          ? 'text-theme-primary'
                          : 'text-theme-subtle group-hover:text-theme-primary'
                      }`}>
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                      className={`group flex items-center py-3 ${
                        activeSection === 'projects' ? 'active' : ''
                      }`}
                    >
                      <span className={`nav-indicator mr-4 h-1.5 w-1.5 rounded-full transition-all ${
                        activeSection === 'projects' 
                          ? 'w-8 bg-theme-accent' 
                          : 'bg-slate-400 group-hover:w-8 group-hover:bg-theme-accent'
                      }`}></span>
                      <span className={`nav-text text-xs font-bold uppercase tracking-widest ${
                        activeSection === 'projects'
                          ? 'text-theme-primary'
                          : 'text-theme-subtle group-hover:text-theme-primary'
                      }`}>
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li className="text-xs">
                <a
                  className="block hover:text-theme-primary"
                  href="https://www.linkedin.com/in/richard-d-03128838b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li className="text-xs">
                <a
                  className="block hover:text-theme-primary"
                  href="https://twitter.com/WiseWombatGames"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-theme-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-theme-primary lg:sr-only">About</h2>
              </div>
              <div>
                <p className="mb-4 text-theme-muted leading-relaxed">
                  I'm a Unity developer with 10+ years of experience building gameplay systems, mechanics, 
                  and tools. I shipped Resonant Blade, a commercial 2D action-adventure game on Steam, after 
                  8 years of solo development, handling everything from physics and AI to UI and optimization.
                </p>
                <p className="mb-4 text-theme-muted leading-relaxed">
                  My background spans game development, systems architecture, and technical problem-solving. 
                  I specialize in building robust, maintainable systems—from custom character controllers and 
                  state machines to procedural generation and enemy AI. I'm comfortable working independently 
                  or collaborating with designers and artists to bring creative visions to life.
                </p>
                <p className="text-theme-muted leading-relaxed">
                  Currently developing HAUL, a delivery roguelike prototype combining physics-based gameplay 
                  with procedural systems. I'm passionate about creating polished, engaging player experiences 
                  and solving complex technical challenges.
                </p>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-theme-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-theme-primary lg:sr-only">Experience</h2>
              </div>
              <div>
                <ol className="group/list">

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-theme-subtle sm:col-span-2" aria-label="2016 to Present">
                        2017 — Present
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-theme-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="#" aria-label="Independent Game Developer">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Independent Game Developer · <span className="inline-block">Solo Development</span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Designed, developed, and shipped complete game projects from concept to release. 
                          Built custom physics engines, AI systems, state machines, and gameplay mechanics 
                          using Unity and C#. Managed entire development pipeline including architecture, 
                          implementation, optimization, and deployment across multiple platforms.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Unity</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">C#</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Systems Design</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Game Architecture</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-theme-subtle sm:col-span-2" aria-label="2015 to 2017">
                        2015 — 2017
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-theme-primary">
                          <div>
                            <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="#" aria-label="Software Developer at IBM Research">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Software Developer · <span className="inline-block">IBM Research</span></span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Worked on Watson Beat, an AI-driven music generation platform. Implemented technical 
                          systems for music composition algorithms, handled data processing pipelines, and 
                          collaborated with research scientists and external artists on experimental features.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Python</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">AI/ML</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Data Processing</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Audio Systems</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                </ol>
              </div>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-theme-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-theme-primary lg:sr-only">Projects</h2>
              </div>
              <div>
                <ul className="group/list">

                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="https://www.resonantblade.com/" target="_blank" rel="noreferrer" aria-label="Resonant Blade">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Resonant Blade
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Commercial 2D action-adventure game released on Steam. Developed complete game systems 
                          including custom character controller, enemy AI with behavior trees, physics-based combat, 
                          comprehensive save system, and musical integration. Optimized for multiple platforms and 
                          managed full development cycle from prototype to launch.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Unity</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">C#</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">2D Physics</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">State Machines</div>
                          </li>
                        </ul>
                      </div>
                      <img alt="Resonant Blade screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-theme-primary/10 transition group-hover:border-theme-primary/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src="/ss_resonantBlade.png" />
                    </div>
                  </li>
                  
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="https://youtu.be/TDnMjj2c2SE" target="_blank" rel="noreferrer" aria-label="HAUL Prototype">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>HAUL (Prototype)
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          Delivery roguelike combining Art of Rally-inspired vehicle physics with Vampire Survivors 
                          gameplay loop. Implemented custom cargo physics with stacking mechanics, procedural terrain 
                          generation, enemy AI with theft behaviors, auto-targeting turret systems, and dynamic camera 
                          following.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Unity</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">C#</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">3D Physics</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Procedural Generation</div>
                          </li>
                        </ul>
                      </div>
                      <img alt="HAUL prototype screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-theme-primary/10 transition group-hover:border-theme-primary/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src="/ss_haul.png" />
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-theme-hover lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a className="inline-flex items-baseline font-medium leading-tight text-theme-primary hover:text-theme-accent focus-visible:text-theme-accent group/link text-base" href="https://richard-daskas.itch.io/dream-gazer" target="_blank" rel="noreferrer" aria-label="Dream Gazer">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Dream Gazer
                              <span className="inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-theme-muted">
                          2D platformer developed for game jam. Features tight platforming mechanics, level design 
                          focused on flow and challenge escalation, and polished player movement. Demonstrates ability 
                          to rapidly prototype and deliver complete gameplay experiences under time constraints.
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Unity</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">C#</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">2D Platformer</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-theme-accent px-3 py-1 text-xs font-medium leading-5 text-theme-accent">Game Jam</div>
                          </li>
                        </ul>
                      </div>
                      <img alt="Dream Gazer screenshot" loading="lazy" width="200" height="48" decoding="async" className="rounded border-2 border-theme-primary/10 transition group-hover:border-theme-primary/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: 'transparent'}} src="/ss_dreamGazer.png" />
                    </div>
                  </li>

                </ul>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-sm text-theme-subtle sm:pb-0">
              <p>
                Built with <a href="https://nextjs.org/" className="font-medium text-theme-muted hover:text-theme-accent focus-visible:text-theme-accent" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" className="font-medium text-theme-muted hover:text-theme-accent focus-visible:text-theme-accent" target="_blank" rel="noreferrer">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" className="font-medium text-theme-muted hover:text-theme-accent focus-visible:text-theme-accent" target="_blank" rel="noreferrer">Vercel</a>.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
