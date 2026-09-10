import { useCharacterContext } from "../context/CharacterContext";
import classes from "./Pagination.module.css";

const Pagination = () => {
  const { currentPage, totalPages, goToPage } = useCharacterContext();

  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={classes.pagination} aria-label="Paginação de resultados">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={page === currentPage ? classes.active : undefined}
        >
          {page}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
