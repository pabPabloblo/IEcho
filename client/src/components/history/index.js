import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector} from 'react-redux';
import {
  selectResults,
  selectCurrentPage,
  selectTotalPages
} from '../../slices/reverseStringSlice';
import styles from './history.module.css';
import {Paginator} from '../pager';

export function History() {  
  const results = useSelector(selectResults);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const emptyResults = !results || results.length === 0;
  return (
    <Card className={`${styles.results} pt-4 pl-md-4 pr-md-3 ml-md-5 mr-md-5`} >
      <div>
        <h2 className={styles.title}>Results:</h2>
      </div>
      <div className="col-7 offset-2 pt-1">
      {
        results.map((result, index) => 
          (
          <Card key={index} className="mb-2 p-1 border-dark">
            {result.text} {result.palindrome?'(is palindrome)':''}
          </Card>
          )
        ) 
      }
      {emptyResults && <h4 className="badge-dark">Empty</h4>}
      </div>
      <Paginator totalPages={totalPages} currentPage={currentPage} ></Paginator>
    </Card>
  );
}
