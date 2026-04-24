# Home And About Redesign Design

## Context

Taskbit currently has a compact TanStack Router web shell with two routes: Home (`/`) and About (`/about`). The app has recently added shadcn setup, and the redesign should make the project look like a polished productivity product instead of a starter template.

The selected direction is a product landing page for developer and product teams. The visual style should be clean, bright, restrained, and professional, using typography, spacing, subtle borders, and focused content instead of heavy decoration.

## Goals

- Reimagine Home as a polished product-facing landing page.
- Reimagine About as a credibility page that explains the project, principles, product surface, and stack.
- Use realistic placeholder product content for Taskbit without implying live integrations or real data.
- Surface the intended Taskbit product shape: API integrations, a web app, and desktop apps for macOS and Windows.
- Keep the implementation grounded in the current React, TanStack Router, Tailwind, and shadcn setup.

## Non-Goals

- Do not add backend behavior or new API routes.
- Do not connect the product preview to real data.
- Do not create real signup, onboarding, or integration flows.
- Do not edit `apps/web/src/routeTree.gen.ts`.
- Do not expand shadcn usage beyond components that are useful for the redesign.

## Audience And Tone

The pages should speak to developer and product teams. Copy should focus on turning tasks, issues, bugs, and release work into one clear workflow.

The tone should be concise and professional:

- Practical rather than hype-heavy.
- Product-like rather than template-like.
- Specific enough to feel credible, but clearly placeholder where no real product data exists.

## Home Page Design

Home should become the main product landing page.

### Hero

The hero should introduce Taskbit as a workflow hub for developer and product teams. It should explain that Taskbit helps teams capture work, prioritize execution, and keep release work visible.

The hero should include:

- A clear product headline.
- Supporting copy about issues, tasks, releases, and team workflow.
- A primary CTA-style button.
- A secondary navigation link to About.

CTA behavior should stay honest. Buttons can navigate to existing routes or use harmless placeholder labels, but they must not imply a working signup flow.

### Product Preview

Home should include a static placeholder workflow preview. This should make the product feel real without pretending to be connected to live data.

The preview should include workflow columns such as:

- Triage
- In Progress
- Ready to Ship

Cards should use realistic placeholder examples from developer/product work, such as API integration tasks, bug triage, release checklist items, product feedback, and design review work.

### Feature Grid

Home should include three concise feature sections:

- API integrations: bring work signals from connected tools into one planning surface.
- Web workspace: plan, prioritize, and review work from the browser.
- Desktop apps: keep Taskbit close at hand on macOS and Windows.

### Metrics Strip

Home should include a compact placeholder metrics strip with non-live values, such as connected tools, active work items, or release checks. These values should read as sample product content, not factual production usage.

## About Page Design

About should become the credibility and project-introduction page.

### About Hero

The page should explain why Taskbit exists: to reduce scattered project work and give product/developer teams a clearer operating surface.

### Product Surface

The page should explicitly state that Taskbit is intended to include:

- API integrations
- A web app
- Desktop apps for macOS and Windows

The desktop wording should stay product-facing while the stack section can ground implementation in Tauri.

### Principles

About should include three product principles:

- Clarity: work should be easy to see and reason about.
- Momentum: teams should know what to do next.
- Traceability: decisions, tasks, and release readiness should stay connected.

### Stack

About should list the actual project foundation:

- React
- TanStack Router
- Nitro API
- Tauri desktop shell
- Shared TypeScript contracts
- shadcn UI

### Roadmap

About should include a small roadmap section with near-term product direction. It should avoid overpromising and keep copy framed as direction rather than completed functionality.

## Components And Boundaries

Start with route-local components unless a component clearly repeats or improves readability.

Likely Home sections:

- `HeroSection`
- `WorkflowPreview`
- `FeatureGrid`
- `MetricsStrip`

Likely About sections:

- `AboutHero`
- `ProductSurfaceSection`
- `PrinciplesSection`
- `StackSection`
- `RoadmapSection`

Use the existing shadcn `Button` for CTAs. Add more shadcn components only if they materially improve the implementation.

The shared header can be refined for width, spacing, and active states, but navigation should remain simple.

## Behavior

- Home and About remain static pages.
- Product preview data is hard-coded placeholder content.
- CTAs do not start fake flows.
- Existing TanStack Router `head()` document-title behavior stays in place.
- The shared header remains the main navigation surface.

## Testing

Update existing route tests instead of adding broad new coverage.

Home route tests should verify:

- The new main heading renders.
- Product-preview content renders.
- About navigation remains available.
- The document title remains `Home · Taskbit`.

About route tests should verify:

- The new About heading or mission content renders.
- Product-surface content mentions API integrations, web app, and macOS/Windows desktop apps.
- Stack or principles content renders.
- Home navigation remains available.
- The document title remains `About · Taskbit`.

Header tests should only change if the header labels, markup, or active-state assertions require it.

## Acceptance Criteria

- Home reads as a polished product landing page for developer/product teams.
- About reads as a credible project page, not a starter-template explanation.
- The pages mention API integrations, web app, and macOS/Windows desktop apps.
- The design uses a clean, bright, restrained visual style.
- Placeholder preview content is clearly static and does not imply real integrations.
- Existing route-title behavior and navigation continue to work.
- Relevant route tests pass after implementation.
