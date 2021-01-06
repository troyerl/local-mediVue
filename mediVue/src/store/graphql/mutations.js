import gql from 'graphql-tag';

export default {
  createUsageReport: gql`
    mutation($mediVueId: ID!, $startTime: Date!, $endTime: Date!, $playlistId: ID!, $procedureNum: Int!, $procedureSelect: String!, $selectedLanugage: String!, $totalProcedures: Int!, $hospitalId: ID!) {
      createUsageReport(mediVueId: $mediVueId, startTime: $startTime, endTime: $endTime, playlistId: $playlistId, procedureNum: $procedureNum, procedureSelect: $procedureSelect, selectedLanugage: $selectedLanugage, totalProcedures: $totalProcedures, hospitalId: $hospitalId) {
        id
      }
    }
  `,
};