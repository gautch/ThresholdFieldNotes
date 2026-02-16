# THRESHOLD FIELD NOTES - BRANDING GUIDE

## Logo Options

You have two beautiful logo variations that work in different contexts:

### 1. UNDERLINED VERSION (underlined.png)
**Best for:**
- Main website header (currently default)
- Hero sections
- Page headers
- Digital marketing
- Social media profile images
- When you want a clean, editorial look

**Characteristics:**
- Cleaner, more modern
- Works well at smaller sizes
- Strong horizontal lines create stability
- Classic typography with elegant underlines

### 2. BOXED VERSION (Boxed.png)
**Best for:**
- Footer branding (currently default)
- Merchandise (patches, stickers, t-shirts)
- Physical signage
- "Official" badges and credentials
- Field notebooks and documentation
- When you want that vintage field journal feel
- Shows "EST. 2026" (nice touch!)

**Characteristics:**
- More contained, badge-like
- Vintage naturalist/expedition aesthetic
- Works great on physical products
- The frame gives it authority and heritage feel

## Current Implementation

### Website Header
```html
<!-- Using underlined version -->
<img src="underlined.png" alt="Threshold Field Notes" class="logo-img logo-underlined">
```

To switch to boxed:
```html
<!-- Uncomment this line -->
<img src="Boxed.png" alt="Threshold Field Notes" class="logo-img logo-boxed">
<!-- And comment out the underlined version -->
```

### Website Footer
```html
<!-- Using boxed version -->
<img src="Boxed.png" alt="Threshold Field Notes" class="footer-logo-img">
```

## Color Treatment

The CSS automatically handles color:
- **Dark backgrounds** (header, footer): Logos are inverted to white
- **Light backgrounds**: Logos show in black
- **Amber accent**: The "RESEARCH STATION" subtitle uses amber color

This is done with CSS:
```css
filter: brightness(0) invert(1); /* Makes black logo white */
```

## Usage Recommendations

### Scenario-Based Guide:

**Scenario: Homepage**
- Header: Underlined version (clean, welcoming)
- Footer: Boxed version (official, authoritative)

**Scenario: Merchandise Design**
- T-shirts: Boxed version
- Stickers: Boxed version
- Patches: Boxed version
- Notebooks: Boxed version
- Mugs: Either works, boxed feels more "official"

**Scenario: Social Media**
- Profile image: Boxed (reads better at small sizes, more distinctive)
- Headers/Banners: Underlined (horizontal layout works better)
- Posts: Either, depends on mood

**Scenario: Field Reports/Documents**
- Header: Underlined (professional, clean)
- Watermark: Boxed at low opacity
- Footer: Boxed (official stamp feel)

**Scenario: Observer Credentials/Badges**
- Definitely boxed version
- The frame makes it feel like an official ID

**Scenario: Email Newsletters**
- Header: Underlined (better for email width)
- Signature: Boxed (compact, distinctive)

## Mixing Both Logos

You can absolutely use both on the same page in different contexts:
- **Header navigation**: Underlined (primary logo)
- **Footer**: Boxed (secondary/official stamp)
- **Merchandise section**: Boxed (shows what products look like)
- **About page**: Both (show brand evolution/options)

This creates visual hierarchy and gives each logo purpose.

## Typography Pairing

The logos use what appears to be a classic serif (possibly Playfair Display or similar).

Your site pairs this with:
- **IBM Plex Mono** - For timestamps, data, technical info
- **Crimson Pro** - For body text, descriptions
- **Space Grotesk** - For UI elements, headings

This creates a nice hierarchy:
- Logo = Heritage/Classic
- Headings = Modern/Technical
- Body = Readable/Natural
- Data = Tactical/Precise

## File Management

Both logo files are included in your site package:
- `underlined.png` - Primary logo option
- `Boxed.png` - Secondary logo option (note the capital B)

Make sure both are always in your root directory so you can switch between them easily.

## Practical Application Examples

### Example 1: Product Tag
```
[Boxed Logo]
OBSERVER CREDENTIALS
Official Field Gear
```

### Example 2: Website Header
```
[Underlined Logo]
RESEARCH STATION
[Navigation Links]
```

### Example 3: Field Report Letterhead
```
[Underlined Logo - Left Aligned]

INCIDENT REPORT LS-026
Date: 2026.02.14
Location: PERIMETER-W
...

[Boxed Logo - Small, Bottom Right Corner]
```

### Example 4: Merchandise Tag
```
[Boxed Logo - Large, Centered]

AUTHENTIC FIELD GEAR
EST. 2026
```

## The "THRESHOLD" Element

I notice your logos say "THRESHOLD FIELD NOTES" - this is perfect! It adds:
- **Mystery**: "Threshold" implies a boundary, crossing over
- **Scientific credibility**: Threshold as a measurement term
- **Narrative depth**: What threshold? Between what and what?

This could be played up in copy:
- "At the threshold between known and unknown"
- "Documenting life at the threshold"
- "Where wilderness meets mystery"

Consider using "Threshold" more prominently in certain contexts:
- Hero section tagline
- About page story
- Product descriptions ("Threshold-tested field gear")

## Brand Voice with These Logos

The underlined version says:
- "We're professional researchers"
- "Clean, documented, methodical"
- "Trust our observations"

The boxed version says:
- "We've been doing this since 2026" (heritage)
- "Official field operation"
- "Authentic gear and credentials"
- "Join our established organization"

Both work together to say:
"This is a real, professional operation... documenting very strange things."

Perfect balance for your concept!

---

## Quick Reference

**Default Setup (Recommended):**
- Header: Underlined
- Footer: Boxed
- Merchandise mockups: Boxed
- Social profile: Boxed
- Email signature: Boxed

**When to Switch:**
- If you want more "official" feel everywhere: Use boxed for both
- If you want more modern/editorial feel: Use underlined for both
- Mix them strategically for visual interest

The current mix (underlined header + boxed footer) is perfect - gives you the best of both worlds!
