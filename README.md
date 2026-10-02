# LK Baltica — balticabylk.shop

Static brochure site for **LK BALTICA LIMITED**, built with Astro and published on
GitHub Pages at <https://balticabylk.shop>.

## Registered company details

Every value below comes from the public register and was last checked on
2 October 2026.

| | |
|---|---|
| Registered name | LK BALTICA LIMITED |
| Company number | 10649254 |
| Registered in | England and Wales |
| Registered office | Chris Syrimis & Co., 97 Judd Street, London, United Kingdom, WC1H 9JG |
| Company type | Private limited company |
| Incorporated | 2 March 2017 |
| Register status | Active |
| Director | Kyriacos Kyriacou |
| Public record | https://find-and-update.company-information.service.gov.uk/company/10649254 |

### Nature of business (SIC)

| Code | Description |
|---|---|
| 63990 | Other information service activities not elsewhere classified |
| 69102 | Solicitors |
| 70229 | Management consultancy activities other than financial management |
| 96090 | Other service activities not elsewhere classified |

Section 82 of the Companies Act 2006 requires the registered name, company
number, place of registration and registered office to appear on the website.
The footer does this on every page, and `npm run check` fails if any of the
three is missing from a built page.

## What still needs filling in

`src/data/site.ts` > `contact` and `social` are deliberately empty. Nothing is
invented, so an empty value simply removes its card or line from the page. Run
`npm run check` for the current checklist.

## Commands

| Command | What it does |
|---|---|
| `npm install` | install dependencies |
| `npm run dev` | local dev server |
| `npm run build` | build to `dist/` |
| `npm run check` | build, then the full quality check (contrast, dead links, statutory disclosure, forbidden claims) |

## Editing the content

| File | Holds |
|---|---|
| `src/data/site.ts` | facts: register details, contact, navigation, SEO |
| `src/data/overrides.ts` | this site's page copy |
| `src/data/copy.ts` | the shared base copy that overrides are merged over |
| `src/styles/theme.css` | the whole visual identity (colours, fonts, radii) |

Theme: `mono`, layout family `mono`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: quality check, build,
then deploy to GitHub Pages. A failing check blocks the deploy.
