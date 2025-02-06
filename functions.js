// Function to generate an HTML list from an array of clients

const list = (clients) => {
    return clients.map((client, index) => 
      `<li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name} <strong>$${client.balance}</strong>
      </li>`
    ).join('');
  };
  
// Function to sort clients by a specified property

  const order = (clients, property) => {
    return [...clients].sort((a, b) => (a[property] > b[property] ? 1 : -1));
  };
  
// Function to calculate the total balance of all clients

  const total = (clients) => {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  };
  
// Function to find a client by index

  const info = (index, clients) => {
    return clients.find((_, i) => i === index) || null;
  };
  
// Function to search clients by name (case-insensitive)

  const search = (query, clients) => {
    const lowerQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
  };