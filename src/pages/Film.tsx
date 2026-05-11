import FadeIn from "../components/FadeIn";

export default function Film() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <FadeIn delay={0}>
        <h1 className="text-4xl font-bold">Film</h1>
      </FadeIn>

      <FadeIn delay={150}>
        <img
          src="https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHoqTlxc6EpBgzYGUen21oQ/BR2TB%20STILLS/COLOR%2002_01_00_17_13.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=aahzlxb7&raw=1"
          alt="BR2TB still"
          className="w-full object-cover"
        />
      </FadeIn>
    </div>
  );
}
