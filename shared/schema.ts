import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, jsonb, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Media Library
export const media = pgTable("media", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  filename: text("filename").notNull(),
  url: text("url").notNull(),
  type: varchar("type", { length: 50 }).notNull(), // image, video, document
  mimetype: varchar("mimetype", { length: 100 }).notNull(),
  size: integer("size").notNull(), // in bytes
  uploadedAt: timestamp("uploaded_at").defaultNow(),
});

// Email Templates
export const emailTemplates = pgTable("email_templates", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().unique(),
  subject: text("subject").notNull(),
  htmlContent: text("html_content").notNull(),
  variables: jsonb("variables").default(sql`'[]'::jsonb`), // ["{{name}}", "{{email}}"]
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Languages
export const languages = pgTable("languages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  code: varchar("code", { length: 10 }).notNull().unique(), // pt-BR, en-US
  name: text("name").notNull(),
  nativeName: text("native_name").notNull(),
  isEnabled: boolean("is_enabled").default(true),
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Language Strings (translations)
export const languageStrings = pgTable("language_strings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  languageId: varchar("language_id")
    .notNull()
    .references(() => languages.id, { onDelete: "cascade" }),
  key: text("key").notNull(),
  value: text("value").notNull(),
  context: varchar("context", { length: 100 }), // "email", "ui", "error"
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Media = typeof media.$inferSelect;
export type EmailTemplate = typeof emailTemplates.$inferSelect;
export type Language = typeof languages.$inferSelect;
export type LanguageString = typeof languageStrings.$inferSelect;
