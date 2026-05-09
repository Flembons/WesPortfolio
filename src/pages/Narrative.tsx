import StillsGallery from "../components/StillsGallery";

const BR2TB_STILLS = [
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AHoqTlxc6EpBgzYGUen21oQ/BR2TB%20STILLS/COLOR%2002_01_00_17_13.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=aahzlxb7&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIr-_6DjizOWJjEnYDgGcCo/BR2TB%20STILLS/COLOR%2002_01_00_57_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=i94cq173&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AN8NO8sYQ8lWojFUOjyHKB8/BR2TB%20STILLS/COLOR%2002_01_01_48_01.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=3jnfs2yf&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AGA3c03K28at4EkoKg9SOyA/BR2TB%20STILLS/COLOR%2002_01_07_34_12.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=v4611nm0&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AIr-_6DjizOWJjEnYDgGcCo/BR2TB%20STILLS/COLOR%2002_01_00_57_19.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=d2izbqvw&raw=1",
  "https://www.dropbox.com/scl/fo/hjd8xrj53jkfrrf73i39n/AKkZDwVrfisBdXsvHdLlF-M/BR2TB%20STILLS/COLOR%2002_01_03_11_11.jpg?rlkey=jbpnq43atuaism6bl3se8k0uy&st=39lwki68&raw=1",
];

export default function Narrative() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-4">Bay Ridge to the Bronx</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        This short film follows Tony, a young man from Bay Ridge whose parents
        are away. After attending confession at his local church, he receives a
        call from his father with difficult news: Tony's grandfather is gravely
        ill and nearing the end of his life. Tasked with representing his
        family, Tony must travel to the Bronx to witness his grandfather's final
        moments.
      </p>
      <StillsGallery images={BR2TB_STILLS} />
    </div>
  );
}
