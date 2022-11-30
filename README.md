# Normalize Daily Journal Dates

Rename files with date names to ISO standard, e.g. `journals/Nov 1st, 2022.md`
to `'journals/2022-10-01.md`.

I used this for migrating from Roam to Obsidian + Logseq.

(Obsidian and Logseq can be configurd to use different date formats, but I
decided I'd rather have them in ISO anyway.)

Installation:

1. Clone this repo.
2. `npm install`

Usage:

```shell
normalize-daily-journal-dates /path/to/journals --dry-run
```

Inspect the results, and run again without `--dry-run` after you have verified
that it does what you want.

## License

Copyright 2022 by Oliver Steele.

Available under the ISC free software license.
