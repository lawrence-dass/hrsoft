// get visible clients

const getVisibleClients = (clients, { name, sortBy, startDate, endDate }) => {
  console.log(clients);
  return clients
    .filter(client => {
      const startDateMatch =
        typeof startDate !== 'number' || client.createdAt >= startDate;
      const endDataMatch =
        typeof endDate !== 'number' || client.createdAt <= endDate;
      const nameMatch = client.firstName
        .toLowerCase()
        .includes(name.toLowerCase());

      return startDateMatch && endDataMatch && nameMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'alphabetically') {
        console.log('alpha sort');
        return -1;
      }
    });
};

export default getVisibleClients;
