import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { currentlyPlayingSong } from '../../../lib/spotify';

export async function GET() {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return NextResponse.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=10"
  // );

  const data = {
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };

  revalidateTag('/api/now-playing');

  return NextResponse.json(data);
}
