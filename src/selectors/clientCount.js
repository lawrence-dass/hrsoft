const ClientCount = clients => {
  if (clients.length === 0) {
    return 0;
  } else {
    return clients.length;
  }
};

export default ClientCount;
