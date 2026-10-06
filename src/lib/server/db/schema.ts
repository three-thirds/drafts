import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';

export const task = pgTable('task', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});

export const draft = pgTable('draft', {
	id: serial('id').primaryKey(),
	name: text('title').notNull(),
	tagline: text('tagline').notNull(),
	description: text('description').notNull(),
	format: text('format').notNull(),
	slack_channel: text('slack_channel').notNull(),
	slack_id: text('slack_id').notNull(),
	slack_channel_id: text('slack_channel_id').notNull(),
	background_image: text('background_image').notNull(),
	logo_image: text('logo_image').notNull(),
})

export *  from './auth.schema';
