import Link from "next/link";
import Contact from "../common/Contact";
import MakePost from "../common/MakePost";
import NewsFeeds from "../common/NewsFeeds";
import Photos from "../marketplacePost/Photos";
import HomeLeft from "../menu/HomeLeft";

const bioData = [
  {
    id: 1,
    type: "santhosh", // Placeholder for username
    icon: "person", // Icon for username
    class: "",
  },
  {
    id: 2,
    type: "Cloud Industry",
    icon: "factory", // Matches the industry icon in the screenshot
    class: "",
  },
  {
    id: 3,
    type: "New Delhi",
    icon: "pin_drop", // Matches the location pin icon in the screenshot
    class: "",
  },
  {
    id: 4,
    type: "www.test.com",
    icon: "link", // Matches the link icon in the screenshot
    class: "link",
  },
  {
    id: 5,
    type: "100 Followers", // Placeholder for followers
    icon: "group", // Icon for followers
    class: "",
  },
  {
    id: 6,
    type: "50 Following", // Placeholder for following
    icon: "group_add", // Icon for following
    class: "",
  },
];

const ProfilePostMain = () => {
  return (
    <>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
        <HomeLeft clss="d-lg-none" />
      </div>
      <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
        {/* Make Post */}
        <MakePost />

        {/* Feeds */}
        <NewsFeeds clss="p-3 p-sm-5" />
      </div>
      <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
        <div className="profile-sidebar cus-scrollbar max-width p-5">
          <div className="sidebar-area">
            <div className="mb-3">
              <h6 className="d-inline-flex">About</h6>
            </div>
            <p className="mdtxt descript">
              Co-Founder & CEO DataCenter Hub | WhiteNoise Corporation | Tech
              Influencer
            </p>
          </div>
          <div className="sidebar-area mt-5">
            <div className="mb-2">
              <h6 className="d-inline-flex">Info</h6>
            </div>
            <ul className="d-grid gap-2 mt-4">
              {bioData.map((itm) => (
                <li key={itm.id} className="d-flex align-items-center gap-2">
                  <i className="material-symbols-outlined mat-icon">
                    {itm.icon}
                  </i>
                  <span className={`mdtxt ${itm.class}`}>{itm.type}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePostMain;
