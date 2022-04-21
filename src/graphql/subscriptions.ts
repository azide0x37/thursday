/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile($owner: String) {
    onCreateUserProfile(owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile($owner: String) {
    onUpdateUserProfile(owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile($owner: String) {
    onDeleteUserProfile(owner: $owner) {
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
export const onCreateBoardGame = /* GraphQL */ `
  subscription OnCreateBoardGame {
    onCreateBoardGame {
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
export const onUpdateBoardGame = /* GraphQL */ `
  subscription OnUpdateBoardGame {
    onUpdateBoardGame {
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
export const onDeleteBoardGame = /* GraphQL */ `
  subscription OnDeleteBoardGame {
    onDeleteBoardGame {
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
export const onCreateGameNight = /* GraphQL */ `
  subscription OnCreateGameNight {
    onCreateGameNight {
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
export const onUpdateGameNight = /* GraphQL */ `
  subscription OnUpdateGameNight {
    onUpdateGameNight {
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
export const onDeleteGameNight = /* GraphQL */ `
  subscription OnDeleteGameNight {
    onDeleteGameNight {
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
export const onCreateGamingGroup = /* GraphQL */ `
  subscription OnCreateGamingGroup {
    onCreateGamingGroup {
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
export const onUpdateGamingGroup = /* GraphQL */ `
  subscription OnUpdateGamingGroup {
    onUpdateGamingGroup {
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
export const onDeleteGamingGroup = /* GraphQL */ `
  subscription OnDeleteGamingGroup {
    onDeleteGamingGroup {
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
export const onCreateProfilePicture = /* GraphQL */ `
  subscription OnCreateProfilePicture($owner: String) {
    onCreateProfilePicture(owner: $owner) {
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
export const onUpdateProfilePicture = /* GraphQL */ `
  subscription OnUpdateProfilePicture($owner: String) {
    onUpdateProfilePicture(owner: $owner) {
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
export const onDeleteProfilePicture = /* GraphQL */ `
  subscription OnDeleteProfilePicture($owner: String) {
    onDeleteProfilePicture(owner: $owner) {
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
export const onCreateBoardGamePicture = /* GraphQL */ `
  subscription OnCreateBoardGamePicture {
    onCreateBoardGamePicture {
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
export const onUpdateBoardGamePicture = /* GraphQL */ `
  subscription OnUpdateBoardGamePicture {
    onUpdateBoardGamePicture {
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
export const onDeleteBoardGamePicture = /* GraphQL */ `
  subscription OnDeleteBoardGamePicture {
    onDeleteBoardGamePicture {
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
export const onCreateUserBoardGames = /* GraphQL */ `
  subscription OnCreateUserBoardGames($owner: String) {
    onCreateUserBoardGames(owner: $owner) {
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
export const onUpdateUserBoardGames = /* GraphQL */ `
  subscription OnUpdateUserBoardGames($owner: String) {
    onUpdateUserBoardGames(owner: $owner) {
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
export const onDeleteUserBoardGames = /* GraphQL */ `
  subscription OnDeleteUserBoardGames($owner: String) {
    onDeleteUserBoardGames(owner: $owner) {
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
export const onCreateUserGameNights = /* GraphQL */ `
  subscription OnCreateUserGameNights {
    onCreateUserGameNights {
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
export const onUpdateUserGameNights = /* GraphQL */ `
  subscription OnUpdateUserGameNights {
    onUpdateUserGameNights {
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
export const onDeleteUserGameNights = /* GraphQL */ `
  subscription OnDeleteUserGameNights {
    onDeleteUserGameNights {
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
export const onCreateUserGamingGroups = /* GraphQL */ `
  subscription OnCreateUserGamingGroups {
    onCreateUserGamingGroups {
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
export const onUpdateUserGamingGroups = /* GraphQL */ `
  subscription OnUpdateUserGamingGroups {
    onUpdateUserGamingGroups {
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
export const onDeleteUserGamingGroups = /* GraphQL */ `
  subscription OnDeleteUserGamingGroups {
    onDeleteUserGamingGroups {
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
