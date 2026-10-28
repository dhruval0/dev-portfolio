import {
  pageHeaderStyles as s,
  pageHeaderTapeBackground,
} from "./PageHeader.styles";

type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className={s.root}>
      <div className={s.titleWrap}>
        <span aria-hidden className={s.tape} style={pageHeaderTapeBackground} />
        <h1 className={s.title}>{title}</h1>
      </div>
      <p className={s.description}>{description}</p>
    </div>
  );
}
