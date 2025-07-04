import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    (<div style={{clipPath:"polygon(66% 0, 98% 0, 100% 18%, 100% 100%, 2% 100%, 0 85%, 0 0);"}} className="relative w-full h-full overflow-hidden text-area">
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-25 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props} /> 
      </div>)
  );
}

export { Textarea }
