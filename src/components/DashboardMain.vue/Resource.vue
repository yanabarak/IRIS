<template>
  <div class="resource main-block-general col-12 p-3" id="resource">
    <h6>Resource</h6>
    <div class="row">
      <div class="block-type col-12 col-md-6">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="key" class="icon-style"></b-icon>
          </div>
          Access
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">Team Credentials</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Mails Logins</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Server Logins</li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12 col-md-6">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="share" class="icon-style"></b-icon>
          </div>
          APIs
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">Internal Endpoints</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">External Services</li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12 col-md-6">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-filetype-js"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"
              />
            </svg>
          </div>
          Languages
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">JavaScript (ES6+)</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Python (3.x)</li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12 col-md-6">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="hdd" class="icon-style"></b-icon>
          </div>
          Servers
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">
              List of free hosting with PHP, Node.js or Python
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              Firebase (Authentication, Firestore)
            </li>
            <li class="pl-2 d-block d-md-flex justify-content-between">
              Cloud Run (Containerized Apps)
            </li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12 col-md-6">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <b-icon icon="chat-left-dots" class="icon-style"></b-icon>
          </div>
          AI
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">Groq</li>
            <li class="pl-2 d-block d-md-flex justify-content-between">Grok</li>
          </ul>
        </div>
      </div>
      <div class="block-type col-12 col-md-6">
        <div class="d-flex gap-2 align-items-center sec-color fs-16">
          <div class="icons-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-database"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525"
              />
            </svg>
          </div>
          Domains
        </div>
        <div>
          <ul class="neutral-color pt-0">
            <li class="pl-2 d-block d-md-flex justify-content-between">Free domains/li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
