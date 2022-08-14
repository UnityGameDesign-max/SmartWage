import { useState } from 'react'

const usePagination = (data : any, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  const totalDataLength = () => {
    return data.length;
  }
  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    return currentPage;
  }

  const previousPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    return currentPage;
  }
  return { nextPage, previousPage, currentData, totalDataLength, currentPage, maxPage }
}

export default usePagination