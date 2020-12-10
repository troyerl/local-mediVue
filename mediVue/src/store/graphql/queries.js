import gql from 'graphql-tag';

export default {
  getPlaylists: gql`
    query($hospitalId: ID!) {
      getHospitalById(hospitalId: $hospitalId) {
        playlists {
          id
          name
          timesPlayed
          videos {
            id
            url
          }
        }
      }
    }
  `,
};