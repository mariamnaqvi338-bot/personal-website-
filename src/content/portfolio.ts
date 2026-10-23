export { reflections } from './reflections';
export const graphicWork = [{ title: 'mbymariam', category: 'Graphic design · Postcards', description: 'My former postcard business, mbymariam. This collection will bring together the designs and the story behind it.', images: [] as {src:string;alt:string;caption?:string}[] }];
export const currentProjects = [{ title: 'Undergraduate thesis', category: 'In progress · Economics', description: 'My undergraduate thesis is in progress. The final topic has not yet been confirmed.' }];
export const aboutHeading = "a little about me (or a lot, apparently)";
export const about = [
  "hi, i'm mariam. a small artist? or should i even call myself one? let's just stick with mariam.",
  "thanks to the stars (and the fact that i was born a gemini), I happen to have quite a few sides to me which is probably just a very convenient astrological excuse for wanting to do everything all at once.",
  "I love taking photographs, writing, making art, playing around with graphics, and even a little coding here and there. Somewhere in between all of this, I'm also studying economics and political science, with a growing interest in development economics and the strange, complicated ways the world works.",
  "I read a lot. I think a lot. I doubt even more.",
  "*cogito, dubito, ergo sum?*",
  "i think, i doubt, therefore i am. or something along those lines. a little cliché? perhaps. but it's doing the job, so we'll let it stay. Overthinking is my forte, and so is discovering a new interest every other business day. I've juggled so many things at this point that I've comfortably accepted my fate as a jack of all trades, master of none. Although, thanks to a very conveniently timed Instagram reel, I recently discovered that it's *oftentimes better than a master of one* and honestly, that's enough to keep my delusions alive. anywho,",
  "I take photographs because I'm terribly afraid of forgetting. A face, a place, a feeling, a particular afternoon, or the way life felt for a brief moment in time. I like the idea of keeping little pieces of my life somewhere outside my memory as time has this rather cruel habit of taking things away, and I want something to hold on to when it does. Perhaps one day I'll look at a photograph and remember not just what I saw but who I was when I took it. The people I loved, the places I belonged to, and all the versions of myself that no longer exist also; my brain fog is doing a spectacular job of making me forget things already (im sure its the covid vacccine) so growing old isn't even the problem here. hehe.",
  "Somewhere along the way, I also started a tiny postcard business, something incredibly personal and close to my heart. I wanted to bring back the almost-forgotten art of writing postcards- of sending someone a little piece of yourself, in your own handwriting, in a world where everything has become so instant and disposable. And for the little while that it existed, it was one of the most beautiful things I had ever done, but alas, duty called (read: university), and I had to put it on hold. I do hope to return to it someday, especially because it takes me back to my love for graphic design, a little love affair that began about four years ago.",
  "I also love poetry. Reading it, finding myself in someone else's words and occasionally remembering that I used to write some myself as a painfully cliché teenager and not to brag but some of it was actually pretty good (I cant even bring myself to read it again). Beyond all these little interests, there's another part of me that cares deeply about the world outside my own.",
  "I love being involved in work that means something. Be it education, inequality, development, or anything that might make life a little less difficult for someone somewhere. There's something deeply comforting about knowing that even the smallest thing you do can belong to something much bigger than yourself. I don't necessarily dream of changing the entire world. I just want to contribute whatever little I can. There's a story about a bird carrying tiny drops of water in its beak to put out a great fire that my daadi used to tell me. Well, it knows those drops may never extinguish the flames but it keeps going anyway. I think I'd like to be that bird. and I suppose that's me, or at least some of me.",
  "a little bit of everything, constantly thinking, occasionally creating, perpetually doubting, and trying to make something meaningful out of this rather strange business of being alive.",
  "and this website? yet another way of channelling my inner child, who is probably very pleased that, okay, i know how to make websites now too. it's also a little exercise in putting myself out there. the photographs, the writing, the work, the doubts, all these different sides of me, sharing one small corner of the internet. a whole lot of self-exposure, apparently. but here we are."
];

export type PostcardImage = { src: string; alt: string; width?: number; height?: number; caption?: string };
export type PostcardCollection = { title: string; caption: string; images: PostcardImage[] };
export const postcardCollections: PostcardCollection[] = [
  {
    "title": "Selected postcards",
    "caption": "",
    "images": [
      {
        "src": "/graphics/top/2.png",
        "alt": "An Eid Mubarak collage postcard with Urdu lettering, henna-painted hands, flowers, and vintage paper.",
        "width": 1429,
        "height": 2000,
        "caption": "Vintage Eid Mubarak postcards for your loved ones."
      },
      {
        "src": "/graphics/top/4.png",
        "alt": "A collage postcard featuring a black-and-white portrait of Faiz Ahmed Faiz over handwritten Urdu and floral details.",
        "width": 1429,
        "height": 2000,
        "caption": "This postcard is a reminder of my love for Faiz Ahmed Faiz and his words."
      }
    ]
  },
  {
    "title": "FCCU",
    "caption": "Made these for my university, inspired by how I fell in love with FCCU’s campus.",
    "images": [
      {
        "src": "/graphics/fccu/7.png",
        "alt": "FCCU brick buildings beneath a blue sky, with white Urdu FCCU calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/8.png",
        "alt": "A shaded FCCU campus lawn beneath trees, with white Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/10.png",
        "alt": "A sunlit archway in a dark FCCU corridor, with Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/11.png",
        "alt": "An upward view between FCCU brick buildings, with black Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/12.png",
        "alt": "An FCCU building and lawn under a cloudy sky, with white Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/13.png",
        "alt": "The setting sun framed by campus trees, with white Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/14.png",
        "alt": "An FCCU courtyard framed by an arch, with white Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/16.png",
        "alt": "An FCCU campus building reflected in water at sunset, with golden Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/17.png",
        "alt": "A campus building reflected in water beneath trees, with white Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/fccu/18.png",
        "alt": "A sunny FCCU campus lawn and brick buildings, with white Urdu calligraphy.",
        "width": 1429,
        "height": 2000
      }
    ]
  },
  {
    "title": "TEDxFCCU",
    "caption": "I made these for the TEDxFCCU event.",
    "images": [
      {
        "src": "/graphics/ted/19.png",
        "alt": "A TEDxFCCU postcard with red event lettering over an illuminated university courtyard.",
        "width": 1429,
        "height": 2000
      },
      {
        "src": "/graphics/ted/20.png",
        "alt": "A TEDxFCCU postcard with red event lettering over a black-and-white photograph of an evening crowd.",
        "width": 1429,
        "height": 2000
      }
    ]
  },
  {
    "title": "More postcards",
    "caption": "",
    "images": [
      {
        "src": "/graphics/last/3.png",
        "alt": "A Pakistan postcard with green typography and a collage of black-and-white archival scenes.",
        "width": 1429,
        "height": 2000,
        "caption": "Pakistan."
      },
      {
        "src": "/graphics/last/5.png",
        "alt": "An illustrated Allama Iqbal postcard with black Urdu calligraphy over repeated Urdu text.",
        "width": 1429,
        "height": 2000,
        "caption": "Allama Iqbal — sitaron se aagay jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain."
      },
      {
        "src": "/graphics/last/6.png",
        "alt": "A black postcard featuring a seated portrait of Allama Iqbal and Urdu calligraphy.",
        "width": 1429,
        "height": 2000,
        "caption": "Allama Iqbal — sitaron se aagay jahan aur bhi hain, abhi ishq ke imtihan aur bhi hain."
      },
      {
        "src": "/graphics/last/fsdf.png",
        "alt": "A patterned postcard with pixel-art watermelon slices and the repeated words From River to the Sea.",
        "width": 1429,
        "height": 2000,
        "caption": "From the river to the sea, Palestine will be free!!"
      }
    ]
  }
];
