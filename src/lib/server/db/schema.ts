import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const videos = sqliteTable('videos', {
    id: text('id').primaryKey(),
    title: text('title').notNull(),
    url: text('url').notNull(),
    publishDate: integer('publish_date', { mode: 'timestamp' }).notNull(),
});
