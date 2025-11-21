import { AppData } from './types';
import { profile } from './data/profile';
import { publications } from './data/publications';
import { timeline } from './data/timeline';
import { projects } from './data/projects';
import { resources } from './data/resources';
import { lists } from './data/lists';

/**
 * 网站主配置数据
 * 
 * 注意：博客文章现在通过 Markdown 文件独立维护
 * 位置：content/blog/*.md
 * 
 * 各模块数据文件位置：
 * - 个人信息：data/profile.ts
 * - 发表论文：data/publications.ts
 * - 时间线：data/timeline.ts
 * - 项目：data/projects.ts
 * - 资源链接：data/resources.ts
 * - 列表数据：data/lists.ts
 */
export const SITE_DATA: AppData = {
  profile,
  publications,
  timeline,
  blog: [], // 博客已迁移到 content/blog/*.md 文件中独立维护
  resources,
  projects,
  lists
};
