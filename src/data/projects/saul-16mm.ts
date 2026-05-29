import { wsrv } from "../../lib/wsrv";
import type { Project } from "../types";

const project: Project = {
  title: "Saul 16mm Test Shoot",
  images: [
    wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AAY-Q7sVZvLsd46C3x33uJw/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214023_1.1.1.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=h1cneboz&raw=1"),
    wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMF26Ryk1UFric-jMTnTp_g/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214100_1.1.2.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=a0n6t30u&raw=1"),
    wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AMW8b7xMdvpLKV65THQqJ1I/Saul%2016mm%20Test%20Stills/Still%202026-05-19%20214104_1.1.3.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=yotgq6ty&raw=1"),
  ],
  videoUrl: "https://player.vimeo.com/video/1188835060?h=6d42590e8b&autoplay=1&title=0&byline=0&portrait=0",
};

export default project;
