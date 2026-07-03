import { wsrv } from "../lib/wsrv";

interface RawPhoto {
  url: string;
  width: number;
  height: number;
}

const RAW_PHOTOS: RawPhoto[] = [
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALn-zjdouA78JPzOOjvX-gU/Photography/000050010025.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ewdjh3tc&raw=1",
    width: 3024,
    height: 2005,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/APPnBB3FRP4e48HjPqeVBH0/Photography/000064530016.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n0a4si92&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEMWjVncUnI6M90QpyPiJwQ/Photography/250705000508260018.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=n5vkntme&raw=1",
    width: 3130,
    height: 2075,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AC9BMS_VGdpd6oZtv0X-mdo/Photography/250710050824010013.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hfu9mz3a&raw=1",
    width: 6774,
    height: 4492,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJDZduG3T78vbB9wvYCd8D0/Photography/250710050824010025.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5htg95vu&raw=1",
    width: 4492,
    height: 6774,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKy7VkypZyIuKcA4sA7NFtk/Photography/250902054735020007.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=w6c2gkwh&raw=1",
    width: 1080,
    height: 716,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALJ5tQUGhCQfn273-V_z0KA/Photography/Arkansas%20Bridge%20November%202023.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=060al3xd&raw=1",
    width: 4491,
    height: 2805,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHOvY0U2t0XarT3B0kfpU_I/Photography/asher_cn_1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ij5sejmn&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMQgzgcuWJofOVUCWeGeA8A/Photography/asher_cn_2.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=kv92ngdz&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AA5hHBHz3TdnB3xcqs1xwRY/Photography/asher_cn_3.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ly88wcyk&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AJsJi-SO9l38YUlKJQq1sas/Photography/asher_cn_4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=5hd2boe5&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADJVE6RVJYNcrY8aEJTLTzY/Photography/Cathy%20Downtown%20Memphis.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=hyqa8sqs&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAeu9jc6u81RmUBmh4MB7ik/Photography/Cinestill%20Scans_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=4byy0dsf&raw=1",
    width: 2231,
    height: 3346,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ALTpNaJK-KgCbCdsSFwneF8/Photography/Cinestill%20Scans_29.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=19zamfkk&raw=1",
    width: 2108,
    height: 2952,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABuQnqTGAB8saRs3aSLJBME/Photography/Cinestill%20Scans_39.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=yth3q0l1&raw=1",
    width: 2266,
    height: 3490,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AEjRL9T8fJZKDmU9-b2x9AI/Photography/Jabier%20Downtown%20Memphis.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=15p0d0oz&raw=1",
    width: 2005,
    height: 3024,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADBgqFrFawngctOExQFRCuc/Photography/Rotenfels%20in%20Summer%20Cropped.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ykyp2j39&raw=1",
    width: 2980,
    height: 3725,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHxq_87ICd1N9oyJ1v2IavU/Photography/Stuart%20Street%20Crossing.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=8dfi3x33&raw=1",
    width: 4388,
    height: 2925,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ABcIatyPd1NX5YXQocffJuY/Photography/Techno%20Lane%20Skyline.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=1ddjx5sw&raw=1",
    width: 4445,
    height: 2963,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADbJy3yPYBLBWeQxweswZg4/Photography/Wareham%20House.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=tangupab&raw=1",
    width: 4469,
    height: 2784,
  },
  {
    url: "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOdAQLgutR1sGtG3wG16ZS0/Photography/Wayne%20Sip%201.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=0dkqag1o&raw=1",
    width: 3024,
    height: 2005,
  },
];

export const PHOTOGRAPHY_PHOTOS = RAW_PHOTOS.map(({ url, width, height }) => ({
  src: wsrv(url),
  width,
  height,
}));
