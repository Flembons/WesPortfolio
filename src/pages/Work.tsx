import { useState, useEffect } from "react";
import FadeIn from "../components/FadeIn";
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
}

const PROJECTS: Record<Category, Project[]> = {
  Selected: [
    {
      title: "NEVERHOME — Perro",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIM8fZLi50ID2HxbvI4TPpY/Neverhome%20-%20Perro%20STILLS/Timeline%201_01_00_12_05.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=zk9zcmxr&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADzmPI655Df3u7fHnzBTJk8/Neverhome%20-%20Perro%20STILLS/Timeline%201_01_00_48_15.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=tyg2768n&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJAgBFQXlAV-VdyQfzclzkE/Neverhome%20-%20Perro%20STILLS/Timeline%201_01_02_17_09.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ac6lwazv&raw=1"),
      ],
    },
    {
      title: "4th ARQ Wayfinders Campaign",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJlI8hmk0srqrHC1tst8se0/Wayfinder%20STILLS/Still%202026-05-19%20220649_1.1.4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=lu69h1ar&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOrDElVbQz3eXOrFMWk9i4I/Wayfinder%20STILLS/Still%202026-05-19%20220653_1.1.7.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=z1t43mua&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEFrPzsYdA14W0WUhQN9Bqo/Wayfinder%20STILLS/Still%202026-05-19%20220656_1.1.6.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=g2b3yi64&raw=1"),
      ],
    },
    {
      title: "Saul 16mm Test Shoot",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAY-Q7sVZvLsd46C3x33uJw/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214023_1.1.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=h1cneboz&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMF26Ryk1UFric-jMTnTp_g/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214100_1.1.2.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=a0n6t30u&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMW8b7xMdvpLKV65THQqJ1I/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214104_1.1.3.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=yotgq6ty&raw=1"),
      ],
    },
    {
      title: 'Slowdown Dry Goods — "Life is a Gift"',
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APBcpuYNXsUvvbp77FNqdIw/Slowdown%20Life%20is%20a%20Gift%20STILLS/Still%202026-05-19%20215505_1.1.5.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=x0hmt70u&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AL42V9ZqNkyaws262OJ9hrs/Slowdown%20Life%20is%20a%20Gift%20STILLS/Still%202026-05-19%20215505_1.1.9.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=vhmtkpdz&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACAy9STZ76tNZdciteuuPE8/Slowdown%20Life%20is%20a%20Gift%20STILLS/Still%202026-05-19%20223736_1.1.17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=h53agm5a&raw=1"),
      ],
    },
    {
      title: "Dead Dove — Hiding Places",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABwhQKYPLU0-Qi0DhCcRXTM/Dead%20Dove%20STILLS/IMG_3816.JPG?rlkey=jbpnq43atuaism6bl3se8k0uy&st=6ejreh8c&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJWrOupD8YCymO6bdB9kLMQ/Dead%20Dove%20STILLS/Still%202026-05-19%20215917_1.2.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=jras14pb&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABJiynKIp-vuWSLauzeU6u0/Dead%20Dove%20STILLS/Still%202026-05-19%20215939_1.3.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=djus14pv&raw=1"),
      ],
    },
    {
      title: "JD Airmax Day Reel",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGzo6rIq1dmaienYuF9beAw/JD%20Airmax%20Stills/Still%202026-05-19%20220924_1.1.10.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=f4mhif86&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AFHWZjzbAbcTGwc11qjPZWY/JD%20Airmax%20Stills/Still%202026-05-19%20220927_1.1.4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ssbf1yx4&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AB0A28g06m4aaaaO2lqGXN8/JD%20Airmax%20Stills/Still%202026-05-19%20220932_1.1.7.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=wp7hs3bk&raw=1"),
      ],
    },
  ],
  Narrative: [
    {
      title: "Bay Ridge to the Bronx",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN8NO8sYQ8lWojFUOjyHKB8/BR2TB%20STILLS/COLOR%2002_01_01_48_01.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5wytsxj2&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKkZDwVrfisBdXsvHdLlF-M/BR2TB%20STILLS/COLOR%2002_01_03_11_11.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=mtfjmfno&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AF70QtxRoDcSVeVwQP_5w8s/BR2TB%20STILLS/COLOR%2002_01_05_02_15.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=bspr0me1&raw=1"),
      ],
      description:
        "This short film follows Tony, a young man from Bay Ridge whose parents are away. After attending confession at his local church, he receives a call from his father with difficult news: Tony's grandfather is gravely ill and nearing the end of his life. Tasked with representing his family, Tony must travel to the Bronx to witness his grandfather's final moments.",
      allImages: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN8NO8sYQ8lWojFUOjyHKB8/BR2TB%20STILLS/COLOR%2002_01_01_48_01.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5wytsxj2&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKkZDwVrfisBdXsvHdLlF-M/BR2TB%20STILLS/COLOR%2002_01_03_11_11.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=mtfjmfno&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AF70QtxRoDcSVeVwQP_5w8s/BR2TB%20STILLS/COLOR%2002_01_05_02_15.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=bspr0me1&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APkrRnt_7sG89025kN2qcBI/BR2TB%20STILLS/COLOR%2002_01_05_41_17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ot95gvtu&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AP1SzTRnSPsgXGExTwHqaBg/BR2TB%20STILLS/COLOR%2002_01_06_33_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=1mihf24e&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGA3c03K28at4EkoKg9SOyA/BR2TB%20STILLS/COLOR%2002_01_07_34_12.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=vsizq25w&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AB-D16yvPbbtKrHs7f-0paM/BR2TB%20STILLS/COLOR%2002_01_08_30_14%203.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=obrwq2yo&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMquAnQJtHaklv4gUvRfD9w/BR2TB%20STILLS/COLOR%2002_01_08_51_22.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=9eos0tbw&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHoqTlxc6EpBgzYGUen21oQ/BR2TB%20STILLS/COLOR%2002_01_00_17_13.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=rgblmtr1&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKJqln2f8M5yqrtuknxTXi0/BR2TB%20STILLS/COLOR%2002_01_00_28_10.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=2ezpiukn&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIr-_6DjizOWJjEnYDgGcCo/BR2TB%20STILLS/COLOR%2002_01_00_57_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=h7j98nfz&raw=1"),
      ],
    },
    {
      title: "BURP",
      images: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG5myIm7lT4HhBxo9iX81qI/BURP%20stills/Still%202026-05-19%20221502_1.1.17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=aivbyql4&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN52ubryKdbH_ufjrUIWzY8/BURP%20stills/Still%202026-05-19%20221502_1.1.18.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=iybs2q0d&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABbte6xGLifKZvOGu9oYGTc/BURP%20stills/Still%202026-05-19%20221502_1.1.19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=c7efydcw&raw=1"),
      ],
      description:
        "When a young woman hesitates on the day of her abortion, she's pulled into the surreal underworld of Manhattan's Chinatown — where an opera singer, two bumbling thugs, and a cat-Xanax ring fronting as a dumpling shop blur the lines between grief and absurdity.",
      allImages: [
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG5myIm7lT4HhBxo9iX81qI/BURP%20stills/Still%202026-05-19%20221502_1.1.17.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=aivbyql4&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN52ubryKdbH_ufjrUIWzY8/BURP%20stills/Still%202026-05-19%20221502_1.1.18.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=iybs2q0d&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABbte6xGLifKZvOGu9oYGTc/BURP%20stills/Still%202026-05-19%20221502_1.1.19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=c7efydcw&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALCnMGiSUCugKvTNS-U2Jaw/BURP%20stills/Still%202026-05-19%20221502_1.1.20.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=zxyz8csw&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADuL5o3JD28cJ1z3PH433eQ/BURP%20stills/Still%202026-05-19%20221502_1.1.21.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=b0h0xjol&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALq7JXhC4L4lpXZs6s0Fqoo/BURP%20stills/Still%202026-05-19%20221502_1.1.22.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n92smp9v&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACpW1_Yqi4qFC5LGcBPAjo8/BURP%20stills/Still%202026-05-19%20221502_1.1.23.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=t5pfggga&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACuMMkYr-7gWmhVvMU9PFRg/BURP%20stills/Still%202026-05-19%20221502_1.1.24.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=awvnbusa&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ACygl9j5wqvh_v_mcZGDGZY/BURP%20stills/Still%202026-05-19%20221502_1.1.25.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=73sdo5nd&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEGtUn_WkANFVPlSTpkOP0c/BURP%20stills/Still%202026-05-19%20221502_1.1.26.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=tkgphh40&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADSRs3r9sJxpdreixNbmJJw/BURP%20stills/Still%202026-05-19%20221502_1.1.27.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=kjdh0h2v&raw=1"),
        wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAMf8GrgwG4Wpu-tlTWKJDs/BURP%20stills/Still%202026-05-19%20221502_1.1.28.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hegcvcr9&raw=1"),
      ],
    },
  ],
  Photography: [],
};

const PHOTOGRAPHY_PHOTOS = [
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALn-zjdouA78JPzOOjvX-gU/Photography/000050010025.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ewdjh3tc&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APPnBB3FRP4e48HjPqeVBH0/Photography/000064530016.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n0a4si92&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEMWjVncUnI6M90QpyPiJwQ/Photography/250705000508260018.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n5vkntme&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AC9BMS_VGdpd6oZtv0X-mdo/Photography/250710050824010013.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hfu9mz3a&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJDZduG3T78vbB9wvYCd8D0/Photography/250710050824010025.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5htg95vu&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKy7VkypZyIuKcA4sA7NFtk/Photography/250902054735020007.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=w6c2gkwh&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALJ5tQUGhCQfn273-V_z0KA/Photography/Arkansas%20Bridge%20November%202023.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=060al3xd&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHOvY0U2t0XarT3B0kfpU_I/Photography/asher_cn_1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ij5sejmn&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMQgzgcuWJofOVUCWeGeA8A/Photography/asher_cn_2.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=kv92ngdz&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AA5hHBHz3TdnB3xcqs1xwRY/Photography/asher_cn_3.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ly88wcyk&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJsJi-SO9l38YUlKJQq1sas/Photography/asher_cn_4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5hd2boe5&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADJVE6RVJYNcrY8aEJTLTzY/Photography/Cathy%20Downtown%20Memphis.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hyqa8sqs&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAeu9jc6u81RmUBmh4MB7ik/Photography/Cinestill%20Scans_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=4byy0dsf&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALTpNaJK-KgCbCdsSFwneF8/Photography/Cinestill%20Scans_29.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=19zamfkk&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABuQnqTGAB8saRs3aSLJBME/Photography/Cinestill%20Scans_39.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=yth3q0l1&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEjRL9T8fJZKDmU9-b2x9AI/Photography/Jabier%20Downtown%20Memphis.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=15p0d0oz&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADBgqFrFawngctOExQFRCuc/Photography/Rotenfels%20in%20Summer%20Cropped.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ykyp2j39&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHxq_87ICd1N9oyJ1v2IavU/Photography/Stuart%20Street%20Crossing.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=8dfi3x33&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABcIatyPd1NX5YXQocffJuY/Photography/Techno%20Lane%20Skyline.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=1ddjx5sw&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADbJy3yPYBLBWeQxweswZg4/Photography/Wareham%20House.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=tangupab&raw=1"),
  wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOdAQLgutR1sGtG3wG16ZS0/Photography/Wayne%20Sip%201.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0dkqag1o&raw=1"),
];

const CATEGORIES: Category[] = ["Selected", "Narrative", "Photography"];

const MODAL_FADE_MS = 250;

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>("Selected");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const projects = PROJECTS[activeCategory];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedProject(null), MODAL_FADE_MS);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedProject]);

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
                onClick={project.allImages ? () => openModal(project) : undefined}
              />
            </FadeIn>
          ))
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity ease-in-out overflow-y-auto"
          style={{ opacity: modalVisible ? 1 : 0, transitionDuration: `${MODAL_FADE_MS}ms` }}
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer text-2xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
          <div
            className="w-full max-w-4xl flex flex-col gap-6 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <StillsGallery
              images={selectedProject.allImages!}
              interval={999999}
              contain
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl italic">{selectedProject.title}</h2>
              {selectedProject.description && (
                <p className="text-site-muted leading-relaxed">{selectedProject.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
