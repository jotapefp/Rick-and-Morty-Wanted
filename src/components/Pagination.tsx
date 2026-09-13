import { useCharacterContext } from "../context/CharacterContext";
import classes from "./Pagination.module.css";

function getPageItems(current: number, total: number): (number | string)[] {
  const maxVisible = 7;
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const items: (number | string)[] = [];
  const showLeftDots = current > 4;
  const showRightDots = current < total - 3;

  items.push(1);

  if (showLeftDots) {
    items.push("left-dots");
  } else {
    for (let i = 2; i < Math.min(5, total); i++) items.push(i);
  }

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) {
    if (!items.includes(i)) items.push(i);
  }

  if (showRightDots) {
    items.push("right-dots");
  } else {
    for (let i = Math.max(total - 3, 2); i < total; i++) {
      if (!items.includes(i)) items.push(i);
    }
  }

  if (total > 1) items.push(total);

  return items;
}

const Pagination = () => {
  const { currentPage, totalPages, goToPage } = useCharacterContext();

  if (totalPages <= 1) return null;

  const pageItems = getPageItems(currentPage, totalPages);

  return (
    <nav className={classes.pagination} aria-label="Result pages">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous pages"
      >
        ‹
      </button>

      {pageItems.map((item, index) =>
        typeof item === "number" ? (
          <button
            key={item}
            onClick={() => goToPage(item)}
            aria-current={item === currentPage ? "page" : undefined}
            className={item === currentPage ? classes.active : undefined}
          >
            {item}
          </button>
        ) : (
          <span key={item + index} className={classes.dots}>
            …
          </span>
        ),
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next pages"
      >
        ›
      </button>
    </nav>
  );
};

export default Pagination;
