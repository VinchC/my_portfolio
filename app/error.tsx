"use client"

import Link from "next/link";
export default function Error() {
  return (
    <>
      <main>
        <div className="text-center flex flex-col gap-4">
          <p>Oops</p>
          <h1>Something went wrong!</h1>
          <p>There was an error processing your request.</p>
          <Link href="/">Back to home</Link>
        </div>
      </main>
    </>
  );
}
// "use client";

// import { redirect } from "next/navigation";
// import { useEffect } from "react";

// const Error = ({ error, reset }: { error: any, reset: any }) => {
//   useEffect(() => {
//     console.error(error);
//   }, [error]);
//   return (
//     <div className="text-center flex flex-col gap-4">
//       <p>Something went wrong !</p>
//       <button onClick={() => reset()}>Try again</button>
//       <button onClick={() => redirect("/")}>Back to home page</button>
//     </div>
//   );
// };
// export default Error;