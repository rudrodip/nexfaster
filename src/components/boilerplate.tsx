import { NavLink } from "react-router";
import { siteConfig } from "@/config/site.config";
import ThemeToggler from "@/components/theme/toggler";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <NavLink to="/" className="text-xl font-bold text-primary">
                {siteConfig.name}
              </NavLink>
              <div className="hidden md:flex space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-sm transition-colors ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/docs"
                  className={({ isActive }) =>
                    `text-sm transition-colors ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Docs
                </NavLink>
                <NavLink
                  to="/examples"
                  className={({ isActive }) =>
                    `text-sm transition-colors ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  Examples
                </NavLink>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </Button>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

export function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative space-y-20">
        <div className="text-center space-y-8 pt-12 pb-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Next.js + React Router
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tighter">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                {siteConfig.title}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg transition-all duration-300 px-8 py-6 text-lg"
            >
              <NavLink to="/docs">
                <span className="flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </NavLink>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 hover:bg-primary/5 transition-all duration-300 px-8 py-6 text-lg"
            >
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </span>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="group p-8 border border-border/50 rounded-2xl bg-gradient-to-br from-background to-muted/20 transition-all duration-500">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast Setup</h3>
              <p className="text-muted-foreground leading-relaxed">
                Zero-config React Router integration with Next.js. Get your modern SPA running in under 60 seconds with our optimized template.
              </p>
            </div>
          </div>
          
          <div className="group p-8 border border-border/50 rounded-2xl bg-gradient-to-br from-background to-muted/20 transition-all duration-500">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Seamless Client Routing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience buttery-smooth navigation with client-side routing while maintaining all the powerful features of Next.js ecosystem.
              </p>
            </div>
          </div>
          
          <div className="group p-8 border border-border/50 rounded-2xl bg-gradient-to-br from-background to-muted/20 transition-all duration-500">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Developer Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clean, intuitive architecture with TypeScript support, modern tooling, and a codebase that scales effortlessly with your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Docs() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          React Router inside Next.js with client-side routing
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Setup</h2>
          <div className="bg-muted/50 rounded-lg p-4">
            <pre className="text-sm"><code>{`git clone ${siteConfig.socials.github}
cd ${siteConfig.name.toLowerCase()}
bun install
bun dev`}</code></pre>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">How it works</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">1</div>
              <div>
                <p className="font-medium">Route redirection</p>
                <p className="text-sm text-muted-foreground">All routes redirect to <code className="bg-muted px-1.5 py-0.5 rounded text-xs">/shell</code> via next.config.ts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">2</div>
              <div>
                <p className="font-medium">Shell loading</p>
                <p className="text-sm text-muted-foreground">Shell page loads React Router app with <code className="bg-muted px-1.5 py-0.5 rounded text-xs">ssr: false</code></p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">3</div>
              <div>
                <p className="font-medium">Client routing</p>
                <p className="text-sm text-muted-foreground">React Router handles all navigation client-side</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Key files</h2>
          <div className="grid gap-3">
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">next.config.ts</code>
              <span className="text-sm text-muted-foreground">Route redirection config</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">src/app/shell/page.tsx</code>
              <span className="text-sm text-muted-foreground">Loads React Router app</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">src/frontend/app.tsx</code>
              <span className="text-sm text-muted-foreground">Main React Router app</span>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
              <code className="text-sm font-mono bg-primary/10 px-2 py-1 rounded">src/config/site.config.ts</code>
              <span className="text-sm text-muted-foreground">Site configuration</span>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b pb-2">Adding routes</h2>
          <div className="bg-muted/50 rounded-lg p-4">
            <pre className="text-sm"><code>{`<Route path="/new-page" element={<NewPage />} />`}</code></pre>
          </div>
          <p className="text-sm text-muted-foreground">Add new Route components in the Routes section of app.tsx</p>
        </section>
      </div>
    </div>
  );
}

export function Examples() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Technical Examples</h1>
        <p className="text-lg text-muted-foreground">
          Real implementations you can build
        </p>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Multi-page app with nested routes</h3>
          <div className="space-y-3">
            <div className="bg-muted/50 rounded p-3">
              <code className="text-sm">/products → ProductList</code><br />
              <code className="text-sm">/products/:id → ProductDetail</code><br />
              <code className="text-sm">/cart → ShoppingCart</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Supports URL params, nested layouts, protected routes
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Admin dashboard with auth</h3>
          <div className="space-y-3">
            <div className="bg-muted/50 rounded p-3">
              <code className="text-sm">/login → AuthForm</code><br />
              <code className="text-sm">/dashboard → ProtectedDashboard</code><br />
              <code className="text-sm">/dashboard/users → UserManagement</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Route guards, auth context, role-based access
            </p>
          </div>
        </div>

        <div className="border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">API integration patterns</h3>
          <div className="space-y-3">
            <div className="bg-muted/50 rounded p-3">
              <code className="text-sm">React Query + tRPC</code><br />
              <code className="text-sm">SWR + REST APIs</code><br />
              <code className="text-sm">Zustand state management</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Client-side data fetching, caching, optimistic updates
            </p>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">Quick start</h3>
          <div className="bg-background rounded p-4">
            <pre className="text-sm"><code>{`git clone ${siteConfig.socials.github}
cd ${siteConfig.name.toLowerCase()}
bun install
bun dev`}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
