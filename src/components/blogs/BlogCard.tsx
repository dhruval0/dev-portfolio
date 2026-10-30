import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { BlogItem } from "@/types";
import { blogCardStyles as s } from "./BlogCard.styles";

type BlogCardProps = {
  blog: BlogItem;
};

export function BlogCard({ blog }: BlogCardProps) {
  const external = blog.href.startsWith("http");

  return (
    <a
      href={blog.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={s.link}
    >
      <div className={s.imageWrap}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className={s.image}
        />
      </div>

      <div className={s.body}>
        <div className={s.meta}>
          <Badge tone="accent">{blog.platform}</Badge>
          <span className={s.date}>{blog.date}</span>
        </div>
        <h3 className={s.title}>{blog.title}</h3>
        <p className={s.excerpt}>{blog.excerpt}</p>
        <span className={s.cta}>Read on {blog.platform} →</span>
      </div>
    </a>
  );
}
