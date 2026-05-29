import { wsrv } from "../../lib/wsrv";
import type { Project } from "../types";

const project: Project = {
  title: "JD Airmax Day Reel",
  images: [
    wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGzo6rIq1dmaienYuF9beAw/JD%20Airmax%20Stills/Still%202026-05-19%20220924_1.1.10.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=f4mhif86&raw=1"),
    wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AFHWZjzbAbcTGwc11qjPZWY/JD%20Airmax%20Stills/Still%202026-05-19%20220927_1.1.4.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ssbf1yx4&raw=1"),
    wsrv("https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AB0A28g06m4aaaaO2lqGXN8/JD%20Airmax%20Stills/Still%202026-05-19%20220932_1.1.7.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=wp7hs3bk&raw=1"),
  ],
  videoUrl: "https://player.vimeo.com/video/1185665201?h=23e3a05526&autoplay=1&title=0&byline=0&portrait=0",
};

export default project;
