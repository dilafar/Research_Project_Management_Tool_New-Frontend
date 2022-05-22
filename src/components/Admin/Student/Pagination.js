import React , {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem'
import {useDispatch , useSelector} from 'react-redux';
import { getAllUser} from '../../../actions/user';

const PaginationitemStudent = ({page}) => {
    const {numberOfPages} = useSelector((state)=> state.user);
   
    const dispatch = useDispatch();

    useEffect(()=>{
            if(page){
                dispatch(getAllUser(page));
            }
    }, [page]);
  return (
    <Stack spacing={2}>
   
    <Pagination count={numberOfPages}
     variant="outlined" 
      page={Number(page) || 1}
    color = "primary"
    shape="rounded" 
    renderItem={
        (item)=>(
            <PaginationItem  {...item} component={Link} to={`/admin/Registrations?page=${item.page}`}/>
        )
    }
    />
    </Stack>
  )
}

export default PaginationitemStudent;