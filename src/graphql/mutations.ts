/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createBoardGame = /* GraphQL */ `
  mutation CreateBoardGame(
    $input: CreateBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    createBoardGame(input: $input, condition: $condition) {
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
export const updateBoardGame = /* GraphQL */ `
  mutation UpdateBoardGame(
    $input: UpdateBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    updateBoardGame(input: $input, condition: $condition) {
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
export const deleteBoardGame = /* GraphQL */ `
  mutation DeleteBoardGame(
    $input: DeleteBoardGameInput!
    $condition: ModelBoardGameConditionInput
  ) {
    deleteBoardGame(input: $input, condition: $condition) {
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
export const createGameNight = /* GraphQL */ `
  mutation CreateGameNight(
    $input: CreateGameNightInput!
    $condition: ModelGameNightConditionInput
  ) {
    createGameNight(input: $input, condition: $condition) {
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
export const updateGameNight = /* GraphQL */ `
  mutation UpdateGameNight(
    $input: UpdateGameNightInput!
    $condition: ModelGameNightConditionInput
  ) {
    updateGameNight(input: $input, condition: $condition) {
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
export const deleteGameNight = /* GraphQL */ `
  mutation DeleteGameNight(
    $input: DeleteGameNightInput!
    $condition: ModelGameNightConditionInput
  ) {
    deleteGameNight(input: $input, condition: $condition) {
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
export const createGamingGroup = /* GraphQL */ `
  mutation CreateGamingGroup(
    $input: CreateGamingGroupInput!
    $condition: ModelGamingGroupConditionInput
  ) {
    createGamingGroup(input: $input, condition: $condition) {
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
export const updateGamingGroup = /* GraphQL */ `
  mutation UpdateGamingGroup(
    $input: UpdateGamingGroupInput!
    $condition: ModelGamingGroupConditionInput
  ) {
    updateGamingGroup(input: $input, condition: $condition) {
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
export const deleteGamingGroup = /* GraphQL */ `
  mutation DeleteGamingGroup(
    $input: DeleteGamingGroupInput!
    $condition: ModelGamingGroupConditionInput
  ) {
    deleteGamingGroup(input: $input, condition: $condition) {
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
export const createProfilePicture = /* GraphQL */ `
  mutation CreateProfilePicture(
    $input: CreateProfilePictureInput!
    $condition: ModelProfilePictureConditionInput
  ) {
    createProfilePicture(input: $input, condition: $condition) {
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
export const updateProfilePicture = /* GraphQL */ `
  mutation UpdateProfilePicture(
    $input: UpdateProfilePictureInput!
    $condition: ModelProfilePictureConditionInput
  ) {
    updateProfilePicture(input: $input, condition: $condition) {
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
export const deleteProfilePicture = /* GraphQL */ `
  mutation DeleteProfilePicture(
    $input: DeleteProfilePictureInput!
    $condition: ModelProfilePictureConditionInput
  ) {
    deleteProfilePicture(input: $input, condition: $condition) {
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
export const createBoardGamePicture = /* GraphQL */ `
  mutation CreateBoardGamePicture(
    $input: CreateBoardGamePictureInput!
    $condition: ModelBoardGamePictureConditionInput
  ) {
    createBoardGamePicture(input: $input, condition: $condition) {
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
export const updateBoardGamePicture = /* GraphQL */ `
  mutation UpdateBoardGamePicture(
    $input: UpdateBoardGamePictureInput!
    $condition: ModelBoardGamePictureConditionInput
  ) {
    updateBoardGamePicture(input: $input, condition: $condition) {
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
export const deleteBoardGamePicture = /* GraphQL */ `
  mutation DeleteBoardGamePicture(
    $input: DeleteBoardGamePictureInput!
    $condition: ModelBoardGamePictureConditionInput
  ) {
    deleteBoardGamePicture(input: $input, condition: $condition) {
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
export const createUserBoardGames = /* GraphQL */ `
  mutation CreateUserBoardGames(
    $input: CreateUserBoardGamesInput!
    $condition: ModelUserBoardGamesConditionInput
  ) {
    createUserBoardGames(input: $input, condition: $condition) {
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
export const updateUserBoardGames = /* GraphQL */ `
  mutation UpdateUserBoardGames(
    $input: UpdateUserBoardGamesInput!
    $condition: ModelUserBoardGamesConditionInput
  ) {
    updateUserBoardGames(input: $input, condition: $condition) {
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
export const deleteUserBoardGames = /* GraphQL */ `
  mutation DeleteUserBoardGames(
    $input: DeleteUserBoardGamesInput!
    $condition: ModelUserBoardGamesConditionInput
  ) {
    deleteUserBoardGames(input: $input, condition: $condition) {
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
export const createUserGameNights = /* GraphQL */ `
  mutation CreateUserGameNights(
    $input: CreateUserGameNightsInput!
    $condition: ModelUserGameNightsConditionInput
  ) {
    createUserGameNights(input: $input, condition: $condition) {
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
export const updateUserGameNights = /* GraphQL */ `
  mutation UpdateUserGameNights(
    $input: UpdateUserGameNightsInput!
    $condition: ModelUserGameNightsConditionInput
  ) {
    updateUserGameNights(input: $input, condition: $condition) {
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
export const deleteUserGameNights = /* GraphQL */ `
  mutation DeleteUserGameNights(
    $input: DeleteUserGameNightsInput!
    $condition: ModelUserGameNightsConditionInput
  ) {
    deleteUserGameNights(input: $input, condition: $condition) {
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
export const createUserGamingGroups = /* GraphQL */ `
  mutation CreateUserGamingGroups(
    $input: CreateUserGamingGroupsInput!
    $condition: ModelUserGamingGroupsConditionInput
  ) {
    createUserGamingGroups(input: $input, condition: $condition) {
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
export const updateUserGamingGroups = /* GraphQL */ `
  mutation UpdateUserGamingGroups(
    $input: UpdateUserGamingGroupsInput!
    $condition: ModelUserGamingGroupsConditionInput
  ) {
    updateUserGamingGroups(input: $input, condition: $condition) {
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
export const deleteUserGamingGroups = /* GraphQL */ `
  mutation DeleteUserGamingGroups(
    $input: DeleteUserGamingGroupsInput!
    $condition: ModelUserGamingGroupsConditionInput
  ) {
    deleteUserGamingGroups(input: $input, condition: $condition) {
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
