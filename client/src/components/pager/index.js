import { goToPage } from '../../slices/reverseStringSlice';
import { useDispatch } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';

export function Paginator(props){
  const {totalPages, currentPage} = props;
  const dispatch = useDispatch();

  const children = Array(totalPages).fill(0).map((_,index)=>index+1).map( page => 
    (<Pagination.Item key={page} active={page === currentPage}
      onClick={()=>dispatch(goToPage(page))} >
        {page}
      </Pagination.Item>)  
    );

  return((totalPages > 1)  &&
      <Pagination>
        {children}
      </Pagination>);

  }