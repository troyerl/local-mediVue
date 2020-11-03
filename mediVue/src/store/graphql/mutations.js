import gql from 'graphql-tag';

export default {
  createUsageReport: gql`
    mutation($mediVueId: ID!, $startTime: DateTime!, $endTime: DateTime!, $playlistId: ID!) {
      createUsageReport(mediVueId: $mediVueId, startTime: $startTime, endTime: $endTime, playlistId: $playlistId) {
        id
      }
    }
  `,
};