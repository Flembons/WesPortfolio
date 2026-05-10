import StillsGallery from "../components/StillsGallery";

const BURP_STILLS = [
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG9JtUNBcJGgUWiaEXTYz6Q/BURP%20stills/Screenshot%202026-04-20%20at%205.29.38%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ihxd7inq&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AG7KirTJd4QB1s5RzmbNAI8/BURP%20stills/Screenshot%202026-04-20%20at%205.37.26%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=ikq2jelo&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/ADg-e7NQWY8FEsMMlCCQNGg/BURP%20stills/Screenshot%202026-04-20%20at%205.34.11%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=8753tc9e&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOjyOaE-ERH1InwLK5DSmXg/BURP%20stills/Screenshot%202026-04-20%20at%205.38.12%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=das1xdo5&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGg4vLyuATbZFOy40u1aUks/BURP%20stills/Screenshot%202026-04-20%20at%205.35.24%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=fqjlm9vj&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AOf8u94YS65WQjYMzNpgZVI/BURP%20stills/Screenshot%202026-04-20%20at%205.36.28%E2%80%AFPM%20(2).png?rlkey=jbpnq43atuaism6bl3se8k0uy&st=3zkezjlu&raw=1",
];

export default function Burp() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl italic font-semibold mb-4">BURP</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        When a young woman hesitates on the day of her abortion, she's pulled
        into the surreal underworld of Manhattan's Chinatown — where an opera
        singer, two bumbling thugs, and a cat-Xanax ring fronting as a dumpling
        shop blur the lines between grief and absurdity.
      </p>
      <StillsGallery images={BURP_STILLS} />
    </div>
  );
}
