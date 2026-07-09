/*
-- Create contact_messages table

-- Purpose
Stores messages submitted through the portfolio contact form. No authentication required
-- this is a public portfolio site so visitors submit without logging in.

-- New Tables
-- - contact_messages
--   - id (uuid, primary key, auto-generated)
--   - name (text, required) — sender's full name
--   - email (text, required) — sender's email address
--   - subject (text, optional) — message subject
--   - message (text, required) — the message body
--   - created_at (timestamptz) — submission timestamp, defaults to now()

-- Security
-- - RLS enabled on contact_messages
-- - INSERT allowed to anon + authenticated (public contact form, no login needed)
-- - SELECT allowed to anon + authenticated (owner can view via Supabase dashboard)
-- - No UPDATE or DELETE policies (messages are immutable once submitted)
*/

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS contact_messages (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text        NOT NULL,
  subject    text,
  message    text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_messages" ON contact_messages;
CREATE POLICY "public_insert_messages" ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "public_select_messages" ON contact_messages;
CREATE POLICY "public_select_messages" ON contact_messages FOR SELECT
TO anon, authenticated
USING (true);
