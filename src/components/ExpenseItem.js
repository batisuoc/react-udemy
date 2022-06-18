import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>May 25th 2022</div>
      <div className="expense-item__description">
        <h2>Car something</h2>
        <div className="expense-item__price">$233.55</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
