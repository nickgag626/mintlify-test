// components/MethodBlock.tsx
import React, { ReactNode } from "react";
import "./method-block.css";

type MethodBlockProps = {
  name: string;
  signature: string;
  children: ReactNode;        // prose: params/returns/etc
  code: string;               // code sample to render on the right
  language?: string;
};

export function MethodBlock({
  name,
  signature,
  children,
  code,
  language = "ts",
}: MethodBlockProps) {
  return (
    <section className="method-block">
      <div className="method-block-main">
        <h3 id={name}>
          <code>{name}</code>
        </h3>
        <pre className="method-block-signature">
          <code>{signature}</code>
        </pre>
        <div className="method-block-content">{children}</div>
      </div>

      <aside className="method-block-code">
        <div className="method-block-code-inner">
          <div className="method-block-code-header">
            <span>{language}</span>
          </div>
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </aside>
    </section>
  );
}
