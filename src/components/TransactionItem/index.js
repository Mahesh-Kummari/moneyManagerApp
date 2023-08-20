// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteTransaction} = props
  const {
    transactionId,
    transactionTitle,
    transactionAmount,
    transactionType,
  } = eachTransaction
  const onDeleteButton = () => {
    onDeleteTransaction(transactionId)
  }
  // console.log(transactionType)

  return (
    <li key={transactionId} className="transaction-details-container">
      <p className="p1">{transactionTitle}</p>
      <p>{`Rs ${transactionAmount}`}</p>
      <p>{transactionType}</p>
      <button type="button" className="delete-btn" onClick={onDeleteButton}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
          data-testid="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
