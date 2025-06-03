"use client";
import RightSide from "@/components/home/RightSide";
import HomeLeft from "@/components/menu/HomeLeft";

export default function Chats() {
  return (
    <>
      <main className="main-content">
        <div className="container sidebar-toggler">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
              <HomeLeft clss="d-lg-none" />
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
              <div className="chat-container">
                <div className="chat-header">
                  <button className="back-button">←</button>
                  <h2 className="chat-title">Chats</h2>
                </div>
                <div className="chat-content">
                  <div className="chat-placeholder">
                    <div className="placeholder-icon">📄</div>
                    <p className="placeholder-text">No chat found</p>
                    <p className="placeholder-subtext">
                      Follow some user to start chat
                    </p>
                  </div>
                </div>
                <div className="chat-input-container">
                  <button className="chat-icon-button">📎</button>
                  <input
                    type="text"
                    className="chat-input-field"
                    placeholder="Type a message..."
                  />
                  <button className="chat-send-button">Send</button>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
              <RightSide />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
