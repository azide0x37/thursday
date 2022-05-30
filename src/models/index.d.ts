import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt';
}

type BoardGameMetaData = {
  readOnlyFields: 'createdAt';
}

type GameNightMetaData = {
  readOnlyFields: 'createdAt';
}

type GamingGroupMetaData = {
  readOnlyFields;
}

type ProfilePictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardGamePictureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserBoardGamesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserGameNightsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserGamingGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserProfile {
  readonly id: string;
  readonly profileID: string;
  readonly updatedAt: string;
  readonly content?: string | null;
  readonly username: string;
  readonly bggUsername?: string | null;
  readonly gameLibrary?: (UserBoardGames | null)[] | null;
  readonly gameNightsHost?: (GameNight | null)[] | null;
  readonly gameNights?: (UserGameNights | null)[] | null;
  readonly gamingGroups?: (UserGamingGroups | null)[] | null;
  readonly createdAt?: string | null;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}

export declare class BoardGame {
  readonly id: string;
  readonly gameID: string;
  readonly updatedAt: string;
  readonly bggID?: string | null;
  readonly name: string;
  readonly yearPublished?: string | null;
  readonly inLibraries?: (UserBoardGames | null)[] | null;
  readonly minPlayers?: string | null;
  readonly maxPlayers?: string | null;
  readonly createdAt?: string | null;
  readonly gamingGroupGamesPlayedId?: string | null;
  constructor(init: ModelInit<BoardGame, BoardGameMetaData>);
  static copyOf(source: BoardGame, mutator: (draft: MutableModel<BoardGame, BoardGameMetaData>) => MutableModel<BoardGame, BoardGameMetaData> | void): BoardGame;
}

export declare class GameNight {
  readonly id: string;
  readonly gameNightID: string;
  readonly updatedAt: string;
  readonly boardgame: BoardGame;
  readonly host: UserProfile;
  readonly participants?: (UserGameNights | null)[] | null;
  readonly datetime: string;
  readonly gamingGroup?: GamingGroup | null;
  readonly successfulGame?: boolean | null;
  readonly createdAt?: string | null;
  readonly gameNightBoardgameId: string;
  constructor(init: ModelInit<GameNight, GameNightMetaData>);
  static copyOf(source: GameNight, mutator: (draft: MutableModel<GameNight, GameNightMetaData>) => MutableModel<GameNight, GameNightMetaData> | void): GameNight;
}

export declare class GamingGroup {
  readonly id: string;
  readonly groupID: string;
  readonly name: string;
  readonly members?: (UserGamingGroups | null)[] | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly gamesPlayed?: (BoardGame | null)[] | null;
  readonly gameNightsHeld?: (GameNight | null)[] | null;
  constructor(init: ModelInit<GamingGroup>);
  static copyOf(source: GamingGroup, mutator: (draft: MutableModel<GamingGroup>) => MutableModel<GamingGroup> | void): GamingGroup;
}

export declare class ProfilePicture {
  readonly id: string;
  readonly name?: string | null;
  readonly owner?: string | null;
  readonly file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProfilePicture, ProfilePictureMetaData>);
  static copyOf(source: ProfilePicture, mutator: (draft: MutableModel<ProfilePicture, ProfilePictureMetaData>) => MutableModel<ProfilePicture, ProfilePictureMetaData> | void): ProfilePicture;
}

export declare class BoardGamePicture {
  readonly id: string;
  readonly name?: string | null;
  readonly file?: S3Object | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BoardGamePicture, BoardGamePictureMetaData>);
  static copyOf(source: BoardGamePicture, mutator: (draft: MutableModel<BoardGamePicture, BoardGamePictureMetaData>) => MutableModel<BoardGamePicture, BoardGamePictureMetaData> | void): BoardGamePicture;
}

export declare class UserBoardGames {
  readonly id: string;
  readonly userProfile: UserProfile;
  readonly boardGame: BoardGame;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserBoardGames, UserBoardGamesMetaData>);
  static copyOf(source: UserBoardGames, mutator: (draft: MutableModel<UserBoardGames, UserBoardGamesMetaData>) => MutableModel<UserBoardGames, UserBoardGamesMetaData> | void): UserBoardGames;
}

export declare class UserGameNights {
  readonly id: string;
  readonly userProfile: UserProfile;
  readonly gameNight: GameNight;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserGameNights, UserGameNightsMetaData>);
  static copyOf(source: UserGameNights, mutator: (draft: MutableModel<UserGameNights, UserGameNightsMetaData>) => MutableModel<UserGameNights, UserGameNightsMetaData> | void): UserGameNights;
}

export declare class UserGamingGroups {
  readonly id: string;
  readonly userProfile: UserProfile;
  readonly gamingGroup: GamingGroup;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserGamingGroups, UserGamingGroupsMetaData>);
  static copyOf(source: UserGamingGroups, mutator: (draft: MutableModel<UserGamingGroups, UserGamingGroupsMetaData>) => MutableModel<UserGamingGroups, UserGamingGroupsMetaData> | void): UserGamingGroups;
}