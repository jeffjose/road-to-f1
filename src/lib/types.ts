// Types for F1 Driver Career Progression

export interface League {
  id: string;
  name: string;          // e.g., "Formula 1", "Formula 2", "Formula 3"
  photoUrl: string;      // League logo or representative image
  description: string;   // Optional description of the racing series
  tier: number;         // 1 for F1, 2 for F2, 3 for F3, 4 for karting
}

export interface Team {
  id: string;
  name: string;
  logoUrl: string;
  primaryColor: string;  // For UI theming
  isActive: boolean;     // Whether the team is currently in F1
}

export interface SeasonResult {
  year: number;
  leagueId: string;     // Reference to the League
  position: number;      // Final position in championship
  points: number;       // Total points scored
  wins: number;        // Number of race wins
  podiums: number;     // Number of podium finishes
  teamId?: string;      // Reference to the Team (optional for karting where team structure is different)
  highlights?: string[]; // Notable achievements during the season
  kartingCategory?: string; // For karting seasons (e.g., "KZ", "OK", "KZ2", etc.)
  kartingChampionship?: string; // Name of the karting championship
}

export interface Driver {
  id: string;
  name: string;
  photoUrl: string;
  nationality: string;
  dateOfBirth: string;  // Changed from optional to required
  yearPromotedToF1?: number;  // The year they entered F1, if applicable
  currentTeamId?: string;     // Reference to current Team
  careerHistory: SeasonResult[];
  biography?: string;         // Brief bio or career highlights
  socialMedia?: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  isActive: boolean;    // Whether they are currently an F1 driver
}

// Example of how to use these types:
/*
const verstappen: Driver = {
    id: "max-verstappen",
    name: "Max Verstappen",
    photoUrl: "/drivers/verstappen.jpg",
    nationality: "Dutch",
    dateOfBirth: "1997-09-30",
    yearPromotedToF1: 2015,
    currentTeamId: "Red Bull Racing",
    careerHistory: [
        {
            year: 2014,
            leagueId: "f3",
            position: 3,
            points: 237,
            wins: 10,
            podiums: 16,
            teamId: "Red Bull Racing"
        },
        // More seasons...
    ]
};
*/
