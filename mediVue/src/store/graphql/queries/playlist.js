import gql from 'graphql-tag';

export default {
  getPlaylistsByHospitalId: gql`
    query($id: ID!) {
      getPlaylistsByHopsitalId(id: $id) {

      }
    }
  `,
};