import registry from '../../research-library.json';
import {bookDocId as sourceDocId} from './bookPaths.mjs';

export type Chapter = string | {
  label: string;
  index?: string;
  chapters: Chapter[];
};

export type ResearchBook = {
  project: string;
  sidebarId: string;
  label: string;
  title: string;
  description: string;
  featured?: boolean;
  chapters: Chapter[];
  supplemental?: string[];
};

export const researchBooks: ResearchBook[] = registry;
export const bookDocId = (book: ResearchBook, path: string) =>
  sourceDocId(book.project, path);
// Link receives a site-relative route; Docusaurus applies baseUrl once.
export const bookRoute = (book: ResearchBook) =>
  `/docs/projects/${book.project}/book/`;
