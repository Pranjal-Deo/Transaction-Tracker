document.getElementById('transaction-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const type = document.querySelector('input[name="type"]:checked')?.value;

    if (!type) {
        alert('Please select a transaction type');
        return;
    }

    const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, amount, category, type })
    });

    if (response.ok) {
        loadTransactions();
        document.getElementById('transaction-form').reset();
    } else {
        alert('Failed to add transaction');
    }
});

async function loadTransactions() {
    const response = await fetch('/api/transactions');
    const transactions = await response.json();

    const expenseList = document.getElementById('expense-list');
    const incomeList = document.getElementById('income-list');
    let totalBalance = 0;

    expenseList.innerHTML = '';
    incomeList.innerHTML = '';

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.innerHTML = `${transaction.title} - ₹${transaction.amount} - ${transaction.category}`;

        if (transaction.type === 'expense') {
            li.className = 'expense';
            expenseList.appendChild(li);
            totalBalance -= transaction.amount; // Deduct from balance
        } else if (transaction.type === 'income') {
            li.className = 'income';
            incomeList.appendChild(li);
            totalBalance += transaction.amount; // Add to balance
        }
    });

    document.getElementById('total-balance').textContent = totalBalance;
}

window.onload = loadTransactions;
