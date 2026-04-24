# Marketing And App Shell Redesign Design

## Context

Taskbit currently has a compact TanStack Router web shell with two routes: Home (`/`) and About (`/about`). The app has recently added shadcn setup, and the redesign should make the project look like a polished productivity product instead of a starter template.

The selected direction is a product landing page for developer and product teams. The visual style should be clean, bright, restrained, and professional, using typography, spacing, subtle borders, and focused content instead of heavy decoration.

The route architecture should also split public marketing pages from the app surface. Marketing pages should live under a pathless marketing layout, while the product placeholder should live under a separate pathless app layout at `/app`. The desktop wrapper should open the app surface directly instead of starting on marketing content.

## Goals

- Reimagine Home (`/`) as a polished product-facing landing page.
- Reimagine About (`/about`) as a credibility page that explains the project, principles, product surface, and stack.
- Add an app placeholder route at `/app`.
- Separate marketing and app chrome with TanStack Router pathless layout routes.
- Make the desktop app open the `/app` surface directly.
- Use realistic placeholder product content for Taskbit without implying live integrations or real data.
- Surface the intended Taskbit product shape: API integrations, a web app, and desktop apps for macOS and Windows.
- Keep the implementation grounded in the current React, TanStack Router, Tailwind, and shadcn setup.

## Non-Goals

- Do not add backend behavior or new API routes.
- Do not connect the product preview to real data.
- Do not create real signup, onboarding, or integration flows.
- Do not add auth, account, workspace, or settings behavior.
- Do not edit `apps/web/src/routeTree.gen.ts`.
- Do not expand shadcn usage beyond components that are useful for the redesign.

## Audience And Tone

The pages should speak to developer and product teams. Copy should focus on turning tasks, issues, bugs, and release work into one clear workflow.

The tone should be concise and professional:

- Practical rather than hype-heavy.
- Product-like rather than template-like.
- Specific enough to feel credible, but clearly placeholder where no real product data exists.

## Route Architecture

Use two TanStack Router pathless layout groups:

- `_marketing`: wraps `/` and `/about`.
- `_app`: wraps `/app`.

The root route should become the global shell only. It should keep global concerns such as styles, `HeadContent`, devtools, and the top-level `Outlet`, but it should not own marketing-specific or app-specific layout chrome.

Context7 TanStack Router docs confirm that pathless layout routes use a leading underscore and render child routes through `Outlet` without adding URL segments. The implementation should follow that model.

Expected route shape:

- `routes/__root.tsx`: global shell and `Outlet`.
- `routes/_marketing.tsx`: marketing layout with public header and marketing page container.
- `routes/_marketing.index.tsx` or equivalent file-based route: Home at `/`.
- `routes/_marketing.about.tsx` or equivalent file-based route: About at `/about`.
- `routes/_app.tsx`: app layout with app-style chrome.
- `routes/_app.app.tsx` or equivalent file-based route: app placeholder at `/app`.

Exact filenames can follow TanStack Router's supported flat or directory conventions, but the URL contract must remain `/`, `/about`, and `/app`.

## Home Page Design

Home (`/`) should become the main product landing page inside the marketing layout.

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

About (`/about`) should become the credibility and project-introduction page inside the marketing layout.

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

## App Placeholder Design

The app route (`/app`) should be a static placeholder product workspace inside the app layout.

The page should make it obvious that the app surface is separate from marketing. It should use app-style chrome such as a sidebar or compact navigation rail, a workspace header, and a main content area.

The placeholder should include realistic sample content, such as:

- A workspace name.
- A short status summary.
- Sample workflow columns or task cards.
- Placeholder signals from integrations, issues, bugs, release checks, or product feedback.

The app placeholder should not include marketing navigation. It can include a small product name or logo, but it should not link users to `/` or `/about` as part of normal desktop app navigation.

The app route should define its own document title, such as `App · Taskbit`.

## Components And Boundaries

Start with route-local components unless a component clearly repeats or improves readability.

Likely layout components:

- `MarketingLayout`
- `AppLayout`
- `MarketingHeader`
- `AppSidebar` or `AppShellNav`

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

Likely App sections:

- `AppWorkspaceHeader`
- `AppWorkflowPreview`
- `AppIntegrationSignals`

Use the existing shadcn `Button` for CTAs. Add more shadcn components only if they materially improve the implementation.

The current shared header should be replaced or split so marketing and app layouts do not share the same navigation chrome.

## Behavior

- Home and About remain static pages.
- `/app` remains a static placeholder app page.
- Product preview data is hard-coded placeholder content.
- CTAs do not start fake flows.
- Existing TanStack Router `head()` document-title behavior stays in place.
- Marketing pages use marketing navigation.
- App pages use app navigation.
- Desktop opens `/app` directly and does not require users to pass through marketing pages.

## Desktop Behavior

The Tauri desktop wrapper should continue reusing `apps/web`; do not create a separate frontend under `apps/desktop`.

Desktop should open directly to `/app` in development and production. The implementation can achieve this through the appropriate Tauri URL configuration and/or client-side routing entry strategy, but the visible desktop entry point should be the app placeholder, not `/`.

Marketing routes may still be present in the bundled web app, but the desktop app layout should not expose marketing navigation.

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

App route tests should verify:

- `/app` renders the app placeholder.
- The app layout does not render marketing navigation.
- The document title is `App · Taskbit`.

Layout/header tests should verify the marketing and app layouts separately if their behavior is extracted into shared components.

Desktop checks should verify that the configured desktop entry points at `/app` or otherwise starts on the app surface.

## Acceptance Criteria

- `/` reads as a polished product landing page for developer/product teams.
- `/about` reads as a credible project page, not a starter-template explanation.
- `/app` renders a static app placeholder with app-specific chrome.
- Marketing and app surfaces use separate pathless layouts.
- Desktop opens the `/app` surface directly.
- Marketing pages mention API integrations, web app, and macOS/Windows desktop apps.
- The design uses a clean, bright, restrained visual style.
- Placeholder preview content is clearly static and does not imply real integrations.
- Existing route-title behavior and navigation continue to work.
- Relevant route tests pass after implementation.
