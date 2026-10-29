import type { NoteBlock } from "@/types";
import { noteModalStyles as s } from "./NoteModal.styles";

type NoteBlocksProps = {
  blocks: NoteBlock[];
};

/** Renders typed note blocks — logic-free view */
export function NoteBlocks({ blocks }: NoteBlocksProps) {
  return (
    <div className={s.blocks}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            return (
              <h3 key={key} id={`note-h-${index}`} className={s.heading}>
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={key} className={s.paragraph}>
                {block.text}
              </p>
            );
          case "callout":
            return (
              <blockquote key={key} className={s.callout}>
                {block.text}
              </blockquote>
            );
          case "flow":
            return (
              <p key={key} className={s.flow}>
                {block.text}
              </p>
            );
          case "pin":
            return (
              <p key={key} className={s.pin}>
                📌 {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={key} className={s.list}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "table":
            return (
              <table key={key} className={s.table}>
                <thead>
                  <tr>
                    {block.headers.map((header) => (
                      <th key={header} className={s.th}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("-")}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${cell}-${cellIndex}`}
                          className={cellIndex === 0 ? s.tdKey : s.td}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          case "divider":
            return <hr key={key} className={s.divider} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
