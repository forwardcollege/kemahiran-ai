"use client";

import * as React from "react";
import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

export type SelectOption = {
  value: string;
  label: string;
};

export function Select({
  value,
  onValueChange,
  options,
  label,
  leadingIcon,
  className,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  label: string;
  leadingIcon?: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const [activeIndex, setActiveIndex] = React.useState(selectedIndex);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const optionRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const closeAndReturnFocus = React.useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  React.useEffect(() => {
    if (!open) return;

    const focusFrame = requestAnimationFrame(() => {
      optionRefs.current[activeIndex]?.focus();
    });
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [activeIndex, open]);

  const focusOption = (index: number) => {
    const nextIndex = (index + options.length) % options.length;
    setActiveIndex(nextIndex);
    optionRefs.current[nextIndex]?.focus();
  };

  const choose = (nextValue: string) => {
    onValueChange(nextValue);
    closeAndReturnFocus();
  };

  const selectedOption = options[selectedIndex];

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        className="catalogue-sort-trigger inline-flex h-11 w-full min-w-36 items-center justify-between gap-2 rounded-lg border border-border bg-card px-3 text-sm font-bold text-foreground outline-none transition-colors hover:border-foreground/35 focus-visible:border-primary focus-visible:ring-3 focus-visible:ring-ring/25"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setActiveIndex(selectedIndex);
          setOpen((current) => !current);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex(selectedIndex);
            setOpen(true);
          }
        }}
      >
        {leadingIcon}
        <span className="flex-1 text-left">{selectedOption?.label}</span>
        <CaretDownIcon
          className={cn("transition-transform", open && "rotate-180")}
          aria-hidden="true"
          weight="bold"
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={label}
          className="absolute top-[calc(100%+0.375rem)] right-0 z-60 min-w-full overflow-hidden rounded-lg border border-border bg-card p-1 text-card-foreground shadow-[0_16px_40px_rgba(11,17,32,0.16)]"
        >
          {options.map((option, index) => (
            <button
              key={option.value}
              ref={(element) => {
                optionRefs.current[index] = element;
              }}
              type="button"
              role="option"
              aria-selected={option.value === value}
              className={cn(
                "relative flex min-h-10 w-full cursor-default items-center rounded-md py-2 pr-9 pl-3 text-left text-sm font-semibold text-foreground outline-none hover:bg-secondary focus:bg-secondary focus:text-secondary-foreground",
                option.value === value && "bg-secondary",
              )}
              onFocus={() => setActiveIndex(index)}
              onClick={() => choose(option.value)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  focusOption(index + 1);
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  focusOption(index - 1);
                } else if (event.key === "Home") {
                  event.preventDefault();
                  focusOption(0);
                } else if (event.key === "End") {
                  event.preventDefault();
                  focusOption(options.length - 1);
                } else if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  choose(option.value);
                } else if (event.key === "Escape") {
                  event.preventDefault();
                  closeAndReturnFocus();
                } else if (event.key === "Tab") {
                  setOpen(false);
                }
              }}
            >
              {option.label}
              {option.value === value ? (
                <CheckIcon
                  className="absolute right-3 size-4 text-primary"
                  aria-hidden="true"
                  weight="bold"
                />
              ) : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
