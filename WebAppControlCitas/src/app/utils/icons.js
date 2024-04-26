const svgWrap = document.createElement('div')
const svgData = `


  <!-- MENU ICONS -->
  <svg style="display: none;">

    <symbol id="svg-menu-home" viewBox="0 0 40 40" preserveAspectRatio="xMinYMin meet">
      <path d="M14.7826 40C15.2626 40 15.6522 39.6104 15.6522 39.1304V26.9565C15.6522 26.4765 16.0417 26.0869 16.5217 26.0869H23.4783C23.9583 26.0869 24.3478 26.4765 24.3478 26.9565V39.1304C24.3478 39.6104 24.7374 40 25.2174 40H32.1739C34.5748 40 36.5217 38.053 36.5217 35.6521V24.26C37.9183 23.9756 39.1096 23.0148 39.6687 21.6635C40.3417 20.0391 39.9704 18.1687 38.7269 16.9252L23.0748 1.27304C21.3765 -0.424348 18.6235 -0.424348 16.9252 1.27304L1.27306 16.9252C0.0295779 18.1687 -0.341726 20.0391 0.331317 21.6635C0.890447 23.0148 2.08175 23.9756 3.47827 24.26V35.6521C3.47827 38.053 5.42523 40 7.82609 40H14.7826ZM13.913 38.2608H7.82609C6.38522 38.2608 5.2174 37.093 5.2174 35.6521C5.2174 31.0408 5.2174 23.4782 5.2174 23.4782C5.2174 22.9982 4.82784 22.6087 4.34784 22.6087C3.29305 22.6087 2.34175 21.973 1.9374 20.9982C1.53392 20.0235 1.7574 18.9017 2.50349 18.1556L18.1556 2.50347C19.1739 1.48434 20.8261 1.48434 21.8443 2.50347L37.4965 18.1556C38.2426 18.9017 38.4661 20.0235 38.0626 20.9982C37.6583 21.973 36.7069 22.6087 35.6522 22.6087C35.1722 22.6087 34.7826 22.9982 34.7826 23.4782C34.7826 23.4782 34.7826 31.0408 34.7826 35.6521C34.7826 37.093 33.6148 38.2608 32.1739 38.2608H26.087V26.9565C26.087 25.5156 24.9191 24.3478 23.4783 24.3478H16.5217C15.0809 24.3478 13.913 25.5156 13.913 26.9565V38.2608Z" />
    </symbol>

  </svg>

  
  <svg style="display: none;">

    <symbol id="svg-filter-off" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
      <path d="m592-481-57-57 143-182H353l-80-80h487q25 0 36 22t-4 42L592-481ZM791-56 560-287v87q0 17-11.5 28.5T520-160h-80q-17 0-28.5-11.5T400-200v-247L56-791l56-57 736 736-57 56ZM535-538Z" />
    </symbol>

  </svg>

  <svg style="display: none;">
    <symbol id="svg-add" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>  
    </symbol>
  </svg>

  
  <svg style="display: none;">
    <symbol id="svg-download" viewBox="0 0 25 25" preserveAspectRatio="xMinYMin meet">
      <mask id="mask0_1630_17633" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
        <rect width="25" height="25" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_1630_17633)">
        <path d="M12.4997 16.4584L16.4233 12.5348L15.208 11.3195L13.3677 13.1598V8.54171H11.6316V13.1598L9.79134 11.3195L8.57608 12.5348L12.4997 16.4584ZM12.4997 22.9167C11.0703 22.9167 9.72191 22.6433 8.45454 22.0964C7.18718 21.5495 6.08185 20.8044 5.13856 19.8612C4.19527 18.9179 3.4502 17.8125 2.90332 16.5452C2.35645 15.2778 2.08301 13.9294 2.08301 12.5C2.08301 11.0591 2.35645 9.7049 2.90332 8.43754C3.4502 7.17018 4.19527 6.06775 5.13856 5.13025C6.08185 4.19275 7.18718 3.45056 8.45454 2.90369C9.72191 2.35681 11.0703 2.08337 12.4997 2.08337C13.9406 2.08337 15.2948 2.35681 16.5622 2.90369C17.8295 3.45056 18.932 4.19275 19.8695 5.13025C20.807 6.06775 21.5492 7.17018 22.096 8.43754C22.6429 9.7049 22.9163 11.0591 22.9163 12.5C22.9163 13.9294 22.6429 15.2778 22.096 16.5452C21.5492 17.8125 20.807 18.9179 19.8695 19.8612C18.932 20.8044 17.8295 21.5495 16.5622 22.0964C15.2948 22.6433 13.9406 22.9167 12.4997 22.9167ZM12.4997 21.1806C14.9187 21.1806 16.9702 20.3357 18.6542 18.6459C20.3382 16.9561 21.1802 14.9075 21.1802 12.5C21.1802 10.0811 20.3382 8.02956 18.6542 6.34551C16.9702 4.66148 14.9187 3.81947 12.4997 3.81947C10.0923 3.81947 8.04365 4.66148 6.35384 6.34551C4.66401 8.02956 3.8191 10.0811 3.8191 12.5C3.8191 14.9075 4.66401 16.9561 6.35384 18.6459C8.04365 20.3357 10.0923 21.1806 12.4997 21.1806Z" fill="#1C1B1F"/>
      </g>
    </symbol>
  </svg>


  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">

</svg>




  <svg style="display: none;">

    <symbol id="svg-drop-down" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
      <path d="M480-360 280-560h400L480-360Z"/>
    </symbol>

  </svg>

  <svg style="display: none;">

  <symbol id="svg-file" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
    <path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"/>
  </symbol>

</svg>


  
  <svg style="display: none;">

    <symbol id="svg-email" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
    </symbol>

  </svg>
  

  <!-- /MENU ICONS -->


  <!-- SVG BACK -->
  <svg style="display: none;">
    <symbol id="svg-back" viewBox="0 0 20 20" preserveAspectRatio="xMinYMin meet">
        <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
                <path d="m-36-25h360v663h-360z"/>
            </clipPath>
        </defs>
        <g clip-path="url(#cp1)">
            <path fill-rule="evenodd" d="m19.5 2.2v15.1c0 1.2-1 2.2-2.2 2.2h-15.1c-1.2 0-2.2-1-2.2-2.2v-4.3h2.2v4.3h15.1v-15.1h-15.1v4.3h-2.2v-4.3c0-1.2 1-2.2 2.2-2.2h15.1c1.2 0 2.2 1 2.2 2.2zm-9 8.6h-10.5v-2.1h10.5l-2.8-2.9 1.5-1.5 5.4 5.4-5.4 5.4-1.5-1.5z"/>
        </g>
    </symbol>
  </svg>
  <!-- /SVG BACK -->

    
  <!-- SVG notifications-->  
  <svg style="display: none;">
    <symbol id="svg-notifications" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </symbol>
  </svg>
  <!-- SVG notifications-->

  <!-- SVG notifications-off-->  
  <svg style="display: none;">
    <symbol id="svg-notifications-off" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0z" fill="none"/><path d="M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"/>
    </symbol>
  </svg>
  <!-- SVG notifications-off-->



  <!-- SVG bag-darkblue-->

  <!-- SVG ARROW IOS -->
  <svg style="display: none;">
    <symbol id="svg-arrow-ios" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g>
      <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
    </symbol>
  </svg>
  <!-- /SVG ARROW IOS -->


  <!-- SVG whatsapp-->  
  <svg style="display: none;">
    <symbol id="svg-whatsapp" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"/>
    </symbol>
  </svg>
  <!-- SVG whatsapp-->

  <!-- SVG UNDO -->
  <svg style="display: none;">
    <symbol id="svg-undo" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
    </symbol>
  </svg>
  <!-- /SVG UNDO -->




  <!-- SVG TRASH -->  
  <svg style="display: none;">
    <symbol id="svg-trash" viewBox="0 0 18 20" preserveAspectRatio="xMinYMin meet">
      <g
          transform="translate(-0.4,-0.2)">
          <path
            d="m 12.7,1.4 v 2.3 h -1.5 v -2 H 7 v 2 H 5.5 V 1.4 C 5.5,0.7 6,0.2 6.7,0.2 h 4.8 c 0.7,0 1.2,0.5 1.2,1.2 z m 5.1,2.4 V 5.3 H 16.2 L 15,19 c 0,0.4 -0.3,0.7 -0.7,0.7 H 3.9 C 3.5,19.7 3.2,19.4 3.1,19 L 1.9,5.3 H 0.4 V 3.8 Z m -3,1.5 H 3.4 l 1.2,12.9 h 9.1 z M 5.9,16.1 5.5,7.4 H 7 L 7.3,16 Z M 8.4,7.4 H 9.8 V 16 H 8.4 Z m 3.9,8.7 -1.4,-0.1 0.3,-8.6 h 1.4 z"
          />
      </g>
    </symbol>
  </svg>
  <!-- SVG TRASH -->


  <!-- SVG TRASH -->  
  <svg style="display: none;">
    <symbol id="svg-trash-2" viewBox="0 0 30 31" preserveAspectRatio="xMinYMin meet">
      <g>
        <mask id="mask0_1466_17427" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="31">
          <rect  y="0.599976" width="30" height="30"/>
        </mask>
        <g mask="url(#mask0_1466_17427)">
          <path d="M8.35416 26.85C7.78124 26.85 7.29079 26.646 6.88281 26.238C6.47483 25.83 6.27084 25.3396 6.27084 24.7667V7.47495H5V5.39163H11V4.34998H19V5.39163H25V7.47495H23.7292V24.7667C23.7292 25.3292 23.5226 25.817 23.1094 26.2302C22.6962 26.6434 22.2083 26.85 21.6458 26.85H8.35416ZM21.6458 7.47495H8.35416V24.7667H21.6458V7.47495ZM11.3958 22.1417H13.4792V10.0791H11.3958V22.1417ZM16.5208 22.1417H18.6042V10.0791H16.5208V22.1417Z" fill="#currentColor"/>
        </g>
      </g>
    </symbol>
  </svg>
  <!-- SVG TRASH -->

  <!-- SVG pencil -->  


  <svg style="display: none;">
    <symbol id="svg-pencil" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
    </symbol>
  </svg>
  <!-- SVG pencil -->

  <!-- SVG messages -->  
  <svg style="display: none;">
    <symbol id="svg-messages" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
    </symbol>
  </svg>
  <!-- SVG messages -->


  <!-- SVG LOCATION_ON -->  
  <svg style="display: none;">
    <symbol id="svg-location_on" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </symbol>
  </svg>
  <!-- SVG LOCATION_ON -->

  <!-- SVG VISIBILITY -->  
  <svg style="display: none;">
    <symbol id="svg-visibility" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
    </symbol>
  </svg>
  <!-- SVG VISIBILITY -->

  <!-- SVG VISIBILITY OFF-->  
  <svg style="display: none;">
    <symbol id="svg-visibility-off" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>
    </symbol>
  </svg>
  <!-- SVG VISIBILITY OFF-->

  <!-- SVG VISIBILITY -->  
  <svg style="display: none;">
    <symbol id="svg-visibility-filled" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </symbol>
  </svg>
  <!-- SVG VISIBILITY-filled -->

  <!-- SVG VISIBILITY-filled OFF-->  
  <svg style="display: none;">
    <symbol id="svg-visibility-filled-off" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z" fill="none"/><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
    </symbol>
  </svg>
  <!-- SVG VISIBILITY-filled OFF-->

  <!-- SVG VISIBILITY FILLED-->  
  <svg style="display: none;">
    <symbol id="svg-visibility-filled" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </symbol>
  </svg>
  <!-- SVG VISIBILITY FILLED -->

  <!-- SVG CHECK CIRCLE-->  
  <svg style="display: none;">
    <symbol id="svg-check-circle" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </symbol>
  </svg>
  <!-- SVG CHECK CIRCLE -->


  <!-- SVG SEARCH-->  
  <svg style="display: none;">
    <symbol id="svg-search" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </symbol>
  </svg>
  <!-- SVG SEARCH-->

  <!-- SVG maximize-->  
  <svg style="display: none;">
    <symbol id="svg-maximize" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M15,3l2.3,2.3l-2.89,2.87l1.42,1.42L18.7,6.7L21,9V3H15z M3,9l2.3-2.3l2.87,2.89l1.42-1.42L6.7,5.3L9,3H3V9z M9,21 l-2.3-2.3l2.89-2.87l-1.42-1.42L5.3,17.3L3,15v6H9z M21,15l-2.3,2.3l-2.87-2.89l-1.42,1.42l2.89,2.87L15,21h6V15z"/></g></g></g>
    </symbol>
  </svg>
  <!-- SVG maximize-->

  <!-- SVG chevron-->  
  <svg style="display: none;">
    <symbol id="svg-chevron" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/
    </symbol>
  </svg>
  <!-- SVG chevron-->

  <!-- SVG chevron-light -->  
  <svg style="display: none;">
    <symbol id="svg-chevron-light" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
    </symbol>
  </svg>
  <!-- SVG chevron-light -->

  <!-- SVG bell -->  
  <svg style="display: none;">
    <symbol id="svg-bell" viewBox="0 0 448 512" preserveAspectRatio="xMinYMin meet">
      <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
    </symbol>
  </svg>
  <!-- SVG bell -->



  <!-- SVG edit -->  
  <svg style="display: none;">
    <symbol id="svg-edit" viewBox="0 -960 960 960" preserveAspectRatio="xMinYMin meet">
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
    </symbol>
  </svg>
  <!-- SVG edit -->




  


  <!-- SVG calendar -->  
  <svg style="display: none;">
    <symbol id="svg-calendar" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
    </symbol>
  </svg>
  <!-- SVG calendar -->

  <!-- SVG star-->  
  <svg style="display: none;">
    <symbol id="svg-star-filled" viewBox="0 0 10 10" preserveAspectRatio="xMinYMin meet">
      <path d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
    </symbol>
  </svg>
  <!-- SVG star-->

  <!-- SVG star-->  
  <svg style="display: none;">
    <symbol id="svg-star-medium" viewBox="0 0 10 10" preserveAspectRatio="xMinYMin meet">
          <path fill="#c8c8c8" d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"></path>
          <path fill="currentColor" d="M5.272 8.026L2.137 9.679l.6-3.502L.2 3.697l3.505-.51L5.272 0z"></path>
    </symbol>
  </svg>
  <!-- SVG star-->
  
  <!-- SVG close -->  
  <svg style="display: none;">
    <symbol id="svg-close" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </symbol>
  </svg>
  <!-- SVG close -->

  <!-- SVG done -->  
  <svg style="display: none;">
    <symbol id="svg-done" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    </symbol>
  </svg>
  <!-- SVG done -->


  <!-- SVG camera -->  
  <svg style="display: none;">
    <symbol id="svg-camera" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    </symbol>
  </svg>
  <!-- SVG camera -->

  <!-- SVG gallery -->  
  <svg style="display: none;">
    <symbol id="svg-gallery" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17H11z"/>
    </symbol>
  </svg>
  <!-- SVG gallery -->

  <!-- SVG save -->  
  <svg style="display: none;">
    <symbol id="svg-save" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
    </symbol>
  </svg>
  <!-- SVG save -->

  <!-- SVG save-outline -->  
  <svg style="display: none;">
    <symbol id="svg-save-outline" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin meet">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/>  
    </symbol>
  </svg>
  <!-- SVG save-outline -->

  <!-- SVG menu -->  
  <svg style="display: none;">
    <symbol id="svg-menu" viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet">
      <path d="M6 36v-3h26v3Zm33.9-2.6-9.45-9.45 9.4-9.4L42 16.7l-7.25 7.25 7.3 7.3ZM6 25.4v-3h20v3ZM6 15v-3h26v3Z"/>
    </symbol>
  </svg>
  <!-- SVG menu -->

  `

svgWrap.innerHTML = svgData
document.body.appendChild(svgWrap)
