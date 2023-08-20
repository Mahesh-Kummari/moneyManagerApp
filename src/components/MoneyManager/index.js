import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    transactionsList: [],
  }

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onChangeAmount = e => {
    this.setState({amount: e.target.value})
  }

  onChangeType = e => {
    transactionTypeOptions.forEach(eachType => {
      if (eachType.optionId === e.target.value) {
        this.setState({type: eachType.displayText})
      }
    })
  }

  onAddButton = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    // console.log(type, 'type')
    const optionType = transactionTypeOptions.find(
      each => each.displayText === type,
    )
    // console.log(optionType, 'op type')
    const {displayText} = optionType
    // console.log(displayText, 'ds')

    if (title !== '' && amount !== '') {
      const transactionObject = {
        transactionId: uuidv4(),
        transactionTitle: title,
        transactionAmount: parseInt(amount),
        transactionType: displayText,
      }
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, transactionObject],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].displayText,
      }))
    }
  }

  onDeleteTransaction = id => {
    const {transactionsList} = this.state
    const resultsList = transactionsList.filter(
      each => each.transactionId !== id,
    )
    this.setState({transactionsList: resultsList})
  }

  getIncomeAmount = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[0].displayText
      ) {
        incomeAmount += eachTransaction.transactionAmount
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(eachTransaction => {
      if (
        eachTransaction.transactionType ===
        transactionTypeOptions[1].displayText
      ) {
        expensesAmount += eachTransaction.transactionAmount
      }
    })
    return expensesAmount
  }

  render() {
    const {title, amount, transactionsList} = this.state
    const incomeAmount = this.getIncomeAmount()
    const expenceAmount = this.getExpensesAmount()
    const balanceAmount = incomeAmount - expenceAmount

    return (
      <div className="money-manager-bg-container">
        <div className="responsive-container">
          <header className="header">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </header>
          <ul className="income-expenses-container">
            <MoneyDetails
              key="key"
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expenceAmount={expenceAmount}
            />
          </ul>
          <div className="add-transaction-history-container">
            <section className="inputs-container">
              <h1>Add Transaction</h1>
              <label className="label" htmlFor="title-input">
                TITLE
              </label>
              <input
                type="text"
                id="title-input"
                placeholder="TITLE"
                className="input"
                value={title}
                onChange={this.onChangeTitle}
              />
              <label className="label" htmlFor="amount-input">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount-input"
                placeholder="AMOUNT"
                className="input"
                value={amount}
                onChange={this.onChangeAmount}
              />
              <label className="label" htmlFor="transaction-type">
                TYPE
              </label>
              <select
                id="transaction-type"
                className="input"
                value={transactionTypeOptions[0].optionId}
                onChange={this.onChangeType}
              >
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="add-btn"
                onClick={this.onAddButton}
              >
                Add
              </button>
            </section>
            <section className="history-section">
              <h1>History</h1>
              <div className="transactions-details-card">
                <p className="title">Title</p>
                <p className="title">Amount</p>
                <p className="title">Type</p>
              </div>
              <ul className="transaction-history-list">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    eachTransaction={eachTransaction}
                    onDeleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
