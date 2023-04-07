export default function Home() {
  return (
    <div className="bg-indigo-950">
      <header className=" py-4 shadow">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex w-full items-center justify-between px-4 py-4 text-xl font-medium md:px-8">
            <img src="/assets/logo.png" width={195} height={74} alt="Logo" />
            <div className="hidden md:flex">
              <a href="#" className="mx-4">
                Feature
              </a>
              <a href="#" className="mx-4">
                Community
              </a>
            </div>
            <button className="md:hidden">
              <svg viewBox="0 0 20 20" fill="currentColor" className="menu h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M1 4.75A.75.75 0 0 1 1.75 4h16.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 4.75zm0 6A.75.75 0 0 1 1.75 10h16.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75zm0 6A.75.75 0 0 1 1.75 16h16.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75z"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* 卡片 */}
        <div className=" flex flex-row items-center justify-around">
          <div className="relative flex flex-col">
            <img src="/assets/bg_hero.png" className="absolute right-0 top-0 object-contain" />
            <p className="intro">
              A DECENTRALIZED MULTI-
              <br />
              CHAIN SHORT VIDEO SOCIAL
            </p>
            <p className="application">APPLICATION</p>
            <div className="divide"></div>
            <p>join WhiteList</p>
          </div>
          <div>
            <img src="/assets/phone.png" width={'334px'} height={'680px'} />
          </div>
        </div>

        <div className="feature">
          <p className="title">Features</p>
          <div className="box">
            <div className="item">
              <img src="/assets/web3.png" />
              <p className="tip">
                Web3 Digital
                <br /> Distribution
              </p>
              <p className="desc">
                Apply EVT protocol to <br /> distribute digital content
              </p>
            </div>

            <div className="item">
              <img src="/assets/social.png" />
              <p className="tip">
                Decentralized
                <br /> Social Network
              </p>
              <p className="desc">Minimalism and censorship resistance</p>
            </div>

            <div className="item">
              <img src="/assets/ai.png" />
              <p className="tip">
                AI
                <br /> Engagement
              </p>
              <p className="desc">Create rich content with AI</p>
            </div>

            <div className="item">
              <img src="/assets/web3.png" />
              <p className="tip">
                Watch to
                <br /> Earn
              </p>
              <p className="desc">
                Incentive ecological
                <br /> operation and prosperity
              </p>
            </div>
          </div>
        </div>

        <div className="community">
          <p className="title">Community</p>
          <div className="content">
            <a href="https://t.me/evt_protocol" target="_blank" rel="noreferrer">
              <img src="assets/telegram.png" />
            </a>
            <a href="https://twitter.com/evtprotocol" target="_blank" rel="noreferrer">
              <img src="assets/twitter.png" />
            </a>
          </div>
        </div>
      </main>

      <footer className="mt-8 bg-indigo-950 py-4">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-gray-800">&copy; 2022 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
