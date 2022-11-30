# Developer Notes

This was a one-off script, that was tested manually.

To test:

1. Copy the `testdata` directory to e.g. `temp`.
2. Run `npm start temp`
3. Verify that the output matches the following, and that the files have been
   renamed as claimed:

```text
Rename temp/Nov 1, 2022.markdown -> temp/2022-11-01.markdown
Rename temp/Nov 2nd, 2022.md -> temp/2022-11-02.md
Rename temp/subdir/Nov 3rd, 2022.md -> temp/subdir/2022-11-03.md
Renamed 3 files
```
