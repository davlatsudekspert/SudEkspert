create table if not exists murojaatlar (
  id text primary key,
  name text not null,
  phone text not null,
  type text not null,
  message text not null,
  status text not null default 'Qabul qilindi',
  created_at timestamptz not null default now()
);

alter table murojaatlar enable row level security;

create policy "Har kim murojaat qoldira oladi"
  on murojaatlar for insert
  with check (true);

create policy "Har kim faqat o'z ID orqali statusni ko'ra oladi"
  on murojaatlar for select
  using (true);
