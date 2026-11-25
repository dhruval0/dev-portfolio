import { BlogCard } from "@/components/blogs/BlogCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerItem } from "@/components/ui/Stagger";
import { blogs } from "@/data/blogs";
import { blogsPageStyles as s } from "./page.styles";

export default function BlogsPage() {
  return (
    <div className={s.root}>
      <Reveal delay={20}>
        <SubpageNav />
      </Reveal>
      <Reveal delay={80}>
        <PageHeader
          title="Blogs"
          description="Writing on Medium — Elasticsearch, Docker, Git, Nginx, and more. Open any card to read the full post."
        />
      </Reveal>

      <div className={s.grid}>
        {blogs.map((blog, index) => (
          <StaggerItem
            key={blog.id}
            index={index}
            baseDelay={120}
            step={65}
            className="h-full"
          >
            <BlogCard blog={blog} />
          </StaggerItem>
        ))}
      </div>
    </div>
  );
}
