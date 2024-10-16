import Image from "next/image";
import Link from "next/link";

async function getAlbum(id) {
  const res = await fetch("http://localhost:4000/albums/" + id, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function AlbumDetails({ params }) {
  const album = await getAlbum(params.id);

  return (
    <main>
      <div className="flex my-3 justify-between">
        <div className="w-1/3 pl-8">
          <Image
            src={album.cover}
            alt={`Album cover for ${album.title}`}
            width={400}
            height={400}
            className="rounded-lg shadow-md shadow-stone-900"
          />
        </div>
        <div className="justify-center pl-6 py-1 w-1/3">
          <h1>{album.title}</h1>
          <div className="flex items-center py-2 text-lg">
            <p className="pill-big">{album.year}</p>
            <p className="text-stone-400 px-1">Album by</p>
            <p className="hover:text-blue-500 hover:border-blue-500 border-b text-xl">
              {album.artist}
            </p>
          </div>
        </div>
        <div className="w-1/3 pt-4">
          <Link
            href={`/albums/${album.id}/review`}
            className="rounded-sm bg-stone-500 px-4 py-3 hover:bg-stone-400"
          >
            Rate
          </Link>
        </div>
      </div>
    </main>
  );
}
