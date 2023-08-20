// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expenceAmount} = props
  // console.log(details)

  return (
    <>
      <li className="container balance-class" key="0">
        <section className="image-balance-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
          <div className="title-amount-container">
            <p className="title">Your Balance</p>
            <p
              className="amount"
              data-testid="balanceAmount"
            >{`Rs ${balanceAmount}`}</p>
          </div>
        </section>
      </li>
      <li className="container income-class" key="1">
        <section className="image-balance-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
          <div className="title-amount-container">
            <p className="title">Your Income</p>
            <p
              className="amount"
              data-testid="incomeAmount"
            >{`Rs ${incomeAmount}`}</p>
          </div>
        </section>
      </li>
      <li className="container expenses-class" key="3">
        <section className="image-balance-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
          <div className="title-amount-container">
            <p className="title">Your Expenses</p>
            <p
              className="amount"
              data-testid="expensesAmount"
            >{`Rs ${expenceAmount}`}</p>
          </div>
        </section>
      </li>
    </>
  )
}
export default MoneyDetails
