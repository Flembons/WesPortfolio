import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Modal from "../components/Modal";
import Project from "../components/Project";
import PhotoGrid from "../components/PhotoGrid";
import StillsGallery from "./components/StillsGallery";
import { wsrv } from "../lib/wsrv";

type Category = "Selected" | "Narrative" | "Photography";

interface Project {
  title: string;
  images: [string, string, string];
  description?: string;
  allImages?: string[];
  videoUrl?: string;
}

const PROJECTS: Record<Category, Project[]> = {
  Selected: [
    {
      title: "NEVERHOME — Perro",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIM8fZLi50ID2HxbvI4TPpY/Neverhome%20-%20Perro%20STILLS/Timeline%201_01_00_12_05.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=zk9zcmxr&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADzmPI655Df3u7fHnzBTJk8/Neverhome%20-%20Perro%20STILLS/Timeline%201_01_00_48_15.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=tyg2768n&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJAgBFQXlAV-VdyQfzclzkE/Neverhome%20-%20Perro%20STILLS/Timeline%201_01_02_17_09.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ac6lwazv&raw=1",
        ),
      ],
      videoUrl:
        "https://player.vimeo.com/video/1185673320?h=09674f5ee3&autoplay=1&title=0&byline=0&portrait=0",
    },
    {
      title: "4th ARQ Wayfinders Campaign",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJlI8hmk0srqrHC1tst8se0/Wayfinder%20STILLS/Still%202026-05-19%20220649_1.1.4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=lu69h1ar&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOrDElVbQz3eXOrFMWk9i4I/Wayfinder%20STILLS/Still%202026-05-19%20220653_1.1.7.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=z1t43mua&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEFrPzsYdA14W0WUhQN9Bqo/Wayfinder%20STILLS/Still%202026-05-19%20220656_1.1.6.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=g2b3yi64&raw=1",
        ),
      ],
      videoUrl:
        "https://player.vimeo.com/video/1193803862?h=f0243ed09a&autoplay=1&title=0&byline=0&portrait=0",
    },
    {
      title: "Saul 16mm Test Shoot",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAY-Q7sVZvLsd46C3x33uJw/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214023_1.1.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=h1cneboz&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMF26Ryk1UFric-jMTnTp_g/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214100_1.1.2.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=a0n6t30u&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMW8b7xMdvpLKV65THQqJ1I/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214104_1.1.3.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=yotgq6ty&raw=1",
        ),
      ],
      videoUrl:
        "https://player.vimeo.com/video/1188835060?h=6d42590e8b&autoplay=1&title=0&byline=0&portrait=0",
    },
    {
      title: 'Slowdown Dry Goods — "Life is a Gift"',
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APBcpuYNXsUvvbp77FNqdIw/Slowdown%20Life%20is%20a%20Gift%20STILLS/Still%202026-05-19%20215505_1.1.5.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=x0hmt70u&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AL42V9ZqNkyaws262OJ9hrs/Slowdown%20Life%20is%20a%20Gift%20STILLS/Still%202026-05-19%20215505_1.1.9.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=vhmtkpdz&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACAy9STZ76tNZdciteuuPE8/Slowdown%20Life%20is%20a%20Gift%20STILLS/Still%202026-05-19%20223736_1.1.17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=h53agm5a&raw=1",
        ),
      ],
      videoUrl:
        "https://player.vimeo.com/video/1029807859?h=aed2f464d2&autoplay=1&title=0&byline=0&portrait=0",
    },
    {
      title: "Dead Dove — Hiding Places",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABwhQKYPLU0-Qi0DhCcRXTM/Dead%20Dove%20STILLS/IMG_3816.JPG?rlkey=jbpnq43atuaism6bl3se8k0uy&st=6ejreh8c&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJWrOupD8YCymO6bdB9kLMQ/Dead%20Dove%20STILLS/Still%202026-05-19%20215917_1.2.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=jras14pb&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABJiynKIp-vuWSLauzeU6u0/Dead%20Dove%20STILLS/Still%202026-05-19%20215939_1.3.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=djus14pv&raw=1",
        ),
      ],
      videoUrl: "https://www.youtube.com/embed/JfFBKvXpz08?autoplay=1",
    },
    {
      title: "JD Airmax Day Reel",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGzo6rIq1dmaienYuF9beAw/JD%20Airmax%20Stills/Still%202026-05-19%20220924_1.1.10.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=f4mhif86&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AFHWZjzbAbcTGwc11qjPZWY/JD%20Airmax%20Stills/Still%202026-05-19%20220927_1.1.4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ssbf1yx4&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AB0A28g06m4aaaaO2lqGXN8/JD%20Airmax%20Stills/Still%202026-05-19%20220932_1.1.7.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=wp7hs3bk&raw=1",
        ),
      ],
      videoUrl:
        "https://player.vimeo.com/video/1185665201?h=23e3a05526&autoplay=1&title=0&byline=0&portrait=0",
    },
  ],
  Narrative: [
    {
      title: "Bay Ridge to the Bronx",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABKThyMy81AOKF_dLKbjdpE/BR2TB%20STILLS/COLOR%2002_01_02_26_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=nha1f2dd&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKkZDwVrfisBdXsvHdLlF-M/BR2TB%20STILLS/COLOR%2002_01_03_11_11.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=p73tzs6o&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADd7v5MMTfphgox1tHiHZBk/BR2TB%20STILLS/COLOR%2002_01_04_10_02.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=nlonxngx&raw=1",
        ),
      ],
      description:
        "This short film follows Tony, a young man from Bay Ridge whose parents are away. After attending confession at his local church, he receives a call from his father with difficult news: Tony's grandfather is gravely ill and nearing the end of his life. Tasked with representing his family, Tony must travel to the Bronx to witness his grandfather's final moments.",
      allImages: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABKThyMy81AOKF_dLKbjdpE/BR2TB%20STILLS/COLOR%2002_01_02_26_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=nha1f2dd&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKkZDwVrfisBdXsvHdLlF-M/BR2TB%20STILLS/COLOR%2002_01_03_11_11.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=p73tzs6o&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADd7v5MMTfphgox1tHiHZBk/BR2TB%20STILLS/COLOR%2002_01_04_10_02.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=nlonxngx&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOky_73-5tZCn2yoC-xUTxw/BR2TB%20STILLS/COLOR%2002_01_05_13_07.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=wac749cz&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APkrRnt_7sG89025kN2qcBI/BR2TB%20STILLS/COLOR%2002_01_05_41_17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=joewiulz&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AFX-vG6DNmqnLNSdaaFrcNY/BR2TB%20STILLS/COLOR%2002_01_05_53_20.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0z2mjh3w&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALcA0qWY-W1c4_y5cKl3pmc/BR2TB%20STILLS/COLOR%2002_01_06_02_20.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=isl1qn5n&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEbQypRYebsT15irbkH-U_4/BR2TB%20STILLS/COLOR%2002_01_06_21_06.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=wu0g99sp&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AP1SzTRnSPsgXGExTwHqaBg/BR2TB%20STILLS/COLOR%2002_01_06_33_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=qie0zrh1&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGA3c03K28at4EkoKg9SOyA/BR2TB%20STILLS/COLOR%2002_01_07_34_12.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=qcl5arz3&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIhwtY9ZlS-rnbJoonlvn7w/BR2TB%20STILLS/COLOR%2002_01_07_53_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=503k4lsi&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMC15vMRyTWGXyufRhn_Oho/BR2TB%20STILLS/COLOR%2002_01_08_28_18%202.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=fxtnetog&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AC0m2Wl7RtzWrEKp5Bp3P0o/BR2TB%20STILLS/COLOR%2002_01_08_31_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=2yh60csf&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AC1aGGqTYRirnES_dzxlPNM/BR2TB%20STILLS/COLOR%2002_01_08_48_16.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0pjyc7sm&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHoqTlxc6EpBgzYGUen21oQ/BR2TB%20STILLS/COLOR%2002_01_00_17_13.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=6a3v0pf0&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKJqln2f8M5yqrtuknxTXi0/BR2TB%20STILLS/COLOR%2002_01_00_28_10.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=u9whgdej&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIr-_6DjizOWJjEnYDgGcCo/BR2TB%20STILLS/COLOR%2002_01_00_57_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=33idhigj&raw=1",
        ),
      ],
    },
    {
      title: "BURP",
      images: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG5myIm7lT4HhBxo9iX81qI/BURP%20stills/Still%202026-05-19%20221502_1.1.17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=gia48uis&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN52ubryKdbH_ufjrUIWzY8/BURP%20stills/Still%202026-05-19%20221502_1.1.18.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=257j2og5&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABbte6xGLifKZvOGu9oYGTc/BURP%20stills/Still%202026-05-19%20221502_1.1.19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=f726e03x&raw=1",
        ),
      ],
      description:
        "When a young woman hesitates on the day of her abortion, she's pulled into the surreal underworld of Manhattan's Chinatown — where an opera singer, two bumbling thugs, and a cat-Xanax ring fronting as a dumpling shop blur the lines between grief and absurdity.",
      allImages: [
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG5myIm7lT4HhBxo9iX81qI/BURP%20stills/Still%202026-05-19%20221502_1.1.17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=gia48uis&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN52ubryKdbH_ufjrUIWzY8/BURP%20stills/Still%202026-05-19%20221502_1.1.18.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=257j2og5&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABbte6xGLifKZvOGu9oYGTc/BURP%20stills/Still%202026-05-19%20221502_1.1.19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=f726e03x&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALCnMGiSUCugKvTNS-U2Jaw/BURP%20stills/Still%202026-05-19%20221502_1.1.20.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=6nv0m9bf&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADuL5o3JD28cJ1z3PH433eQ/BURP%20stills/Still%202026-05-19%20221502_1.1.21.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0nv349pz&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALq7JXhC4L4lpXZs6s0Fqoo/BURP%20stills/Still%202026-05-19%20221502_1.1.22.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0j7tiqjz&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACpW1_Yqi4qFC5LGcBPAjo8/BURP%20stills/Still%202026-05-19%20221502_1.1.23.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=dalvn28j&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACuMMkYr-7gWmhVvMU9PFRg/BURP%20stills/Still%202026-05-19%20221502_1.1.24.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=fmarwz7t&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACygl9j5wqvh_v_mcZGDGZY/BURP%20stills/Still%202026-05-19%20221502_1.1.25.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=agceegb1&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEGtUn_WkANFVPlSTpkOP0c/BURP%20stills/Still%202026-05-19%20221502_1.1.26.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=pa8ni7ep&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADSRs3r9sJxpdreixNbmJJw/BURP%20stills/Still%202026-05-19%20221502_1.1.27.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ws00pqmb&raw=1",
        ),
        wsrv(
          "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAMf8GrgwG4Wpu-tlTWKJDs/BURP%20stills/Still%202026-05-19%20221502_1.1.28.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=s7w2g2le&raw=1",
        ),
      ],
    },
  ],
  Photography: [],
};

const PHOTOGRAPHY_PHOTOS = [
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALn-zjdouA78JPzOOjvX-gU/Photography/000050010025.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ewdjh3tc&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APPnBB3FRP4e48HjPqeVBH0/Photography/000064530016.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n0a4si92&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEMWjVncUnI6M90QpyPiJwQ/Photography/250705000508260018.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n5vkntme&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AC9BMS_VGdpd6oZtv0X-mdo/Photography/250710050824010013.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hfu9mz3a&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJDZduG3T78vbB9wvYCd8D0/Photography/250710050824010025.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5htg95vu&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKy7VkypZyIuKcA4sA7NFtk/Photography/250902054735020007.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=w6c2gkwh&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALJ5tQUGhCQfn273-V_z0KA/Photography/Arkansas%20Bridge%20November%202023.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=060al3xd&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHOvY0U2t0XarT3B0kfpU_I/Photography/asher_cn_1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ij5sejmn&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMQgzgcuWJofOVUCWeGeA8A/Photography/asher_cn_2.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=kv92ngdz&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AA5hHBHz3TdnB3xcqs1xwRY/Photography/asher_cn_3.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ly88wcyk&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJsJi-SO9l38YUlKJQq1sas/Photography/asher_cn_4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5hd2boe5&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADJVE6RVJYNcrY8aEJTLTzY/Photography/Cathy%20Downtown%20Memphis.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hyqa8sqs&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAeu9jc6u81RmUBmh4MB7ik/Photography/Cinestill%20Scans_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=4byy0dsf&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALTpNaJK-KgCbCdsSFwneF8/Photography/Cinestill%20Scans_29.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=19zamfkk&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABuQnqTGAB8saRs3aSLJBME/Photography/Cinestill%20Scans_39.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=yth3q0l1&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEjRL9T8fJZKDmU9-b2x9AI/Photography/Jabier%20Downtown%20Memphis.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=15p0d0oz&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADBgqFrFawngctOExQFRCuc/Photography/Rotenfels%20in%20Summer%20Cropped.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ykyp2j39&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHxq_87ICd1N9oyJ1v2IavU/Photography/Stuart%20Street%20Crossing.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=8dfi3x33&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABcIatyPd1NX5YXQocffJuY/Photography/Techno%20Lane%20Skyline.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=1ddjx5sw&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADbJy3yPYBLBWeQxweswZg4/Photography/Wareham%20House.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=tangupab&raw=1",
  ),
  wsrv(
    "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOdAQLgutR1sGtG3wG16ZS0/Photography/Wayne%20Sip%201.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0dkqag1o&raw=1",
  ),
];

const CATEGORIES: Category[] = ["Selected", "Narrative", "Photography"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("Selected");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const projects = PROJECTS[activeCategory];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 250);
  };

  return (
    <div className="">
      <div className="flex gap-8 mb-10 border-b border-site-border">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer pb-3 text-sm tracking-widest uppercase transition-colors duration-200 ${
              activeCategory === cat
                ? "text-site-text border-b-2 border-site-accent -mb-px"
                : "text-site-muted hover:text-site-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {activeCategory === "Photography" ? (
          <PhotoGrid photos={PHOTOGRAPHY_PHOTOS} />
        ) : projects.length === 0 ? (
          <p className="text-site-muted text-sm tracking-wide">Coming soon.</p>
        ) : (
          projects.map((project) => (
            <FadeIn key={project.title}>
              <Project
                title={project.title}
                images={project.images}
                onClick={
                  project.allImages || project.videoUrl
                    ? () => openModal(project)
                    : undefined
                }
              />
            </FadeIn>
          ))
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedProject?.videoUrl ? (
          <div className="w-full aspect-video">
            <iframe
              src={selectedProject.videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <StillsGallery images={selectedProject?.allImages ?? []} />
        )}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl italic">{selectedProject?.title}</h2>
          {selectedProject?.description && (
            <p className="text-site-muted leading-relaxed">{selectedProject.description}</p>
          )}
        </div>
      </Modal>
    </div>
  );
}
