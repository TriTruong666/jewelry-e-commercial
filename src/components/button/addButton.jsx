import "../../styles/button/addButton.css";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/slices/modalSlice";
const AddButton = ({ icon, name }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };
  return (
    <div className="addBtn" onClick={handleToggleModal}>
      <span className="material-symbols-outlined">{icon}</span>
      <p>{name}</p>
    </div>
  );
};
export default AddButton;
