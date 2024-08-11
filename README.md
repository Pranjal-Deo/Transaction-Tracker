# Transaction Tracker

## Overview

The Transaction Tracker is a web application that helps users manage their financial transactions effectively. It allows users to track their income and expenses, providing a clear overview of their financial status. With a user-friendly interface, you can easily add transactions, view your transaction history, and see your net balance at a glance.

## Live Demo

You can view the live deployed application [here](https://transaction-tracker-8c88.onrender.com/).

## Features

- **Add Transactions**: Quickly add both income and expense transactions.
- **View Transactions**: See a comprehensive list of all transactions categorized by type.
- **Income and Expense Differentiation**: Clearly distinguish between income and expenses for better financial management.
- **Balance Summary**: View total income, total expenses, and pending balance to get a quick financial overview.

## Technologies Used

- **Frontend**: HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Render

## How It Works

1. **User Interface**: The application features a clean and intuitive interface where users can input transaction details such as amount, type (income or expense), and description.
2. **Adding Transactions**: Users can add a new transaction by filling out a form. The application will categorize the transaction as either income or expense based on user selection.
3. **Transaction Storage**: All transactions are stored in a MongoDB database. This allows for persistent data storage, meaning that users can view their transaction history even after refreshing the page.
4. **Calculating Balances**: The application calculates the total income and expenses and displays the net balance, helping users understand their financial situation at a glance.
5. **Responsive Design**: The application is designed to be responsive, ensuring that it works well on various devices, including desktops, tablets, and mobile phones.

## Getting Started

To set up and run this project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm** or **Yarn** installed on your machine.
- **MongoDB** installed or access to a MongoDB database.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YourUsername/YourRepositoryName.git
   cd YourRepositoryName
