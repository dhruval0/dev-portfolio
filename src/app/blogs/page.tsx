import { BlogCard } from "@/components/blogs/BlogCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { blogs } from "@/data/blogs";
import { blogsPageStyles as s } from "./page.styles";

export default function BlogsPage() {
  return (
    <div className={s.root}>
      <SubpageNav />
      <PageHeader
        title="Blogs"
        description="Longer pieces I publish on Substack and Medium — linked here so the desk stays the home base."
      />

      <div className={s.grid}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
