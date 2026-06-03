import Link from "next/link";

type MoviesPaginationProps = {
  moviesTotal: string;
  q: string;
  page: number;
};

export const MoviesPagination = ({
  moviesTotal,
  q,
  page,
}: MoviesPaginationProps) => {
  const pages = Math.ceil(Number(moviesTotal) / 10);

  return (
    <div className="flex gap-5">
      {page > 1 && (
        <Link href={`/movies?q=${q}&page=${page - 1}`}>Previous</Link>
      )}
      {page} of {pages}
      {page < pages && (
        <Link href={`/movies?q=${q}&page=${page + 1}`}>Next</Link>
      )}
    </div>
  );
};
