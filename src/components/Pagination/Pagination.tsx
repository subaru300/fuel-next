import { IEnteredData } from '@/interface/interface';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { usePagination } from '@/hooks/usePagination';
import styles from './Pagination.module.css';

interface Props {
  onPageChangeHandler: (paginatedData: IEnteredData[]) => void;
}

const Pagination = ({ onPageChangeHandler }: Props) => {
  const rowsPerPage = 8;

  const { currentPage, totalPages, onNextPageHandler, onPrevPageHandler } =
    usePagination(rowsPerPage, onPageChangeHandler);

  return (
    <div className={styles.paginationWrapper}>
      <button onClick={onPrevPageHandler} disabled={currentPage === 1}>
        <FaArrowLeft className={styles.arrow} />
      </button>
      <p>
        {' '}
        Page {currentPage} of {totalPages}{' '}
      </p>
      <button onClick={onNextPageHandler} disabled={currentPage === totalPages}>
        <FaArrowRight className={styles.arrow} />
      </button>
    </div>
  );
};

export default Pagination;
