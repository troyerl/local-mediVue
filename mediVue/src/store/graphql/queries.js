import gql from 'graphql-tag';

export default {
  getPlaylists: gql`
    query($id: ID!) {
      getAdminById(id: $id) {
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