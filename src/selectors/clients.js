// get visible clients
import moment from 'moment';

const getVisibleClients = (clients, { input, sortBy, startDate, endDate }) => {
  // console.log(input);
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
        .includes(input.toLowerCase());
      const lastNameMatch = client.lastName
        .toLowerCase()
        .includes(input.toLowerCase());

      const phoneMatch = client.phone.includes(input);

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
        return a.firstName < b.firstName ? -1 : 1;
      } else if (sortBy === 'lastCommunication') {
        // console.log('alpha sort');
        return a.lastCommunication > b.lastCommunication ? 1 : -1;
      } else if (sortBy === 'priority') {
        // console.log('alpha sort');
        return a.priority > b.priority ? -1 : 1;
      } else if (sortBy === 'memberType') {
        // console.log('alpha sort');
        return a.memberType > b.memberType ? -1 : 1;
      }
    });
};

export default getVisibleClients;
