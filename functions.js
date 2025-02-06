// List Function

function list(clients) {
    return clients.map((client, index) => 
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
        ${client.name} <strong>$${client.balance}</strong>
      </li>`
    ).join('');
  }
  
  // Order Function
  
  function order(clients, property) {
    return [...clients].sort((a, b) => {
      if (typeof a[property] === 'string') {
        return a[property].localeCompare(b[property], undefined, { sensitivity: 'base' });
      }
      return a[property] - b[property];
    });
  }  
  
  // Total Function
  
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // Search Function
  
  function search(query) {
    const lowerCaseQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseQuery));
  }
  
  // Info Function
  
  function info(index) {
    return clients.find(client => client.index === index);
  }  