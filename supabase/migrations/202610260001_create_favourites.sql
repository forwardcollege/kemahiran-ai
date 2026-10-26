create table public.favourites (
  user_id uuid not null default auth.uid() references auth.users (id) on delete cascade,
  resource_id text not null check (char_length(resource_id) between 1 and 160),
  created_at timestamptz not null default now(),
  primary key (user_id, resource_id)
);

alter table public.favourites enable row level security;

revoke all on table public.favourites from anon, authenticated;
grant select, insert, delete on table public.favourites to authenticated;

create policy "Users can read their own favourites"
on public.favourites
for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "Users can create their own favourites"
on public.favourites
for insert
to authenticated
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "Users can delete their own favourites"
on public.favourites
for delete
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);
