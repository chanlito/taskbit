---
name: Taskbit
description: A focused workflow surface for product and developer teams.
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0.008 326)"
  card: "oklch(1 0 0)"
  primary: "oklch(0.212 0.019 322.12)"
  primary-foreground: "oklch(0.985 0 0)"
  muted: "oklch(0.96 0.003 325.6)"
  muted-foreground: "oklch(0.542 0.034 322.5)"
  border: "oklch(0.922 0.005 325.62)"
  ring: "oklch(0.711 0.019 323.02)"
  success: "oklch(0.596 0.145 163.225)"
typography:
  display:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree Variable, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.16em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Taskbit

## 1. Overview

**Creative North Star: "The Delivery Desk"**

Taskbit should feel like a clean working desk for product delivery: open enough to scan, structured enough to trust, and free of decoration that does not help a team decide what needs attention. The system is primarily a product UI with a marketing shell, so visual decisions should support clarity before brand expression.

The current direction is bright, restrained, and operational. Surfaces use tinted neutral OKLCH tokens, Figtree typography, subtle borders, modest radius, and compact navigation. Marketing pages can breathe more, but the app surface should stay dense enough for repeated use.

Taskbit rejects starter-template polish, hype-heavy SaaS composition, decorative dashboard metrics, glass cards, purple-blue gradient surfaces, and any copy or visuals that imply live integrations before they exist.

**Key Characteristics:**
- Bright neutral workspace with a slight plum tint in the darkest values.
- Restrained accent use, mostly through primary actions and status details.
- Clear separation between public marketing pages and the app workspace.
- Static sample content that reads as plausible but not live.

## 2. Colors

The palette is restrained: tinted neutrals carry the interface, with a near-charcoal primary used sparingly for action and emphasis.

### Primary

- **Task Ink** (`oklch(0.212 0.019 322.12)`): Primary actions, logo tile, and high-emphasis interface details. Use it sparingly so actions stay obvious.
- **Soft Ink Foreground** (`oklch(0.985 0 0)`): Text on primary surfaces. Future refinements should tint this away from a pure endpoint.

### Neutral

- **Workspace Paper** (`oklch(1 0 0)`): Main page and card backgrounds. Future refinements should prefer a subtly tinted near-white rather than a pure endpoint.
- **Plum Black** (`oklch(0.145 0.008 326)`): Main foreground text. This is the darkest system neutral and should replace untinted black.
- **Muted Panel** (`oklch(0.96 0.003 325.6)`): Secondary surface blocks, nav active states, chips, and task-card backgrounds.
- **Quiet Slate** (`oklch(0.542 0.034 322.5)`): Supporting copy, metadata, labels, and less important counts.
- **Soft Divider** (`oklch(0.922 0.005 325.62)`): Borders and input strokes.
- **Focus Ring** (`oklch(0.711 0.019 323.02)`): Focus outlines and ring treatment.
- **Release Green** (`oklch(0.596 0.145 163.225)`): Success or ready-state accents only.

### Named Rules

**The Quiet Action Rule.** Primary color should identify the next clear action, not decorate every section.

**The No Fake Heat Rule.** Do not introduce alarming reds, saturated oranges, or urgent badges unless real severity exists.

## 3. Typography

**Display Font:** Figtree Variable, with sans-serif fallback.
**Body Font:** Figtree Variable, with sans-serif fallback.
**Label/Mono Font:** Figtree Variable unless a future code or ID surface needs a real monospace.

**Character:** Figtree gives Taskbit a calm product voice without feeling anonymous. The hierarchy should feel confident and readable, with strong weight changes and moderate scale jumps.

### Hierarchy

- **Display** (600, 3.75rem, 1.1): Home hero headlines only.
- **Headline** (600, 3rem, 1.1): About page hero and large section introductions.
- **Title** (600, 1.5rem, 1.25): Section titles, card headers, app panel titles.
- **Body** (400, 1rem, 1.75): Descriptive copy and task text. Keep long text to roughly 65 to 75 characters per line.
- **Label** (600, 0.875rem, 0.16em when uppercase): Eyebrows, metadata, compact nav, and status labels.

### Named Rules

**The No Shouting Rule.** Uppercase labels are allowed only for short metadata. Do not use them for full sentences or body copy.

## 4. Elevation

Taskbit is flat by default. Depth comes from tonal layering, borders, and spacing. Shadows are currently limited to a subtle preview treatment and should remain rare. A working product surface should not depend on floating cards to explain hierarchy.

### Shadow Vocabulary

- **Preview Lift** (`box-shadow: var(--shadow-sm)` via Tailwind `shadow-sm`): Use only for showcased previews or active surfaces that need slight separation from the page.

### Named Rules

**The Flat Workspace Rule.** Product panels are flat at rest. Add elevation only when a surface must read as selected, movable, or temporarily above the workspace.

## 5. Components

### Buttons

- **Shape:** Rounded pill (`9999px`) through `rounded-4xl`.
- **Primary:** Task Ink background with Soft Ink Foreground text. Default large CTA height is `40px`; compact header CTA height is `32px`.
- **Hover / Focus:** Hover darkens through opacity. Focus uses border plus `ring-3` with the Focus Ring token at low opacity.
- **Secondary / Outline:** White or background surface with Soft Divider border, muted hover fill, and foreground text.

### Chips

- **Style:** Muted Panel background, medium label text, `6px` to `8px` radius.
- **State:** Current chips are informational, not filters. Do not imply selection unless behavior exists.

### Cards / Containers

- **Corner Style:** `8px` to `10px` radius.
- **Background:** Workspace Paper for primary cards, Muted Panel for nested task tiles.
- **Shadow Strategy:** No shadow by default; use Preview Lift only for marketing preview surfaces.
- **Border:** Soft Divider, one pixel.
- **Internal Padding:** `16px` for compact app panels, `24px` for marketing and larger content panels.

### Inputs / Fields

- **Style:** Not yet implemented as a product pattern. Future fields should use Soft Divider strokes, Workspace Paper fill, `8px` radius, and clear label placement.
- **Focus:** Focus Ring with visible border shift.
- **Error / Disabled:** Use destructive tokens only for real validation errors. Disabled states should keep shape and lower opacity without hiding labels.

### Navigation

Marketing navigation is horizontal with icon and text labels, muted default text, and Muted Panel active or hover backgrounds. App navigation is separate from marketing and should stay compact, semantic, and workspace-focused. Active app nav should use `aria-current` and a visible state, not only color.

### Workflow Preview

The workflow preview is Taskbit's signature placeholder component. It should use realistic task language, clear columns, and restrained sample counts. It must always read as sample content until live data exists.

## 6. Do's and Don'ts

### Do:

- **Do** keep the product register primary. Marketing pages should point toward the app, not become the whole experience.
- **Do** use realistic placeholder content for issues, feedback, release checks, and integration signals.
- **Do** keep app panels scan-friendly with compact headings, stable grids, and no horizontal overflow in narrow browser panes.
- **Do** preserve semantic links and buttons for navigation and CTAs.
- **Do** use typography and spacing to create hierarchy before adding color or effects.

### Don't:

- **Don't** make Taskbit look like a starter template, a hype-heavy SaaS page, or a decorative dashboard mockup with fake analytics.
- **Don't** use dark-mode-by-default productivity cliches, purple-blue gradient surfaces, glassy cards, or hero metric templates.
- **Don't** repeat identical icon cards endlessly. Use cards only when they represent actual grouped information.
- **Don't** imply live integrations, production customer usage, signup flows, or connected data before those systems exist.
- **Don't** use colored side-stripe borders, gradient text, or decorative blur effects as shortcuts for visual interest.
