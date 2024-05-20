const List = ({
  productData,
  handleToggleDelModal,
  handleToggleUpdateModal,
}) => {
  return (
    <>
      {productData.map((product) => (
        <tr key={product._id}>
          <td>{product.title}</td>
          <td>{product.name}</td>
          <td>{product.price}$</td>
          <td>{product.countInStock}</td>
          <td>{product.type}</td>
          <td className="action">
            <span
              onClick={() => handleToggleDelModal(product._id)}
              className="material-symbols-outlined"
            >
              delete_forever
            </span>
            <span
              className="material-symbols-outlined"
              onClick={() => handleToggleUpdateModal(product._id)}
            >
              edit
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};
export default List;
