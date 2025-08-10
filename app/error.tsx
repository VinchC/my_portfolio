"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "./styles/not-found.css";

import Link from "next/link";
export default function Error() {
  return (
    <>
      <section className="error-container">
        <span>O</span>
        <span>O</span>
        <span>P</span>
        <span>S</span>
      </section>
      <div className="text-center flex flex-col gap-4">
        <p>Something went wrong!</p>
        <p>There was an error processing your request.</p>
        <div className="link-container">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "more-link bg-foreground text-background border border-border"
            )}
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </>
  );
}
