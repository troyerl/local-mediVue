import gql from 'graphql-tag';

export default {
  createUsageReport: gql`
    mutation($mediVueId: ID!, $startTime: DateTime!, $endTime: DateTime!, $playlistId: ID!, $procedureNum: Int!, $procedureSelect: String!, $selectedLanugage: String!, $totalProcedures: Int!) {
      createUsageReport(mediVueId: $mediVueId, startTime: $startTime, endTime: $endTime, playlistId: $playlistId, procedureNum: $procedureNum, procedureSelect: $procedureSelect, selectedLanugage: $selectedLanugage, totalProcedures: $totalProcedures) {
        id
      }
    }
  `,
};