export interface InfoJson {
  type?: string; // this is sometimes set by the frontend, e.g. by the FileUpload module
  title: string;
  author: string;
  copyright: string;
  description: string;
}

export interface CluesJson {
  across: string[];
  down: string[];
}
/**
 * PuzzleJson: the json format of puzzles stored in the db (both firebase & postgres)
 * Fields are a bit messy & don't correspond perfectly with puzjs formats... see logic in FileUploader.js
 */

export interface PuzzleJson {
  grid: string[][];
  info: InfoJson;
  circles: string[];
  shades: string[];
  clues: CluesJson;
  private?: boolean;
}

export interface PuzzleStatsJson {
  numSolves: number;
}

export interface AddPuzzleRequest {
  puzzle: PuzzleJson;
  pid?: string; // if not provided, a new one is generated by backend
  isPublic: boolean;
}

export interface AddPuzzleResponse {
  pid: string;
}

export interface ListPuzzleRequest {
  filter: ListPuzzleRequestFilters;
  page: number;
  pageSize: number;
}

export interface ListPuzzleRequestFilters {
  sizeFilter: {
    Mini: boolean;
    Standard: boolean;
  };
  nameOrTitleFilter: string;
}

export interface ListPuzzleResponse {
  puzzles: {
    pid: string;
    content: PuzzleJson;
    stats: PuzzleStatsJson;
  }[];
}

export interface CreateGameResponse {}

export interface CreateGameRequest {
  gid: string;
  pid: string;
}