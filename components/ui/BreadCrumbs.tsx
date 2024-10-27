import Link from "next/link";
import { FiChevronRight } from "react-icons/fi"; // Icon import from react-icons

interface Path {
  href: string;
  label: string;
}

interface BreadCrumbProps {
  paths: Path[];
}

const BreadCrumbs = ({ paths }: BreadCrumbProps) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex list-none p-0 m-0">
        {paths.map((path, index) => {
          const isLast = index === paths.length - 1;
          return (
            <li key={index} className="flex items-center">
              {!isLast ? (
                <Link href={path.href}>
                  <a className="text-blue-600 hover:underline">{path.label}</a>
                </Link>
              ) : (
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full">
                  {path.label}
                </span>
              )}
              {!isLast && (
                <span className="mx-2">
                  <FiChevronRight />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
