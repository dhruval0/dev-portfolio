import { BlogCard } from "@/components/blogs/BlogCard";
import { BackToDesk } from "@/components/layout/BackToDesk";
import { PageHeader } from "@/components/layout/PageHeader";
import { blogs } from "@/data/blogs";
import { blogsPageStyles as s } from "./page.styles";

export default function BlogsPage() {
  return (
    <div className={s.root}>
      <BackToDesk />
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
