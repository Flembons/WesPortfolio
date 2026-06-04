import { wsrv } from "../../lib/wsrv";
import type { Project } from "../types";

const project: Project = {
  title: "All Hoods Considered",
  images: [
    wsrv(
      "https://www.dropbox.com/scl/fo/d0seayasbi2cgdgnxqm5i/ANc-2uwbx1hRDsFPomyJqmI/Still%202026-06-03%20123843_1.1.1.jpg?rlkey=dm5wv2sbzwduajpd6bfwv1u23&st=yvmo4zts&raw=1",
    ),
    wsrv(
      "https://www.dropbox.com/scl/fo/d0seayasbi2cgdgnxqm5i/AJsIQ_QFw-nZJh45xiTOJ40/Still%202026-06-03%20123937_1.1.3.jpg?rlkey=dm5wv2sbzwduajpd6bfwv1u23&st=q9hi9o19&raw=1",
    ),
    wsrv(
      "https://www.dropbox.com/scl/fo/d0seayasbi2cgdgnxqm5i/ABL__M816rQaPiIOof8BB30/Still%202026-06-03%20123949_1.1.24.jpg?rlkey=dm5wv2sbzwduajpd6bfwv1u23&st=exsmoaqi&raw=1",
    ),
  ],
  videoUrl: "https://player.vimeo.com/video/1194721461?h=78739828a8&autoplay=1&title=0&byline=0&portrait=0",
};

export default project;
