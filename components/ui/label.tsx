"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Define label variants using cva for styling
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

// Define the types for the props of the Label component
interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  className?: string; // Optional className prop
}

// Forward ref and define Label component
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>, // Define the type for the forwarded ref
  LabelProps // Props for the component
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)} // Apply variant styles and additional classes
    {...props} // Spread other props
  />
));

// Set the displayName for debugging purposes
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
