// get visible clients
import moment from 'moment';

const getVisibleClients = (clients, { name, sortBy, startDate, endDate }) => {
  // console.log(clients);
  // console.log(startDate, endDate);
  return clients
    .filter(client => {
      const createdAtMoment = moment(client.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;

      const firstNameMatch = client.firstName
        .toLowerCase()
        .includes(name.toLowerCase());
      const lastNameMatch = client.lastName
        .toLowerCase()
        .includes(name.toLowerCase());

      const phoneMatch = client.phone.includes(name);

      return (
        startDateMatch &&
        endDateMatch &&
        (firstNameMatch || lastNameMatch || phoneMatch)
      );
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'alphabetically') {
        // console.log('alpha sort');
        return a.firstName > b.firstName ? 1 : -1;
      } else if (sortBy === 'lastCommunication') {
        // console.log('alpha sort');
        return a.lastCommunication > b.lastCommunication ? 1 : -1;
      } else if (sortBy === 'memberType') {
        // console.log('alpha sort');
        return a.memberType > b.memberType ? -1 : 1;
      }
    });
};

export default getVisibleClients;
