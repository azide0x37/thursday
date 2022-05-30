// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserProfile, BoardGame, GameNight, GamingGroup, ProfilePicture, BoardGamePicture, UserBoardGames, UserGameNights, UserGamingGroups, S3Object } = initSchema(schema);

export {
  UserProfile,
  BoardGame,
  GameNight,
  GamingGroup,
  ProfilePicture,
  BoardGamePicture,
  UserBoardGames,
  UserGameNights,
  UserGamingGroups,
  S3Object
};