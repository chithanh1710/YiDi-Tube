import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import React, { ElementType, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import Button, { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";
import { useSideBarContext } from "../contexts/SideBarContexts";
import { PageHeaderFirstSection } from "../layouts/PageHeader";

type playlistsProps = {
  id: string;
  name: string;
}[];
type subscriptionsProps = {
  channelName: string;
  id: string;
  imgUrl: string;
}[];

export default function SideBar({
  playlists,
  subscriptions,
}: {
  playlists: playlistsProps;
  subscriptions: subscriptionsProps;
}) {
  const { isLagreOpen, isSmallOpen, close } = useSideBarContext();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto ml-1 pb-4 flex flex-col scrollbar-hidden ${
          isLagreOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSideBarItem IconOrImgUrl={Home} title="Home" url="/" />
        <SmallSideBarItem IconOrImgUrl={Repeat} title="Shorts" url="/shorts" />
        <SmallSideBarItem
          IconOrImgUrl={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSideBarItem
          IconOrImgUrl={Library}
          title="Library"
          url="/library"
        />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        ></div>
      )}
      <aside
        className={`w-56 absolute top-0 overflow-y-auto pb-4 flex-col scrollbar-hidden gap-2 px-2 lg:sticky ${
          isLagreOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSideBarSection>
          <LargeSideBarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSideBarItem
            IconOrImgUrl={Repeat}
            title="Shorts"
            url="/shorts"
          />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={5}>
          <LargeSideBarItem
            IconOrImgUrl={Library}
            title="Library"
            url="/library"
          />
          <LargeSideBarItem
            IconOrImgUrl={History}
            title="History"
            url="/history"
          />
          <LargeSideBarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSideBarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map((playlist) => (
            <LargeSideBarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSideBarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Explore">
          <LargeSideBarItem
            IconOrImgUrl={Flame}
            title="Trending"
            url="/trending"
          />
          <LargeSideBarItem
            IconOrImgUrl={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSideBarItem IconOrImgUrl={Music2} title="Music" url="/music" />
          <LargeSideBarItem
            IconOrImgUrl={Film}
            title="Movie & TV"
            url="/movie-tv"
          />
          <LargeSideBarItem IconOrImgUrl={Radio} title="Live" url="/live" />
          <LargeSideBarItem
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            url="/gaming"
          />
          <LargeSideBarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
          <LargeSideBarItem
            IconOrImgUrl={Trophy}
            title="Sports"
            url="/sports"
          />
          <LargeSideBarItem
            IconOrImgUrl={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSideBarItem
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSideBarItem
            IconOrImgUrl={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSideBarSection>
      </aside>
    </>
  );
}

type SmallSideBarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
};

function SmallSideBarItem({ IconOrImgUrl, title, url }: SmallSideBarItemProps) {
  return (
    <NavLink
      to={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4  flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <IconOrImgUrl className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </NavLink>
  );
}

type LargeSideBarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children).flat();
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const showExpandButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="h-6 w-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}

type LargeSideBarItemProps = {
  IconOrImgUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSideBarItem({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}: LargeSideBarItemProps) {
  return (
    <NavLink
      to={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive && "font-bold bg-neutral-100 hover:bg-secondary"
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </NavLink>
  );
}
