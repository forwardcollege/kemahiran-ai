# Supabase migration history

## Repair recorded on 17 November 2026

Howie Chang authorised repairing the missing Supabase migration history while preserving all existing data.

The `Supabase Preview` check for release commit `fe235e7` failed because migration `202610260001_create_favourites.sql` attempted to create `public.favourites`, which already existed in `kemahiran-ai-prod`. The production project was healthy, but its existing `supabase_migrations.schema_migrations` table contained no entries.

Before repair, the live table was compared with the repository migration:

- Three columns, with matching types, nullability and defaults.
- Composite primary key, resource-ID length constraint and cascading user foreign key.
- RLS enabled, with the three expected owner-only SELECT, INSERT and DELETE policies.
- Authenticated SELECT/INSERT/DELETE permissions; no anonymous access or authenticated UPDATE permission.
- Four existing favourites, with an aggregate checksum recorded privately for before/after comparison.

Only a migration-history row was inserted: version `202610260001`, name `create_favourites`, and the seven original SQL statements for faithful migration fetching and replay. The statements were recorded as metadata, not executed. This is the same history-reconciliation operation as marking the migration applied with `supabase migration repair`.

The repair ran in one transaction with a short lock timeout, a shared lock on the favourites table, checks for concurrent schema/history changes, and a row-count/checksum comparison before commit. Afterwards, the original table identity and RLS remained in place; the count was still four and the checksum was identical. No application data was inserted, updated, deleted or exported. The repository migration was not changed.

The production branch was then resynced through the Supabase dashboard. Its workflow completed with `FUNCTIONS_DEPLOYED`, and the replacement [Supabase Preview check](https://github.com/forwardcollege/kemahiran-ai/runs/133845607389) on release commit `fe235e7` passed. A further query confirmed that the stored migration statements exactly match the repository and all four favourites remain.

Preflight health advisors reported no issues. Separate security-advisor warnings about the existing `public.rls_auto_enable()` function's execution permissions were observed and are outside this history-only repair; they require a separate review. A password-protection notice also remains; this application uses Google OAuth only. This repair is not a full database security audit.

## Procedure for future drift

1. Confirm the exact project and environment. Read the failing check and migration before acting.
2. Compare live columns, constraints, policies, privileges and RLS with the migration. Do not mark a migration applied when its effects are missing or differ.
3. Record an aggregate row count and deterministic checksum without exporting personal data. Recheck under a transaction if concurrent writes could affect the comparison.
4. If the migration is already fully represented in the schema, use the installed CLI's supported history-repair command to mark that exact version applied. Discover flags with `supabase migration repair --help`; CLI v3 defaults to local, so explicitly select the intended remote project. The authenticated management SQL connection may repair the history row when the CLI is unavailable; keep the change limited to migration metadata and preserve the original statements.
5. Verify the recorded version/name/statements, unchanged table identity, data checksum, row count, RLS and policies. Confirm no repository migration remains pending on that project.
6. Retry the affected deployment/check and inspect the outcome. A historical failed check does not become successful solely because its underlying cause has been repaired.

Use a feature branch and pull request for repository changes. Keep administrative repair SQL out of `supabase/migrations/`: it is a one-time correction of the existing environment, not a new application-schema migration. Do not reset or recreate a live database to resolve missing history, and do not hide schema mismatches with an unconditional `IF NOT EXISTS` edit.

## References

- [Supabase migration tracking and sync repair](https://supabase.com/docs/guides/deployment/database-migrations)
- [Supabase migration repair CLI](https://supabase.com/docs/reference/cli/supabase-migration-repair)
- [Failed release check](https://github.com/forwardcollege/kemahiran-ai/runs/133838557929)
