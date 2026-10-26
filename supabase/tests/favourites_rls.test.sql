begin;

select plan(6);

insert into auth.users (id, email)
values
  ('11111111-1111-1111-1111-111111111111', 'owner@example.test'),
  ('22222222-2222-2222-2222-222222222222', 'other@example.test');

set local role authenticated;
set local request.jwt.claim.sub = '11111111-1111-1111-1111-111111111111';

select lives_ok(
  $$insert into public.favourites (resource_id) values ('skill-example-001')$$,
  'an authenticated user can create their own favourite'
);

select is(
  (select count(*)::integer from public.favourites),
  1,
  'the owner can read their favourite'
);

set local request.jwt.claim.sub = '22222222-2222-2222-2222-222222222222';

select is(
  (select count(*)::integer from public.favourites),
  0,
  'another user cannot read the owner favourite'
);

select throws_ok(
  $$insert into public.favourites (user_id, resource_id)
    values ('11111111-1111-1111-1111-111111111111', 'skill-forged-001')$$,
  '42501',
  null,
  'a user cannot create a favourite for another user'
);

select lives_ok(
  $$delete from public.favourites
    where user_id = '11111111-1111-1111-1111-111111111111'$$,
  'a forbidden delete reveals no row and does not error'
);

reset role;

select is(
  (
    select count(*)::integer
    from public.favourites
    where user_id = '11111111-1111-1111-1111-111111111111'
  ),
  1,
  'the other user could not delete the owner favourite'
);

select * from finish();
rollback;
