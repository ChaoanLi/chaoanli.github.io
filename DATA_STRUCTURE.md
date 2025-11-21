# 项目数据结构说明

## 📁 文件结构

```
项目根目录/
├── data/                    # 网站数据模块（新）
│   ├── index.ts            # 汇总导出
│   ├── profile.ts          # 个人信息
│   ├── publications.ts     # 发表论文
│   ├── timeline.ts         # 时间线事件
│   ├── projects.ts         # 项目列表
│   ├── resources.ts        # 资源链接
│   └── lists.ts            # 书籍/电影/技能/目标列表
│
├── content/                 # 内容文件（新）
│   └── blog/               # 博客文章（Markdown）
│       ├── README.md       # 博客管理说明
│       ├── *.md            # 文章文件
│       └── *.png/jpg       # 文章图片
│
├── public/                  # 静态资源
│   └── content/            # 博客文件的副本（自动同步）
│
├── constants.ts            # 主配置文件（简化版）
├── types.ts                # TypeScript 类型定义
└── pages/                  # 页面组件
    └── BlogPage.tsx        # 博客页面
```

## 🔄 数据流

### 旧结构（已弃用）
```
constants.ts (361行) → 包含所有数据 → 各个页面组件
```

### 新结构
```
data/*.ts → constants.ts → 各个页面组件
content/blog/*.md → BlogPage.tsx (动态加载)
```

## 📝 模块说明

### data/profile.ts
个人基本信息：
- 姓名、职位、单位
- 联系方式
- 研究兴趣
- 社交媒体链接

### data/publications.ts
学术论文列表：
- 论文标题
- 作者
- 发表期刊/会议
- 摘要
- 链接

### data/timeline.ts
时间线事件：
- 教育经历
- 工作经历
- 获奖记录
- 重要里程碑

### data/projects.ts
项目展示：
- 项目名称
- 描述
- 技术栈
- 在线链接
- GitHub 链接

### data/resources.ts
资源链接分类：
- 社交媒体
- 科研工具
- 学习资源
- 学术社区
- 等等...

### data/lists.ts
个人清单：
- 书籍列表
- 电影/剧集列表
- 技能进度
- 目标计划

## 🎯 博客系统

### 位置
- 源文件：`content/blog/*.md`
- 公开访问：`public/content/blog/*.md`（通过脚本同步）

### 管理方式
1. 在 `content/blog/` 创建/编辑 Markdown 文件
2. 运行同步命令将文件复制到 `public/` 目录
3. 在 `pages/BlogPage.tsx` 中添加文件名到列表
4. 刷新浏览器查看

详见：`content/blog/README.md`

## ✨ 优点

### 模块化
- 每个数据模块独立文件
- 易于查找和修改
- 减少文件长度

### 可维护性
- 博客文章独立维护
- 支持 Markdown 格式
- 支持图片引用
- 中英文分离清晰

### 可扩展性
- 添加新模块只需创建新文件
- 在 `data/index.ts` 导出
- 在 `constants.ts` 导入使用

## 🔧 修改数据

### 修改个人信息
编辑 `data/profile.ts`

### 添加论文
在 `data/publications.ts` 的数组中添加新对象

### 添加项目
在 `data/projects.ts` 的数组中添加新对象

### 添加博客文章
1. 在 `content/blog/` 创建新 `.md` 文件
2. 按照 frontmatter 格式编写
3. 同步到 public 目录
4. 在 `pages/BlogPage.tsx` 添加文件名

### 添加资源链接
在 `data/resources.ts` 的对应分类中添加链接

## 🚀 部署注意事项

构建时需要确保：
1. `content/blog/` 的文件同步到 `public/content/blog/`
2. 所有 data 模块文件都被正确导入
3. `pages/BlogPage.tsx` 中的文章列表是最新的

可以考虑在构建脚本中自动执行文件同步。

