import creatifyLogo from "../assets/creatify.png"; // pastikan path-nya sesuai struktur project-mu

const Footer = () => {
     return (
          <footer className="max-w-screen-xl mx-auto px-6 py-10 border-t border-gray-300 mt-10">
               {/* Grid Menu */}
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2 text-sm text-gray-700 mb-6">
                    <span>graphic design</span>
                    <span>programming</span>
                    <span>video editing</span>
                    <span>music & audio</span>
                    <span>help & support</span>
                    <span>photography</span>
                    <span>writting</span>
                    <span>commision</span>
                    <span></span>
                    <span>about us</span>
               </div>

               <hr className="mb-6 border-gray-300" />

               {/* Logo and Social Icons */}
               <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <img
                         src={creatifyLogo}
                         alt="Creatify Logo"
                         className="w-32"
                    />

                    <div className="flex gap-3 mt-4">
                         {/* Instagram */}
                         <a
                              href="https://instagram.com"
                              aria-label="Instagram"
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-purple-500 hover:bg-gray-300"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="18"
                                   height="18"
                                   fill="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.98.24 2.44.406a4.93 4.93 0 011.74 1.09 4.93 4.93 0 011.09 1.74c.166.46.352 1.27.406 2.44.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.98-.406 2.44a4.93 4.93 0 01-1.09 1.74 4.93 4.93 0 01-1.74 1.09c-.46.166-1.27.352-2.44.406-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.98-.24-2.44-.406a4.93 4.93 0 01-1.74-1.09 4.93 4.93 0 01-1.09-1.74c-.166-.46-.352-1.27-.406-2.44C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.98.406-2.44a4.93 4.93 0 011.09-1.74 4.93 4.93 0 011.74-1.09c.46-.166 1.27-.352 2.44-.406C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.144 0-3.507.01-4.744.068-1.034.05-1.594.222-1.963.37a3.1 3.1 0 00-1.154.752 3.1 3.1 0 00-.752 1.154c-.148.37-.32.929-.37 1.963C3.41 8.493 3.4 8.856 3.4 12c0 3.144.01 3.507.068 4.744.05 1.034.222 1.594.37 1.963.17.422.397.79.752 1.154.363.363.732.582 1.154.752.37.148.929.32 1.963.37C8.493 20.59 8.856 20.6 12 20.6s3.507-.01 4.744-.068c1.034-.05 1.594-.222 1.963-.37a3.1 3.1 0 001.154-.752 3.1 3.1 0 00.752-1.154c.148-.37.32-.929.37-1.963.058-1.237.068-1.6.068-4.744s-.01-3.507-.068-4.744c-.05-1.034-.222-1.594-.37-1.963a3.1 3.1 0 00-.752-1.154 3.1 3.1 0 00-1.154-.752c-.37-.148-.929-.32-1.963-.37C15.507 3.41 15.144 3.4 12 3.4zM12 5.8a6.2 6.2 0 110 12.4 6.2 6.2 0 010-12.4zm0 1.8a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm6.4-1.6a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8z" />
                              </svg>
                         </a>

                         {/* TikTok */}
                         <a
                              href="https://tiktok.com"
                              aria-label="TikTok"
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-purple-500 hover:bg-gray-300"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="18"
                                   height="18"
                                   fill="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M12.02 2h2.005c.143 2.194 1.453 3.503 3.627 3.662V7.6c-.877-.048-1.704-.262-2.49-.656v6.596c0 4.255-3.13 5.82-5.353 5.82-2.426 0-4.809-1.794-4.809-4.953 0-3.16 2.353-4.943 4.78-4.943.408 0 .795.04 1.156.118v2.21a3.22 3.22 0 00-.913-.123c-1.383 0-2.505 1.034-2.505 2.727 0 1.656 1.085 2.774 2.472 2.774 1.305 0 2.527-.905 2.527-3.043V2z" />
                              </svg>
                         </a>

                         {/* Email */}
                         <a
                              href="mailto:contact@example.com"
                              aria-label="Email"
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-purple-500 hover:bg-gray-300"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="18"
                                   height="18"
                                   fill="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm8 7.5l8-5.5H4l8 5.5zm0 2l-8-5.5V18h16V8L12 13.5z" />
                              </svg>
                         </a>

                         {/* LinkedIn */}
                         <a
                              href="https://linkedin.com"
                              aria-label="LinkedIn"
                              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-purple-500 hover:bg-gray-300"
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="18"
                                   height="18"
                                   fill="currentColor"
                                   viewBox="0 0 24 24"
                              >
                                   <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H13v2.18c.69-1.23 2.06-2.18 3.78-2.18 4.1 0 5.22 2.7 5.22 6.22V24h-5V14.25c0-2.33-.04-5.32-3.25-5.32-3.26 0-3.75 2.54-3.75 5.15V24h-5V8z" />
                              </svg>
                         </a>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;
