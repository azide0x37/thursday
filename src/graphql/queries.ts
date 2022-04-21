/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      profileID
      updatedAt
      content
      username
      bggUsername
      gameLibrary {
        items {
          id
          userProfileID
          boardGameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      gameNightsHost {
        items {
          id
          gameNightID
          updatedAt
          datetime
          successfulGame
          createdAt
          _version
          _deleted
          _lastChangedAt
          userProfileGameNightsHostId
          gamingGroupGameNightsHeldId
          gameNightBoardgameId
          owner
        }
        nextToken
        startedAt
      }
      gameNights {
        items {
          id
          userProfileID
          gameNightID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      gamingGroups {
        items {
          id
          userProfileID
          gamingGroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profileID
        updatedAt
        content
        username
        bggUsername
        gameLibrary {
          nextToken
          startedAt
        }
        gameNightsHost {
          nextToken
          startedAt
        }
        gameNights {
          nextToken
          startedAt
        }
        gamingGroups {
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        profileID
        updatedAt
        content
        username
        bggUsername
        gameLibrary {
          nextToken
          startedAt
        }
        gameNightsHost {
          nextToken
          startedAt
        }
        gameNights {
          nextToken
          startedAt
        }
        gamingGroups {
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getBoardGame = /* GraphQL */ `
  query GetBoardGame($id: ID!) {
    getBoardGame(id: $id) {
      gameID
      updatedAt
      bggID
      name
      yearPublished
      inLibraries {
        items {
          id
          userProfileID
          boardGameID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      minPlayers
      maxPlayers
      id
      createdAt
      _version
      _deleted
      _lastChangedAt
      gamingGroupGamesPlayedId
    }
  }
`;
export const listBoardGames = /* GraphQL */ `
  query ListBoardGames(
    $filter: ModelBoardGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        gameID
        updatedAt
        bggID
        name
        yearPublished
        inLibraries {
          nextToken
          startedAt
        }
        minPlayers
        maxPlayers
        id
        createdAt
        _version
        _deleted
        _lastChangedAt
        gamingGroupGamesPlayedId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBoardGames = /* GraphQL */ `
  query SyncBoardGames(
    $filter: ModelBoardGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoardGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        gameID
        updatedAt
        bggID
        name
        yearPublished
        inLibraries {
          nextToken
          startedAt
        }
        minPlayers
        maxPlayers
        id
        createdAt
        _version
        _deleted
        _lastChangedAt
        gamingGroupGamesPlayedId
      }
      nextToken
      startedAt
    }
  }
`;
export const getGameNight = /* GraphQL */ `
  query GetGameNight($id: ID!) {
    getGameNight(id: $id) {
      id
      gameNightID
      updatedAt
      boardgame {
        gameID
        updatedAt
        bggID
        name
        yearPublished
        inLibraries {
          nextToken
          startedAt
        }
        minPlayers
        maxPlayers
        id
        createdAt
        _version
        _deleted
        _lastChangedAt
        gamingGroupGamesPlayedId
      }
      host {
        id
        profileID
        updatedAt
        content
        username
        bggUsername
        gameLibrary {
          nextToken
          startedAt
        }
        gameNightsHost {
          nextToken
          startedAt
        }
        gameNights {
          nextToken
          startedAt
        }
        gamingGroups {
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      participants {
        items {
          id
          userProfileID
          gameNightID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      datetime
      gamingGroup {
        id
        groupID
        name
        members {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        gamesPlayed {
          nextToken
          startedAt
        }
        gameNightsHeld {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      successfulGame
      createdAt
      _version
      _deleted
      _lastChangedAt
      userProfileGameNightsHostId
      gamingGroupGameNightsHeldId
      gameNightBoardgameId
      owner
    }
  }
`;
export const listGameNights = /* GraphQL */ `
  query ListGameNights(
    $filter: ModelGameNightFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameNights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameNightID
        updatedAt
        boardgame {
          gameID
          updatedAt
          bggID
          name
          yearPublished
          minPlayers
          maxPlayers
          id
          createdAt
          _version
          _deleted
          _lastChangedAt
          gamingGroupGamesPlayedId
        }
        host {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        participants {
          nextToken
          startedAt
        }
        datetime
        gamingGroup {
          id
          groupID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        successfulGame
        createdAt
        _version
        _deleted
        _lastChangedAt
        userProfileGameNightsHostId
        gamingGroupGameNightsHeldId
        gameNightBoardgameId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGameNights = /* GraphQL */ `
  query SyncGameNights(
    $filter: ModelGameNightFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGameNights(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        gameNightID
        updatedAt
        boardgame {
          gameID
          updatedAt
          bggID
          name
          yearPublished
          minPlayers
          maxPlayers
          id
          createdAt
          _version
          _deleted
          _lastChangedAt
          gamingGroupGamesPlayedId
        }
        host {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        participants {
          nextToken
          startedAt
        }
        datetime
        gamingGroup {
          id
          groupID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        successfulGame
        createdAt
        _version
        _deleted
        _lastChangedAt
        userProfileGameNightsHostId
        gamingGroupGameNightsHeldId
        gameNightBoardgameId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getGamingGroup = /* GraphQL */ `
  query GetGamingGroup($id: ID!) {
    getGamingGroup(id: $id) {
      id
      groupID
      name
      members {
        items {
          id
          userProfileID
          gamingGroupID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      gamesPlayed {
        items {
          gameID
          updatedAt
          bggID
          name
          yearPublished
          minPlayers
          maxPlayers
          id
          createdAt
          _version
          _deleted
          _lastChangedAt
          gamingGroupGamesPlayedId
        }
        nextToken
        startedAt
      }
      gameNightsHeld {
        items {
          id
          gameNightID
          updatedAt
          datetime
          successfulGame
          createdAt
          _version
          _deleted
          _lastChangedAt
          userProfileGameNightsHostId
          gamingGroupGameNightsHeldId
          gameNightBoardgameId
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listGamingGroups = /* GraphQL */ `
  query ListGamingGroups(
    $filter: ModelGamingGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGamingGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupID
        name
        members {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        gamesPlayed {
          nextToken
          startedAt
        }
        gameNightsHeld {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGamingGroups = /* GraphQL */ `
  query SyncGamingGroups(
    $filter: ModelGamingGroupFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGamingGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        groupID
        name
        members {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        gamesPlayed {
          nextToken
          startedAt
        }
        gameNightsHeld {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProfilePicture = /* GraphQL */ `
  query GetProfilePicture($id: ID!) {
    getProfilePicture(id: $id) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProfilePictures = /* GraphQL */ `
  query ListProfilePictures(
    $filter: ModelProfilePictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfilePictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProfilePictures = /* GraphQL */ `
  query SyncProfilePictures(
    $filter: ModelProfilePictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfilePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        owner
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBoardGamePicture = /* GraphQL */ `
  query GetBoardGamePicture($id: ID!) {
    getBoardGamePicture(id: $id) {
      id
      name
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listBoardGamePictures = /* GraphQL */ `
  query ListBoardGamePictures(
    $filter: ModelBoardGamePictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardGamePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBoardGamePictures = /* GraphQL */ `
  query SyncBoardGamePictures(
    $filter: ModelBoardGamePictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoardGamePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserBoardGames = /* GraphQL */ `
  query GetUserBoardGames($id: ID!) {
    getUserBoardGames(id: $id) {
      id
      userProfileID
      boardGameID
      userProfile {
        id
        profileID
        updatedAt
        content
        username
        bggUsername
        gameLibrary {
          nextToken
          startedAt
        }
        gameNightsHost {
          nextToken
          startedAt
        }
        gameNights {
          nextToken
          startedAt
        }
        gamingGroups {
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      boardGame {
        gameID
        updatedAt
        bggID
        name
        yearPublished
        inLibraries {
          nextToken
          startedAt
        }
        minPlayers
        maxPlayers
        id
        createdAt
        _version
        _deleted
        _lastChangedAt
        gamingGroupGamesPlayedId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserBoardGames = /* GraphQL */ `
  query ListUserBoardGames(
    $filter: ModelUserBoardGamesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserBoardGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userProfileID
        boardGameID
        userProfile {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        boardGame {
          gameID
          updatedAt
          bggID
          name
          yearPublished
          minPlayers
          maxPlayers
          id
          createdAt
          _version
          _deleted
          _lastChangedAt
          gamingGroupGamesPlayedId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserBoardGames = /* GraphQL */ `
  query SyncUserBoardGames(
    $filter: ModelUserBoardGamesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserBoardGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileID
        boardGameID
        userProfile {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        boardGame {
          gameID
          updatedAt
          bggID
          name
          yearPublished
          minPlayers
          maxPlayers
          id
          createdAt
          _version
          _deleted
          _lastChangedAt
          gamingGroupGamesPlayedId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserGameNights = /* GraphQL */ `
  query GetUserGameNights($id: ID!) {
    getUserGameNights(id: $id) {
      id
      userProfileID
      gameNightID
      userProfile {
        id
        profileID
        updatedAt
        content
        username
        bggUsername
        gameLibrary {
          nextToken
          startedAt
        }
        gameNightsHost {
          nextToken
          startedAt
        }
        gameNights {
          nextToken
          startedAt
        }
        gamingGroups {
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      gameNight {
        id
        gameNightID
        updatedAt
        boardgame {
          gameID
          updatedAt
          bggID
          name
          yearPublished
          minPlayers
          maxPlayers
          id
          createdAt
          _version
          _deleted
          _lastChangedAt
          gamingGroupGamesPlayedId
        }
        host {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        participants {
          nextToken
          startedAt
        }
        datetime
        gamingGroup {
          id
          groupID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        successfulGame
        createdAt
        _version
        _deleted
        _lastChangedAt
        userProfileGameNightsHostId
        gamingGroupGameNightsHeldId
        gameNightBoardgameId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserGameNights = /* GraphQL */ `
  query ListUserGameNights(
    $filter: ModelUserGameNightsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGameNights(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userProfileID
        gameNightID
        userProfile {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        gameNight {
          id
          gameNightID
          updatedAt
          datetime
          successfulGame
          createdAt
          _version
          _deleted
          _lastChangedAt
          userProfileGameNightsHostId
          gamingGroupGameNightsHeldId
          gameNightBoardgameId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserGameNights = /* GraphQL */ `
  query SyncUserGameNights(
    $filter: ModelUserGameNightsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGameNights(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileID
        gameNightID
        userProfile {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        gameNight {
          id
          gameNightID
          updatedAt
          datetime
          successfulGame
          createdAt
          _version
          _deleted
          _lastChangedAt
          userProfileGameNightsHostId
          gamingGroupGameNightsHeldId
          gameNightBoardgameId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserGamingGroups = /* GraphQL */ `
  query GetUserGamingGroups($id: ID!) {
    getUserGamingGroups(id: $id) {
      id
      userProfileID
      gamingGroupID
      userProfile {
        id
        profileID
        updatedAt
        content
        username
        bggUsername
        gameLibrary {
          nextToken
          startedAt
        }
        gameNightsHost {
          nextToken
          startedAt
        }
        gameNights {
          nextToken
          startedAt
        }
        gamingGroups {
          nextToken
          startedAt
        }
        createdAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      gamingGroup {
        id
        groupID
        name
        members {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        gamesPlayed {
          nextToken
          startedAt
        }
        gameNightsHeld {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserGamingGroups = /* GraphQL */ `
  query ListUserGamingGroups(
    $filter: ModelUserGamingGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGamingGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userProfileID
        gamingGroupID
        userProfile {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        gamingGroup {
          id
          groupID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserGamingGroups = /* GraphQL */ `
  query SyncUserGamingGroups(
    $filter: ModelUserGamingGroupsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserGamingGroups(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userProfileID
        gamingGroupID
        userProfile {
          id
          profileID
          updatedAt
          content
          username
          bggUsername
          createdAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        gamingGroup {
          id
          groupID
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
