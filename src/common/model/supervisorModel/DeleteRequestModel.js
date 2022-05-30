import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'
import {deleteRequest} from '../../../actions/request'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "500px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeleteModelRequest = ({request}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const  DeleteRequest = () =>{
      dispatch(deleteRequest(request._id));
      handleClose();
    }

  return (
    
    <div>
   
    
     <i className="fa fa-times" onClick={handleOpen}></i>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <div className="modal-header bg-danger text-white">
          <h5 className="modal-title" id="deleteModalLabel">Remove Request</h5>
          
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Do You Need To remove Notification ?
        </Typography>
        <Button  variant="contained"  color="error"   onClick={ DeleteRequest}>
    OK
  </Button>
  <Button onClick={handleClose} variant="contained"  color="error" style={{marginLeft: "10px"}}>Cancel</Button>
<br/>
      </Box>
    </Modal>
  </div>
     
  )
}

export default DeleteModelRequest;