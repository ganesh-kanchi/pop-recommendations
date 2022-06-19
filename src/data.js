// import React from "react";

const recDataBase = {
  Movies: [
    {
      name: "Dune",
      rating: "5/5",
      link:
        "https://www.primevideo.com/dp/amzn1.dv.gti.403b0f47-548d-4329-ade2-c5c961c8111f?autoplay=1&ref_=atv_cf_strg_wb"
    },
    {
      name: "Free Guy",
      rating: "4.5/5",
      link:
        "https://www.hotstar.com/in/movies/free-guy/1260071301/watch?utm_source=gwa"
    },
    {
      name: "Bubble",
      rating: "4.8/5",
      link:
        "https://www.hotstar.com/in/movies/free-guy/1260071301/watch?utm_source=gwa"
    },
    {
      name: "Shang-Chi and The Legend of Ten Rings",
      rating: "4/5",
      link: "https://www.imdb.com/title/tt9376612/"
    },
    {
      name: "Popstar: never stop never stopping",
      rating: "4.8/5",
      link: "https://www.imdb.com/title/tt3960412/"
    },
    {
      name: "Spider-man No Way Home",
      rating: "4/5",
      link: "https://www.imdb.com/title/tt10872600/"
    }
  ],
  Music: [
    {
      name: "Can I Kick It?",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=oiIjRs8M2KY"
    },
    {
      name: "Galat/Sahi",
      rating: "5/5",
      link:
        "https://open.spotify.com/track/1QtD4zdke0HDhS92yyFSRL?si=d0cff0865f574f04"
    },
    {
      name: "Why from 'tick,tick... BOOM!' ",
      rating: "5/5",
      link:
        "https://open.spotify.com/track/7fYosFGeFuikOazxO8xrdm?si=548d0aeb277d43ed"
    },
    {
      name: "Come Home The Kids Miss You Album",
      rating: "5/5",
      link:
        "https://open.spotify.com/album/2eE8BVirX9VF8Di9hD90iw?si=9c2414b7510e4e72"
    },
    {
      name: "Nawazuddin by Seedhe Maut",
      rating: "4.5/5",
      link: "https://www.youtube.com/watch?v=nTK0OEAzctM"
    },
    {
      name: "Without Me by Eminem",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=YVkUvmDQ3HY"
    }
  ],

  Series: [
    {
      name: "Doom Petrol",
      rating: "4.5/5",
      link: "https://www.imdb.com/title/tt8416494/"
    },
    {
      name: "Only Murders in the Building",
      rating: "4.5/5",
      link:
        "https://www.hotstar.com/in/tv/only-murders-in-the-building/1260067362?utm_source=gwa"
    },
    {
      name: "Agents of S.H.I.E.L.D.",
      rating: "5/5",
      link:
        "https://www.hotstar.com/in/tv/marvels-agents-of-shield/1260027620?utm_source=gwa"
    },
    {
      name: "DareDevil",
      rating: "4/5",
      link: "https://www.netflix.com/in/title/80018294"
    },
    {
      name: "Severence",
      rating: "4/5",
      link: "https://www.imdb.com/title/tt11280740/"
    },
    {
      name: "The Good Doctor",
      rating: "5/5",
      link: "https://www.netflix.com/watch/80176893?source=35"
    },
    {
      name: "The Mentalist",
      rating: "4.5/5",
      link:
        "https://www.primevideo.com/dp/amzn1.dv.gti.5ead936e-c638-1ace-2197-bdb7ade89beb?autoplay=1&ref_=atv_cf_strg_wb"
    },
    {
      name: "Rick and Morty",
      rating: "5.5/5 (coz it's out of this world)",
      link: "https://www.netflix.com/watch/80014749?source=35"
    },
    {
      name: "Resident Alien",
      rating: "4/5",
      link: "https://www.imdb.com/title/tt8690918/"
    },
    {
      name: "Barry",
      rating: "4.5/5",
      link: "https://www.hotstar.com/in/tv/barry/16969?utm_source=gwa"
    }
  ],
  "T.V Shows": [
    {
      name: "The Big Bang Theory",
      rating: "5/5",
      link: "https://www.netflix.com/in/title/70143830?source=35"
    },
    {
      name: "Parks and Recreation",
      rating: "4.5/5",
      link:
        "https://www.primevideo.com/dp/amzn1.dv.gti.4cb04080-ca58-eec4-4624-129721975c1c?autoplay=1&ref_=atv_cf_strg_wb"
    },
    {
      name: "It's Always Sunny in Philadelphia",
      rating: "4/5",
      link:
        "https://www.hotstar.com/in/tv/its-always-sunny-in-philadelphia/2330?utm_source=gwa"
    },
    {
      name: "Brooklyn Nine-Noine",
      rating: "4.5/5 (not a typo, ifykyk.)",
      link: "https://www.netflix.com/watch/70281562?source=35"
    },
    {
      name: "Friends",
      rating: "5/5",
      link: "netflix.com/in/title/70153404?source=35"
    },
    {
      name: "Modern Family",
      rating: "4.5/5",
      link: "https://www.hotstar.com/in/tv/modern-family/8549?utm_source=gwa"
    },
    {
      name: "The Office",
      rating: "4/5",
      link:
        "https://www.primevideo.com/dp/amzn1.dv.gti.8cb0b6aa-3303-7f18-01a4-11d382346aee?autoplay=1&ref_=atv_cf_strg_wb"
    },
    {
      name: "How I Met Your Mother",
      rating: "4.5/5",
      link: "https://www.netflix.com/watch/70281562?source=35"
    }
  ],
  Anime: [
    {
      name: "Naruto",
      rating: "4.9/5",
      link: "https://www.netflix.com/title/70205012"
    },
    {
      name: "Avatar: The Last Airbender",
      rating: "5/5",
      link: "https://www.imdb.com/title/tt0417299/"
    },
    {
      name: "Attack On Titan",
      rating: "4.9/5",
      link: "https://aotonline.co/"
    },
    {
      name: "Naruto Shippuden",
      rating: "4.5/5",
      link: "https://www.imdb.com/title/tt0988824/"
    }
  ],
  Podcast: [
    {
      name: "Desi Crime (True crime)",
      rating: "4.8/5",
      link:
        "https://open.spotify.com/show/4wgaUiSz7Gh2FJrBYfn0GM?si=295b31ff52e9406e"
    },
    {
      name: "Conan O'Brien Needs A Friend",
      rating: "5/5",
      link:
        "https://open.spotify.com/show/3u26tlz7A3WyWRtXliX9a9?si=572a4e148bdc4a9d"
    },
    {
      name: "The Internet Said So",
      rating: "4/5",
      link:
        "https://open.spotify.com/show/0wpMAZCIMXptoGnFvaISNO?si=9c87d7ebcf1f4f9c"
    }
  ]
};

export default recDataBase;
