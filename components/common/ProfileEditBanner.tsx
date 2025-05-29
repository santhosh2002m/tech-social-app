"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactAction from "../ui/ContactAction";
import avatar_14 from "/public/images/hell.jpg";

// Define types for the ContactAction props
interface Action {
  0: string;
  1: string;
}

interface ContactActionProps {
  sectionType: string;
  actionList: Action[];
}

const ProfileEditBanner: React.FC = () => {
  const path: string = usePathname();
  const splitPath: string[] = path.split("/");
  const lastPath: string = splitPath[splitPath.length - 1];

  return (
    <div className="banner-area pages-create mb-5">
      <div className="single-box p-5">
        <div className="avatar-area">
          <div className="banner-text">TechSocial</div>
        </div>
        <div className="top-area py-4 d-center flex-wrap gap-3 justify-content-between align-items-start">
          <div className="d-flex gap-3 align-items-center">
            <div className="avatar-item p">
              <Image
                className="avatar-img max-un setting-size-120"
                src={avatar_14}
                alt="avatar"
              />
            </div>
            <div className="text-area text-start">
              <h4 className="m-0 mb-2">Lerio Mao</h4>
              <div className="friends-list d-flex flex-wrap gap-2 align-items-center text-center">
                <span className="mdtxt d-center">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 21.5555V0.555542H21.5V21.5555H0.5ZM18 16.8889H4V18.6389H18V16.8889ZM4 15.1389H18V13.3889H4V15.1389ZM4 11.0555H18V4.05554H4V11.0555Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="profile-icon-content">10k post </span>
                <label>|</label>
                <span className="mdtxt d-center following">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8.05554C6.65685 8.05554 8 6.7124 8 5.05554C8 3.39869 6.65685 2.05554 5 2.05554C3.34315 2.05554 2 3.39869 2 5.05554C2 6.7124 3.34315 8.05554 5 8.05554Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="profile-icon-content"> 5.7k Views</span>
                <label>|</label>
                <span className="mdtxt d-center following">
                  <svg
                    width="34"
                    height="18"
                    viewBox="0 0 34 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 8.85512C19.0537 8.85512 20.7278 7.02539 20.7278 4.79907C20.7278 2.59809 19.0625 0.85498 17 0.85498C14.9552 0.85498 13.2722 2.62402 13.2722 4.81616C13.2804 7.03423 14.9546 8.85512 17 8.85512ZM7.05875 9.04428C8.83604 9.04428 10.2945 7.44732 10.2945 5.48853C10.2945 3.57336 8.85371 2.02825 7.05875 2.02825C5.28088 2.02825 3.81355 3.59869 3.82239 5.50562C3.83123 7.45616 5.28088 9.04428 7.05875 9.04428ZM26.9501 9.04428C28.7191 9.04428 30.1776 7.45616 30.1776 5.50562C30.1864 3.59869 28.7191 2.02825 26.9501 2.02825C25.1469 2.02825 23.7055 3.57277 23.7055 5.48853C23.7055 7.44732 25.164 9.04428 26.9501 9.04428ZM17 7.55162C15.7401 7.55162 14.6611 6.34359 14.6611 4.81616C14.6611 3.31466 15.723 2.15848 17.0006 2.15848C18.2858 2.15848 19.3389 3.29757 19.3389 4.79848C19.3389 6.3265 18.277 7.55162 17 7.55162ZM7.05875 7.75905C6.0057 7.75905 5.10821 6.74902 5.10821 5.50621C5.10821 4.28993 5.99686 3.31407 7.05875 3.31407C8.14598 3.31407 9.01754 4.27225 9.01754 5.48912C9.01754 6.74902 8.12005 7.75905 7.05875 7.75905ZM26.9501 7.75905C25.8799 7.75905 24.9825 6.74902 24.9825 5.48912C24.9825 4.27225 25.854 3.31466 26.9501 3.31466C28.0114 3.31466 28.8918 4.28993 28.8918 5.5068C28.8918 6.74902 28.0026 7.75905 26.9501 7.75905ZM2.2602 16.9578H9.03463C8.62036 16.725 8.30096 16.2071 8.36166 15.6808H2.04452C1.87186 15.6808 1.78582 15.6119 1.78582 15.4481C1.78582 13.3078 4.22782 11.3054 7.04991 11.3054C8.13714 11.3054 9.11241 11.5647 9.9492 12.0561C10.2267 11.7042 10.5554 11.3959 10.9245 11.1416C9.8113 10.4079 8.47363 10.0284 7.04991 10.0284C3.43405 10.0284 0.5 12.6519 0.5 15.5258C0.5 16.4834 1.08693 16.9578 2.2602 16.9578ZM31.7481 16.9578C32.9131 16.9578 33.5 16.4834 33.5 15.5258C33.5 12.6519 30.5654 10.0284 26.9501 10.0284C25.5264 10.0284 24.1969 10.4079 23.0755 11.1421C23.4639 11.4091 23.7827 11.7114 24.0596 12.0561C24.8876 11.5647 25.8711 11.3054 26.9501 11.3054C29.7722 11.3054 32.2142 13.3078 32.2142 15.4481C32.2142 15.6119 32.1364 15.6808 31.9637 15.6808H25.6466C25.6984 16.2071 25.3879 16.725 24.9736 16.9578H31.7481ZM11.5803 16.9578H22.4197C23.8516 16.9578 24.534 16.5264 24.534 15.5771C24.534 13.316 21.6772 10.0455 17 10.0455C12.314 10.0455 9.45714 13.316 9.45714 15.5771C9.45714 16.5264 10.1395 16.9578 11.5803 16.9578ZM11.1661 15.6555C10.9421 15.6555 10.8473 15.5948 10.8473 15.4139C10.8473 13.9978 13.0394 11.349 17 11.349C20.9523 11.349 23.1445 13.9978 23.1445 15.4133C23.1445 15.5948 23.0579 15.6549 22.8339 15.6549L11.1661 15.6555Z"
                      fill="#F8F8F8"
                      stroke="white"
                    />
                  </svg>
                </span>
                <span className="profile-icon-content">4 followers</span>
                <label>|</label>
                <span className="mdtxt d-center following">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1667 4.47221L24.6667 7.97221L21.1667 11.4722M10.0833 9.72221C10.6196 9.72221 11.1506 9.61659 11.646 9.41138C12.1414 9.20618 12.5915 8.9054 12.9707 8.52623C13.3499 8.14706 13.6506 7.69691 13.8559 7.2015C14.0611 6.70609 14.1667 6.17511 14.1667 5.63888C14.1667 5.10264 14.0611 4.57166 13.8559 4.07625C13.6506 3.58084 13.3499 3.1307 12.9707 2.75152C12.5915 2.37235 12.1414 2.07157 11.646 1.86637C11.1506 1.66116 10.6196 1.55554 10.0833 1.55554C9.00038 1.55554 7.96176 1.98575 7.19599 2.75152C6.43022 3.5173 6.00001 4.55591 6.00001 5.63888C6.00001 6.72184 6.43022 7.76045 7.19599 8.52623C7.96176 9.292 9.00038 9.72221 10.0833 9.72221ZM1.33334 21.8555V22.5555H18.8333V21.8555C18.8333 19.2422 18.8333 17.9355 18.3247 16.9369C17.8773 16.0588 17.1634 15.3449 16.2853 14.8975C15.2867 14.3889 13.98 14.3889 11.3667 14.3889H8.80001C6.18668 14.3889 4.88001 14.3889 3.88134 14.8975C3.00329 15.3449 2.28941 16.0588 1.84201 16.9369C1.33334 17.9355 1.33334 19.2422 1.33334 21.8555Z"
                      stroke="#F8F8F8"
                      stroke-width="2.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="profile-icon-content">5.6k following</span>

                <label>|</label>
              </div>
            </div>
          </div>
          <div className="btn-item d-center gap-3">
            <Link href="#" className="cmn-btn d-center gap-1">
              <i className="material-symbols-outlined mat-icon fs-2">
                edit_note
              </i>
              Edit Profile
            </Link>

            <ContactAction
              sectionType="followings"
              actionList={[
                ["Block", "lock"],
                ["Report", "flag"],
              ]}
            />
          </div>
        </div>
        <div className="page-details">
          <ul className="nav mt-5 pt-4 flex-wrap gap-2 tab-area">
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/posts"
                className={`nav-link d-center ${
                  lastPath === "posts" && "active"
                }`}
              >
                Posts
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/likes"
                className={`nav-link d-center ${
                  lastPath === "likes" && "active"
                }`}
              >
                Likes
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/share"
                className={`nav-link d-center ${
                  lastPath === "share" && "active"
                }`}
              >
                Share
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/comments"
                className={`nav-link d-center ${
                  lastPath === "comments" && "active"
                }`}
              >
                Comments
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/mentions"
                className={`nav-link d-center ${
                  lastPath === "mentions" && "active"
                }`}
              >
                Mentions
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                href="/profile/comments"
                className={`nav-link d-center ${
                  lastPath === "comments" && "active"
                }`}
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditBanner;
