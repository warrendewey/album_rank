import Image from "next/image";
import Link from "next/link";

async function getAlbums() {
  const res = await fetch("http://localhost:4000/albums", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function Albums() {
  const albums = await getAlbums();

  return (
    <div className="flex flex-wrap justify-center">
      {albums.map((album) => (
        <div key={album.id} className="mx-3 my-2 ">
          <Link href={`/albums/${album.id}`}>
            <div className="card">
              <Image
                src={album.cover}
                alt={`Album cover for ${album.title}`}
                width={250}
                height={250}
              />
              <div className="px-3 py-1">
                <h2>{album.title}</h2>
                <div className="flex justify-between items-center ">
                  <p className="hover:text-blue-500">{album.artist}</p>
                  <p className="pill">{album.year}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
