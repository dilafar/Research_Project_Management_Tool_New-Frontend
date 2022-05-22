import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from 'react-redux'
//import {deleteUsers} from '../../actions/user'

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

const DeleteModelStaff = ({staff}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const DeleteUser = () =>{
      //dispatch(deleteUsers(user._id));
      handleClose();
    }

  return (
    
    <div>
   
    < DeleteIcon  onClick={handleOpen}/>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <div className="modal-header bg-danger text-white">
          <h5 className="modal-title" id="deleteModalLabel">Delete User</h5>
          
        </div>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.Fadhil
        </Typography>
        <Button  variant="contained"  color="error"   onClick={ DeleteUser}>
    OK
  </Button>
  <Button onClick={handleClose} variant="contained"  color="error" style={{marginLeft: "10px"}}>Cancel</Button>
<br/>
      </Box>
    </Modal>
  </div>
     
  )
}

export default DeleteModelStaff;