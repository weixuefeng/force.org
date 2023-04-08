import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Home() {
  function showAlert() {
    openModal()
  }

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div>
      <header className="relative z-20 py-4 shadow">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="flex w-full items-center justify-between px-4 py-4 text-xl font-medium md:px-8">
            <img src="/assets/logo.png" width={195} height={74} alt="Logo" />
            <div className="hidden md:flex">
              <a href="#feature" className="mx-4">
                Feature
              </a>
              <a href="#community" className="mx-4">
                Community
              </a>
            </div>
            {/* <button className="md:hidden">
              <svg viewBox="0 0 20 20" fill="currentColor" className="menu h-6 w-6">
                <path
                  fillRule="evenodd"
                  d="M1 4.75A.75.75 0 0 1 1.75 4h16.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 4.75zm0 6A.75.75 0 0 1 1.75 10h16.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75zm0 6A.75.75 0 0 1 1.75 16h16.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1-.75-.75z"
                ></path>
              </svg>
            </button> */}
          </nav>
        </div>
      </header>

      <main className="main">
        {/* 卡片 */}
        <div className="hero">
          <div className="z-10 flex flex-col">
            <p className="intro">
              A DECENTRALIZED MULTI-
              <br />
              CHAIN SHORT VIDEO SOCIAL
            </p>
            <p className="application">APPLICATION</p>
            <div className="divide"></div>
            {/* <button className="join" onClick={showAlert}>
              Join WhiteList
            </button> */}
          </div>
          <div className="z-10 hidden md:flex">
            <img src="/assets/phone.png" width={'334px'} height={'680px'} />
          </div>
          <img className="absolute bottom-0 h-auto" src="/assets/bg_hero.png" />
        </div>

        <div id="feature" className="feature">
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
              <img src="/assets/earn.png" />
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

        <div id="community" className="community">
          <p className="title">Community</p>
          <div className="content">
            <a href="https://t.me/force_app" target="_blank" rel="noreferrer">
              <img src="assets/telegram.png" />
            </a>
            <a href="https://twitter.com/forcewallet" target="_blank" rel="noreferrer">
              <img src="assets/twitter.png" />
            </a>
          </div>
        </div>
      </main>

      <footer className="footer py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">&copy; 2023 All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Tip
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Temporarily unavailable, please wait for the announcement</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
