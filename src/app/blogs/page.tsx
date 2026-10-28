import { BlogCard } from "@/components/blogs/BlogCard";
import { BackToDesk } from "@/components/layout/BackToDesk";
import { PageHeader } from "@/components/layout/PageHeader";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-8">
      <BackToDesk />
      <PageHeader
        title="Blogs"
        description="Longer pieces I publish on Substack and Medium — linked here so the desk stays the home base."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
