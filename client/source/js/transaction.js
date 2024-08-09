document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/transactions', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        const transactions = await response.json();
        const transactionsContainer = document.getElementById('transactionsContainer');

        transactions.forEach(transaction => {
            const div = document.createElement('div');
            div.classList.add('transaction');
            div.textContent = `Amount: $${transaction.amount} - Date: ${new Date(transaction.date).toLocaleDateString()}`;
            transactionsContainer.appendChild(div);
        });
    } catch (err) {
        console.error('Error fetching transactions', err);
    }
});
