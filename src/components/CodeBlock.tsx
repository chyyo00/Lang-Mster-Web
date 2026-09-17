export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--code-bg)] p-4 text-left text-[13px] leading-relaxed text-[var(--text-h)]">
      <code>{code}</code>
    </pre>
  )
}
