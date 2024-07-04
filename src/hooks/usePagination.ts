import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { IEnteredData } from '@/interface/interface';

export const usePagination = (
  rowsPerPage: number,
  handlerFunction: (paginatedData: IEnteredData[]) => void
) => {
  const fuelData = useAppSelector(state => state.fuelData);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = useMemo(() => {
    return Math.ceil(fuelData.length / rowsPerPage);
  }, [fuelData, rowsPerPage]);

  const getPaginatedData = useCallback(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return fuelData.slice(startIndex, endIndex);
  }, [currentPage, rowsPerPage, fuelData]);

  useEffect(() => {
    handlerFunction(getPaginatedData());
  }, [fuelData, currentPage, getPaginatedData]);

  const onNextPageHandler = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  const onPrevPageHandler = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  return {
    currentPage,
    totalPages,
    onNextPageHandler,
    onPrevPageHandler,
  };
};
