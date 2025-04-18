import type { League, Driver, Team } from './types';

export const leagues: League[] = [
  {
    id: "f1",
    name: "Formula 1",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg",
    description: "The pinnacle of motorsport",
    tier: 1
  },
  {
    id: "f2",
    name: "Formula 2",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/FIA_Formula_2_Championship_logo.svg",
    description: "The final step before F1",
    tier: 2
  },
  {
    id: "f3",
    name: "Formula 3",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/FIA_F3_Championship_logo.png",
    description: "Entry-level formula racing",
    tier: 3
  },
  {
    id: "karting",
    name: "Karting",
    photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CIK-FIA_logo.svg/440px-CIK-FIA_logo.svg.png",
    description: "The foundation of racing careers",
    tier: 4
  }
];

export const teams: Team[] = [
  {
    id: "red-bull",
    name: "Oracle Red Bull Racing",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/red-bull-racing.png.transform/2col/image.png",
    primaryColor: "#3671C6",
    isActive: true
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG PETRONAS F1 Team",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/mercedes.png.transform/2col/image.png",
    primaryColor: "#6CD3BF",
    isActive: true
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/ferrari.png.transform/2col/image.png",
    primaryColor: "#F91536",
    isActive: true
  },
  {
    id: "mclaren",
    name: "McLaren Formula 1 Team",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/mclaren.png.transform/2col/image.png",
    primaryColor: "#F58020",
    isActive: true
  },
  {
    id: "aston-martin",
    name: "Aston Martin Aramco Formula One Team",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/aston-martin.png.transform/2col/image.png",
    primaryColor: "#358C75",
    isActive: true
  },
  {
    id: "alpine",
    name: "BWT Alpine F1 Team",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/alpine.png.transform/2col/image.png",
    primaryColor: "#2293D1",
    isActive: true
  },
  {
    id: "williams",
    name: "Williams Racing",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/williams.png.transform/2col/image.png",
    primaryColor: "#37BEDD",
    isActive: true
  },
  {
    id: "visa-rb",
    name: "Visa Cash App RB Formula One Team",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/rb.png.transform/2col/image.png",
    primaryColor: "#5E8FAA",
    isActive: true
  },
  {
    id: "stake",
    name: "Stake F1 Team Kick Sauber",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/stake.png.transform/2col/image.png",
    primaryColor: "#52E252",
    isActive: true
  },
  {
    id: "haas",
    name: "MoneyGram Haas F1 Team",
    logoUrl: "https://media.formula1.com/content/dam/fom-website/teams/2024/haas-f1-team.png.transform/2col/image.png",
    primaryColor: "#B6BABD",
    isActive: true
  }
];

export const drivers: Driver[] = [
  {
    id: "max-verstappen",
    name: "Max Verstappen",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
    nationality: "Dutch",
    dateOfBirth: "1997-09-30",
    yearPromotedToF1: 2015,
    currentTeamId: "red-bull",
    isActive: true,
    biography: "Three-time World Champion known for his aggressive driving style and raw speed",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "red-bull"
      },
      {
        year: 2014,
        leagueId: "f3",
        position: 3,
        points: 411,
        wins: 10,
        podiums: 16,
        teamId: "van-amersfoort",
        highlights: ["Rookie season", "Most wins in season"]
      },
      {
        year: 2013,
        leagueId: "karting",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        kartingCategory: "KZ",
        kartingChampionship: "CIK-FIA World Championship",
        highlights: ["World Champion", "Youngest ever KZ World Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/maxverstappen1",
      twitter: "https://twitter.com/Max33Verstappen"
    }
  },
  {
    id: "sergio-perez",
    name: "Sergio Pérez",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png",
    nationality: "Mexican",
    dateOfBirth: "1990-01-26",
    yearPromotedToF1: 2011,
    currentTeamId: "red-bull",
    isActive: true,
    biography: "Known for his tire management and race craft",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "red-bull"
      },
      {
        year: 2010,
        leagueId: "f2",
        position: 2,
        points: 145,
        wins: 5,
        podiums: 7,
        teamId: "barwa-addax",
        highlights: ["Rookie season", "Most wins"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/sergioperez",
      twitter: "https://twitter.com/SChecoPerez"
    }
  },
  {
    id: "lewis-hamilton",
    name: "Lewis Hamilton",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
    nationality: "British",
    dateOfBirth: "1985-01-07",
    yearPromotedToF1: 2007,
    currentTeamId: "mercedes",
    isActive: true,
    biography: "Seven-time World Champion, holds records for most wins and pole positions",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "mercedes"
      },
      {
        year: 2006,
        leagueId: "f2",
        position: 1,
        points: 114,
        wins: 5,
        podiums: 9,
        teamId: "art-grand-prix",
        highlights: ["Champion", "Rookie champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/lewishamilton",
      twitter: "https://twitter.com/LewisHamilton"
    }
  },
  {
    id: "george-russell",
    name: "George Russell",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
    nationality: "British",
    dateOfBirth: "1998-02-15",
    yearPromotedToF1: 2019,
    currentTeamId: "mercedes",
    isActive: true,
    biography: "Former F2 champion known for his consistent performances",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "mercedes"
      },
      {
        year: 2018,
        leagueId: "f2",
        position: 1,
        points: 287,
        wins: 7,
        podiums: 11,
        teamId: "art-grand-prix",
        highlights: ["Champion", "Rookie champion"]
      },
      {
        year: 2017,
        leagueId: "f3",
        position: 3,
        points: 220,
        wins: 2,
        podiums: 6,
        teamId: "hitechgp",
        highlights: ["Rookie season"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/georgerussell63",
      twitter: "https://twitter.com/GeorgeRussell63"
    }
  },
  {
    id: "charles-leclerc",
    name: "Charles Leclerc",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
    nationality: "Monégasque",
    dateOfBirth: "1997-10-16",
    yearPromotedToF1: 2018,
    currentTeamId: "ferrari",
    isActive: true,
    biography: "Known for his exceptional qualifying pace and race craft",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "ferrari"
      },
      {
        year: 2017,
        leagueId: "f2",
        position: 1,
        points: 282,
        wins: 7,
        podiums: 10,
        teamId: "prema",
        highlights: ["Champion", "Rookie champion", "Most pole positions"]
      },
      {
        year: 2016,
        leagueId: "f3",
        position: 1,
        points: 383,
        wins: 3,
        podiums: 8,
        teamId: "art-grand-prix",
        highlights: ["Champion"]
      },
      {
        year: 2014,
        leagueId: "karting",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        kartingCategory: "KZ",
        kartingChampionship: "CIK-FIA World Championship",
        highlights: ["World Champion", "Youngest ever KZ World Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://instagram.com/charles_leclerc",
      twitter: "https://twitter.com/Charles_Leclerc"
    }
  },
  {
    id: "carlos-sainz",
    name: "Carlos Sainz",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
    nationality: "Spanish",
    dateOfBirth: "1994-09-01",
    yearPromotedToF1: 2015,
    currentTeamId: "ferrari",
    isActive: true,
    biography: "Known for his consistent performances and race craft",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "ferrari"
      },
      {
        year: 2014,
        leagueId: "f2",
        position: 1,
        points: 227,
        wins: 7,
        podiums: 10,
        teamId: "dams",
        highlights: ["Champion", "Rookie champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/carlossainz55",
      twitter: "https://twitter.com/Carlossainz55"
    }
  },
  {
    id: "lando-norris",
    name: "Lando Norris",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
    nationality: "British",
    dateOfBirth: "1999-11-13",
    yearPromotedToF1: 2019,
    currentTeamId: "mclaren",
    isActive: true,
    biography: "Young talent known for his speed and consistency",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "mclaren"
      },
      {
        year: 2018,
        leagueId: "f2",
        position: 2,
        points: 219,
        wins: 1,
        podiums: 9,
        teamId: "carlin",
        highlights: ["Rookie season"]
      },
      {
        year: 2017,
        leagueId: "f3",
        position: 1,
        points: 441,
        wins: 9,
        podiums: 13,
        teamId: "carlin",
        highlights: ["Champion", "Most wins"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/landonorris",
      twitter: "https://twitter.com/LandoNorris"
    }
  },
  {
    id: "oscar-piastri",
    name: "Oscar Piastri",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png",
    nationality: "Australian",
    dateOfBirth: "2001-04-06",
    yearPromotedToF1: 2023,
    currentTeamId: "mclaren",
    isActive: true,
    biography: "Former F2 and F3 champion, promising rookie",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "mclaren"
      },
      {
        year: 2021,
        leagueId: "f2",
        position: 1,
        points: 252.5,
        wins: 6,
        podiums: 11,
        teamId: "prema",
        highlights: ["Champion", "Rookie champion"]
      },
      {
        year: 2020,
        leagueId: "f3",
        position: 1,
        points: 164,
        wins: 2,
        podiums: 6,
        teamId: "prema",
        highlights: ["Champion", "Rookie champion"]
      },
      {
        year: 2019,
        leagueId: "karting",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        kartingCategory: "OK",
        kartingChampionship: "CIK-FIA European Championship",
        highlights: ["European Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/oscarpiastri",
      twitter: "https://twitter.com/OscarPiastri"
    }
  },
  {
    id: "fernando-alonso",
    name: "Fernando Alonso",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
    nationality: "Spanish",
    dateOfBirth: "1981-07-29",
    yearPromotedToF1: 2001,
    currentTeamId: "aston-martin",
    isActive: true,
    biography: "Two-time World Champion known for his race craft and experience",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "aston-martin"
      },
      {
        year: 2000,
        leagueId: "f2",
        position: 1,
        points: 164,
        wins: 6,
        podiums: 9,
        teamId: "astromega",
        highlights: ["Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/fernandoalo_oficial",
      twitter: "https://twitter.com/alo_oficial"
    }
  },
  {
    id: "lance-stroll",
    name: "Lance Stroll",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
    nationality: "Canadian",
    dateOfBirth: "1998-10-29",
    yearPromotedToF1: 2017,
    currentTeamId: "aston-martin",
    isActive: true,
    biography: "Known for his qualifying pace and wet weather performances",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "aston-martin"
      },
      {
        year: 2000,
        leagueId: "f2",
        position: 1,
        points: 164,
        wins: 6,
        podiums: 9,
        teamId: "astromega",
        highlights: ["Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/lancestroll",
      twitter: "https://twitter.com/Lance_Stroll"
    }
  },
  {
    id: "pierre-gasly",
    name: "Pierre Gasly",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png",
    nationality: "French",
    dateOfBirth: "1996-02-07",
    yearPromotedToF1: 2017,
    currentTeamId: "alpine",
    isActive: true,
    biography: "Former F2 champion known for his aggressive driving style",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "alpine"
      },
      {
        year: 2016,
        leagueId: "f2",
        position: 1,
        points: 202,
        wins: 1,
        podiums: 7,
        teamId: "prema",
        highlights: ["Champion", "Rookie champion"]
      },
      {
        year: 2015,
        leagueId: "f3",
        position: 1,
        points: 381,
        wins: 14,
        podiums: 20,
        teamId: "prema",
        highlights: ["Champion", "Most wins", "Most podiums"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/pierregasly",
      twitter: "https://twitter.com/PierreGasly"
    }
  },
  {
    id: "esteban-ocon",
    name: "Esteban Ocon",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png",
    nationality: "French",
    dateOfBirth: "1996-09-17",
    yearPromotedToF1: 2016,
    currentTeamId: "alpine",
    isActive: true,
    biography: "Known for his consistency and race craft",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "alpine"
      },
      {
        year: 2016,
        leagueId: "f2",
        position: 1,
        points: 219,
        wins: 4,
        podiums: 8,
        teamId: "prema",
        highlights: ["Champion", "Rookie champion"]
      },
      {
        year: 2015,
        leagueId: "f3",
        position: 2,
        points: 253,
        wins: 5,
        podiums: 13,
        teamId: "prema",
        highlights: ["Rookie season"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/estebanocon",
      twitter: "https://twitter.com/OconEsteban"
    }
  },
  {
    id: "alex-albon",
    name: "Alexander Albon",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png",
    nationality: "Thai",
    dateOfBirth: "1996-03-23",
    yearPromotedToF1: 2019,
    currentTeamId: "williams",
    isActive: true,
    biography: "Known for his overtaking ability and race craft",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "williams"
      },
      {
        year: 2018,
        leagueId: "f2",
        position: 3,
        points: 212,
        wins: 4,
        podiums: 9,
        teamId: "dams",
        highlights: ["Rookie season"]
      },
      {
        year: 2017,
        leagueId: "f3",
        position: 3,
        points: 177,
        wins: 1,
        podiums: 8,
        teamId: "hitechgp",
        highlights: ["Rookie season"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/alexalbon",
      twitter: "https://twitter.com/alex_albon"
    }
  },
  {
    id: "logan-sargeant",
    name: "Logan Sargeant",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/2col/image.png",
    nationality: "American",
    dateOfBirth: "2001-12-31",
    yearPromotedToF1: 2023,
    currentTeamId: "williams",
    isActive: true,
    biography: "First American F1 driver since 2015",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "williams"
      },
      {
        year: 2022,
        leagueId: "f2",
        position: 4,
        points: 148,
        wins: 2,
        podiums: 5,
        teamId: "carlin",
        highlights: ["Rookie season"]
      },
      {
        year: 2021,
        leagueId: "f3",
        position: 7,
        points: 102,
        wins: 1,
        podiums: 3,
        teamId: "carlin",
        highlights: ["First season in F3"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/logansargeant",
      twitter: "https://twitter.com/LoganSargeant"
    }
  },
  {
    id: "yuki-tsunoda",
    name: "Yuki Tsunoda",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png",
    nationality: "Japanese",
    dateOfBirth: "2000-05-11",
    yearPromotedToF1: 2021,
    currentTeamId: "visa-rb",
    isActive: true,
    biography: "First Japanese F1 driver since 2014",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "visa-rb"
      },
      {
        year: 2020,
        leagueId: "f2",
        position: 3,
        points: 200,
        wins: 3,
        podiums: 7,
        teamId: "carlin",
        highlights: ["Rookie season"]
      },
      {
        year: 2019,
        leagueId: "f3",
        position: 9,
        points: 67,
        wins: 0,
        podiums: 1,
        teamId: "jenzer",
        highlights: ["First season in Europe"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/yukitsunoda",
      twitter: "https://twitter.com/yukitsunoda07"
    }
  },
  {
    id: "daniel-ricciardo",
    name: "Daniel Ricciardo",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png",
    nationality: "Australian",
    dateOfBirth: "1989-07-01",
    yearPromotedToF1: 2011,
    currentTeamId: "visa-rb",
    isActive: true,
    biography: "Eight-time Grand Prix winner known for his overtaking ability",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "visa-rb"
      },
      {
        year: 2010,
        leagueId: "f2",
        position: 2,
        points: 144,
        wins: 4,
        podiums: 8,
        teamId: "tech-1",
        highlights: ["Rookie season"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/danielricciardo",
      twitter: "https://twitter.com/danielricciardo"
    }
  },
  {
    id: "valtteri-bottas",
    name: "Valtteri Bottas",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/2col/image.png",
    nationality: "Finnish",
    dateOfBirth: "1989-08-28",
    yearPromotedToF1: 2013,
    currentTeamId: "stake",
    isActive: true,
    biography: "Ten-time Grand Prix winner known for his qualifying pace",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "stake"
      },
      {
        year: 2012,
        leagueId: "f2",
        position: 1,
        points: 231,
        wins: 4,
        podiums: 9,
        teamId: "lotus",
        highlights: ["Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/valtteribottas",
      twitter: "https://twitter.com/ValtteriBottas"
    }
  },
  {
    id: "zhou-guanyu",
    name: "Zhou Guanyu",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Z/ZHOGUA01_Zhou_Guanyu/zhogua01.png.transform/2col/image.png",
    nationality: "Chinese",
    dateOfBirth: "1999-05-30",
    yearPromotedToF1: 2022,
    currentTeamId: "stake",
    isActive: true,
    biography: "First Chinese F1 driver in history",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "stake"
      },
      {
        year: 2021,
        leagueId: "f2",
        position: 3,
        points: 183,
        wins: 4,
        podiums: 7,
        teamId: "uni-virtuosi",
        highlights: ["Rookie season"]
      },
      {
        year: 2020,
        leagueId: "f3",
        position: 8,
        points: 76,
        wins: 0,
        podiums: 2,
        teamId: "prema",
        highlights: ["First season in Europe"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/zhouguanyu24",
      twitter: "https://twitter.com/ZhouGuanyu24"
    }
  },
  {
    id: "kevin-magnussen",
    name: "Kevin Magnussen",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/2col/image.png",
    nationality: "Danish",
    dateOfBirth: "1992-10-05",
    yearPromotedToF1: 2014,
    currentTeamId: "haas",
    isActive: true,
    biography: "Known for his aggressive driving style and race craft",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "haas"
      },
      {
        year: 2013,
        leagueId: "f2",
        position: 1,
        points: 238,
        wins: 5,
        podiums: 9,
        teamId: "dams",
        highlights: ["Champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/kevinmagnussen",
      twitter: "https://twitter.com/KMagRacing"
    }
  },
  {
    id: "nico-hulkenberg",
    name: "Nico Hülkenberg",
    photoUrl: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
    nationality: "German",
    dateOfBirth: "1987-08-19",
    yearPromotedToF1: 2010,
    currentTeamId: "haas",
    isActive: true,
    biography: "Known for his qualifying pace and experience",
    careerHistory: [
      {
        year: 2024,
        leagueId: "f1",
        position: 1,
        points: 0,
        wins: 0,
        podiums: 0,
        teamId: "haas"
      },
      {
        year: 2009,
        leagueId: "f2",
        position: 1,
        points: 100,
        wins: 5,
        podiums: 8,
        teamId: "art-grand-prix",
        highlights: ["Champion", "Rookie champion"]
      }
    ],
    socialMedia: {
      instagram: "https://www.instagram.com/hulkhulkenberg",
      twitter: "https://twitter.com/HulkHulkenberg"
    }
  }
]; 
