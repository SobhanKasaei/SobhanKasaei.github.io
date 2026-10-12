# sobhankasaei.github.io

Personal academic website of Sobhan Kasaei, built with plain [Jekyll](https://jekyllrb.com/) and no theme gem.
GitHub Pages builds it automatically on every push (Settings → Pages → Source: *Deploy from a branch*, `main`, `/ (root)`).

## Updating content

Most content lives in YAML files, so an update is usually a one-line edit:

| What | File |
|---|---|
| Name, links, photo, CV path | `_config.yml` (`author:`) |
| Navigation menu | `_config.yml` (`navigation:`) |
| Bio and research interests | `index.md` |
| Papers (status, optional venue and abstract) | `_data/publications.yml` |
| Education | `_data/education.yml` |
| CV | replace `files/SobhanKasaei_CV.pdf` |

To add a Google Scholar link, uncomment `google_scholar:` in `_config.yml`; the sidebar picks it up.
An `abstract:` on a paper adds an "Abstract" button to it on the Publications page only.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Structure

```
_config.yml        site settings, profile, navigation
_data/             content (papers, education)
_includes/         head, masthead, sidebar, icons, list partials
_layouts/          default (masthead + sidebar), page
assets/css/        main.css (light and dark themes)
assets/fonts/      self-hosted Inter and Source Serif 4
files/             CV
```
