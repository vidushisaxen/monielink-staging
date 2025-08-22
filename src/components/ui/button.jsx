import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2  rounded-md text-sm font-medium transition-all ",
  {
    variants: {
      variant: {
        default:
          " text-primary-foreground ",
        destructive:
          "",
        outline:
          "",
        secondary:
          "b",
        ghost:
          "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 ",
        sm: "h-8 rounded-md gap-1.5 px-3 ",
        lg: "h-10 rounded-md px-6 ",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    (<Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />)
  );
}

export { Button, buttonVariants }
