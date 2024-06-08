export default function formatDuration(duration: number): string {
  const hours = Math.floor(duration / 60 / 60);
  const minutes = Math.ceil(duration / 60);
  const seconds = Math.ceil(duration % 60);
  return `${hours !== 0 ? hours.toString() + ":" : ""}${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
