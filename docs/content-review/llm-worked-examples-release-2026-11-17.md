# LLM Prompt worked-example release — 17 November 2026

Howie Chang approved the 13 revised bilingual worked examples and authorised production deployment with the Next.js security update on 17 November 2026. The release also includes the requested file-input guidance across all 14 LLM Prompts, including KBAT.

The examples now supply every declared input, demonstrate the requested output, distinguish source facts from uncertainty, and provide practical teacher or reviewer guidance. Users can supply supported attachments instead of retyping source documents. Each example shows a file reference; canonical prompts verify source access before processing. Gemini guidance describes adding files from Drive without promising access from a pasted URL alone.

All 14 records receive a minor version increment, an update/review date of 17 November 2026 and a next-review date of 17 May 2027. Existing resource IDs, slugs, specialist-review disclosures and tool-test claims are preserved. This editorial approval does not imply new behavioural testing with Gemini or specialist review. Existing catalogue visibility settings are retained.

The security update pins Next.js and eslint-config-next to 16.4.6. The isolated security commit passed the production dependency audit with no known vulnerabilities; the full audit retained one moderate development-only minimatch advisory.

Release verification covers formatting, lint, TypeScript, all 27 unit/integration tests, validation of all 36 records and relationships, bilingual source-variable coverage, a production build, and focused live checks after deployment. File-upload and connected-Drive behaviour is documented from Google's help rather than claimed as newly tested compatibility:

- <https://support.google.com/gemini/answer/14903178?hl=en>
- <https://support.google.com/gemini/answer/15229592?hl=en>
