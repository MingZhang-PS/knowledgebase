import { EntityState } from '@ngrx/entity';
import { KnowledgeArticle } from '../models/KnowledgeArticle';

export interface KBState extends EntityState<KnowledgeArticle> {
  isLoading?: boolean;
  loaded?: boolean;
  currentPage?: number;
  totalObjectCount?: number;
  readonly pageSize?: number;
  search?: string;
  selectedId?: string;
}
