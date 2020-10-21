import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';

const MyModal = React.forwardRef((props, ref) => {
  return (
    <Modal
      ref={ref}
      {...props}
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <>
        {props.children}
      </>
    </Modal>
  )
});

export default MyModal