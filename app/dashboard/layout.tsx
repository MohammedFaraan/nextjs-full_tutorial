import Link from "next/link";
import React from "react";

function DashboardCommanLayout({children} : {
    children: React.ReactNode
}) {
  return (
    <div className="flex">
      <aside className="w-64 p-4 border-r">
        <nav>
          <ul>
            <li>
              <Link href={"/dashboard"}>Dashboard Home</Link>
            </li>
            <li>
              <Link href={"/dashboard/analytics"}>Analytics Page</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 p-5">
        {children}
      </div>
    </div>
  );
}

export default DashboardCommanLayout;
