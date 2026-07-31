# Description

<!-- Describe what's in this PR / what it does -->


## Review checks

<!-- No author action required beyond this point -->

### Metadata

#### Frontmatter
- [ ] `<DocMetadata />` component at top of document
- [ ] `docType`
    - `journey` - A page of curated suggested documents for a persona or purpose
    - `explanation` per [Diataxis]
    - `tutorial` per [Diataxis]
    - `guide` per [Diataxis]
    - `reference` per [Diataxis]
    - Category or splash pages do not require this
- [ ] `readingTime` in [ISO 8601 Duration] format
    - Only required for `explanation`, `tutorial` and `guide`
- [ ] `audiences` - one or more target audiences for the content
    - `federation-operator`
    - `tre-operator`
    - `researcher`
    - `integrator`
    - `contributor`
    - `everyone`

#### Content

- [ ] Prerequisites, if appropriate
- [ ] Next steps, if appropriate

[diataxis]: https://diataxis.fr/
[ISO 8601 Duration]: https://en.wikipedia.org/wiki/ISO_8601#Durations