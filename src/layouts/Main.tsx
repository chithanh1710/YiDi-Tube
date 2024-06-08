import { useState } from "react";
import CategoryPills from "../components/CategoryPills";
import { categories, videos } from "../data/home";
import VideoGridItem from "../components/VideoGridItem";
import SlideCategoryPills from "../components/SlideCategoryPills";
import VideoGridList from "../components/VideoGridList";
import SideBar from "../components/SideBar";
import { playlists, subscriptions } from "../data/sidebar";

export function Main() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
      <SideBar playlists={playlists} subscriptions={subscriptions} />
      <div className="overflow-x-hidden px-8 pb-4">
        <SlideCategoryPills>
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </SlideCategoryPills>

        <VideoGridList>
          {videos.map((video) => (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </VideoGridList>
      </div>
    </div>
  );
}
