import "../../styles/button/addButton.css";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalSlice";
import { Zoom, toast } from "react-toastify";
const AddButton = ({ icon, name, preventModal }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    if (preventModal) {
      toast.error("Sorry, Server Now Closed", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    } else {
      dispatch(toggleModal());
    }
  };
  return (
    <div className="addBtn" onClick={handleToggleModal}>
      <span className="material-symbols-outlined">{icon}</span>
      <p>{name}</p>
    </div>
  );
};
export default AddButton;
