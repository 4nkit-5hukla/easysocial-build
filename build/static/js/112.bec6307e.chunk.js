(this.webpackJsonpeasysocial=this.webpackJsonpeasysocial||[]).push([[112],{2198:function(C,e,t){C.exports={Signup:"Signup_Signup__2kR7X",Logo_Section:"Signup_Logo_Section__3JPDm",Form_Section:"Signup_Form_Section__1WLwT",Form_Header:"Signup_Form_Header__2g5vG",Back_Btn:"Signup_Back_Btn__3FP_t",Header_Text:"Signup_Header_Text__1DjuY",Form:"Signup_Form__1n-lJ"}},2458:function(C,e,t){"use strict";t.r(e);var n=t(5),i=t(28),a=t(25),c=t(21),r=t(44),l=t(45),s=t(0),o=t.n(s),u=t(43),H=t(18),V=t(34),d=t(106),h=t(2198),j=t.n(h),p=t(78),L=t(2),M=function(C){Object(r.a)(t,C);var e=Object(l.a)(t);function t(C){var c;return Object(a.a)(this,t),(c=e.call(this,C)).state={currentCount:0,userData:{name:{value:"",elementType:"text",required:!0,type:"Name",placeholder:"Full Name"},email:{value:"",elementType:"email",required:!0,type:"Email",placeholder:"Enter Email"}}},c.inputChangedHandler=function(C,e){var t=c.state.userData,a=Object(V.l)(t[e],{value:C.target.value}),r=Object(V.l)(t,Object(i.a)({},e,a));c.setState(Object(n.a)(Object(n.a)({},c.state),{},{userData:r}))},c.inputRef=o.a.createRef(),c.labelRef=o.a.createRef(),c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){document.querySelector("body").style.maxWidth="425px"}},{key:"render",value:function(){var C=this,e=[];for(var t in this.state.userData)e.push({id:t,config:this.state.userData[t]});var n=e.map((function(e){return Object(L.jsx)(d.a,{type:e.config.elementType,name:e.config.type,value:e.config.value,inputChangedHandler:C.inputChangedHandler,required:e.config.required,id:e.id,placeholder:e.config.placeholder})}));return Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)("div",{className:j.a.Signup,children:[Object(L.jsx)("div",{className:j.a.Logo_Section,children:Object(L.jsxs)("svg",{width:"150",height:"45",viewBox:"0 0 150 45",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(L.jsx)("path",{d:"M39.368 23.336C41.672 23.336 43.416 22.48 44.6 20.768L42.104 19.328C41.496 20.128 40.6 20.528 39.416 20.528C37.576 20.528 36.448 19.776 36.032 18.272H45.08C45.16 17.824 45.2 17.4 45.2 17C45.2 15.208 44.628 13.704 43.484 12.488C42.34 11.272 40.888 10.664 39.128 10.664C37.272 10.664 35.752 11.268 34.568 12.476C33.384 13.684 32.792 15.192 32.792 17C32.792 18.824 33.392 20.336 34.592 21.536C35.792 22.736 37.384 23.336 39.368 23.336ZM42.104 15.872H35.984C36.16 15.104 36.52 14.508 37.064 14.084C37.608 13.66 38.296 13.448 39.128 13.448C39.832 13.448 40.46 13.648 41.012 14.048C41.564 14.448 41.928 15.056 42.104 15.872ZM52.472 23.336C54.152 23.336 55.456 22.752 56.384 21.584V23H59.48V11H56.384V12.416C55.456 11.248 54.152 10.664 52.472 10.664C50.872 10.664 49.5 11.276 48.356 12.5C47.212 13.724 46.64 15.224 46.64 17C46.64 18.776 47.212 20.276 48.356 21.5C49.5 22.724 50.872 23.336 52.472 23.336ZM53.048 20.384C52.088 20.384 51.296 20.072 50.672 19.448C50.048 18.808 49.736 17.992 49.736 17C49.736 16.008 50.048 15.196 50.672 14.564C51.296 13.932 52.088 13.616 53.048 13.616C54.008 13.616 54.804 13.932 55.436 14.564C56.068 15.196 56.384 16.008 56.384 17C56.384 17.992 56.068 18.804 55.436 19.436C54.804 20.068 54.008 20.384 53.048 20.384ZM66.416 23.336C67.792 23.336 68.94 23.004 69.86 22.34C70.78 21.676 71.24 20.728 71.24 19.496C71.24 18.68 71.028 18 70.604 17.456C70.18 16.912 69.664 16.524 69.056 16.292C68.448 16.06 67.84 15.868 67.232 15.716C66.624 15.564 66.108 15.388 65.684 15.188C65.26 14.988 65.048 14.728 65.048 14.408C65.048 14.104 65.18 13.864 65.444 13.688C65.708 13.512 66.04 13.424 66.44 13.424C67.336 13.424 67.976 13.832 68.36 14.648L71 13.208C70.536 12.392 69.904 11.764 69.104 11.324C68.304 10.884 67.416 10.664 66.44 10.664C65.144 10.664 64.06 11.004 63.188 11.684C62.316 12.364 61.88 13.296 61.88 14.48C61.88 15.264 62.092 15.916 62.516 16.436C62.94 16.956 63.456 17.336 64.064 17.576C64.672 17.816 65.28 18.016 65.888 18.176C66.496 18.336 67.012 18.516 67.436 18.716C67.86 18.916 68.072 19.176 68.072 19.496C68.072 20.184 67.52 20.528 66.416 20.528C65.2 20.528 64.416 20.008 64.064 18.968L61.376 20.48C62.272 22.384 63.952 23.336 66.416 23.336ZM73.184 27.8C74.72 27.88 76.004 27.532 77.036 26.756C78.068 25.98 78.896 24.728 79.52 23L83.888 11H80.576L77.912 19.064L74.792 11H71.408L76.328 22.616C76.04 23.432 75.652 24.024 75.164 24.392C74.676 24.76 74.016 24.936 73.184 24.92V27.8ZM88.832 23.336C90.208 23.336 91.356 23.004 92.276 22.34C93.196 21.676 93.656 20.728 93.656 19.496C93.656 18.68 93.444 18 93.02 17.456C92.596 16.912 92.08 16.524 91.472 16.292C90.864 16.06 90.256 15.868 89.648 15.716C89.04 15.564 88.524 15.388 88.1 15.188C87.676 14.988 87.464 14.728 87.464 14.408C87.464 14.104 87.596 13.864 87.86 13.688C88.124 13.512 88.456 13.424 88.856 13.424C89.752 13.424 90.392 13.832 90.776 14.648L93.416 13.208C92.952 12.392 92.32 11.764 91.52 11.324C90.72 10.884 89.832 10.664 88.856 10.664C87.56 10.664 86.476 11.004 85.604 11.684C84.732 12.364 84.296 13.296 84.296 14.48C84.296 15.264 84.508 15.916 84.932 16.436C85.356 16.956 85.872 17.336 86.48 17.576C87.088 17.816 87.696 18.016 88.304 18.176C88.912 18.336 89.428 18.516 89.852 18.716C90.276 18.916 90.488 19.176 90.488 19.496C90.488 20.184 89.936 20.528 88.832 20.528C87.616 20.528 86.832 20.008 86.48 18.968L83.792 20.48C84.688 22.384 86.368 23.336 88.832 23.336ZM101.192 23.336C102.968 23.336 104.472 22.728 105.704 21.512C106.936 20.28 107.552 18.776 107.552 17C107.552 15.224 106.936 13.724 105.704 12.5C104.472 11.276 102.968 10.664 101.192 10.664C99.416 10.664 97.916 11.276 96.692 12.5C95.468 13.724 94.856 15.224 94.856 17C94.856 18.776 95.468 20.276 96.692 21.5C97.916 22.724 99.416 23.336 101.192 23.336ZM101.192 20.312C100.264 20.312 99.488 20 98.864 19.376C98.256 18.752 97.952 17.96 97.952 17C97.952 16.04 98.26 15.248 98.876 14.624C99.492 14 100.264 13.688 101.192 13.688C102.12 13.688 102.896 14 103.52 14.624C104.144 15.248 104.456 16.04 104.456 17C104.456 17.96 104.144 18.752 103.52 19.376C102.896 20 102.12 20.312 101.192 20.312ZM115.448 23.336C116.616 23.336 117.68 23.052 118.64 22.484C119.6 21.916 120.344 21.16 120.872 20.216L118.184 18.68C117.944 19.176 117.58 19.564 117.092 19.844C116.604 20.124 116.048 20.264 115.424 20.264C114.496 20.264 113.728 19.956 113.12 19.34C112.512 18.724 112.208 17.944 112.208 17C112.208 16.04 112.512 15.252 113.12 14.636C113.728 14.02 114.496 13.712 115.424 13.712C116.032 13.712 116.58 13.856 117.068 14.144C117.556 14.432 117.92 14.824 118.16 15.32L120.824 13.76C120.328 12.816 119.6 12.064 118.64 11.504C117.68 10.944 116.616 10.664 115.448 10.664C113.64 10.664 112.132 11.272 110.924 12.488C109.716 13.704 109.112 15.208 109.112 17C109.112 18.792 109.716 20.296 110.924 21.512C112.132 22.728 113.64 23.336 115.448 23.336ZM124.04 9.55998C124.568 9.55998 125.02 9.37198 125.396 8.99598C125.772 8.61998 125.96 8.17598 125.96 7.66398C125.96 7.15198 125.772 6.70398 125.396 6.31998C125.02 5.93598 124.568 5.74398 124.04 5.74398C123.528 5.74398 123.084 5.93598 122.708 6.31998C122.332 6.70398 122.144 7.15198 122.144 7.66398C122.144 8.17598 122.332 8.61998 122.708 8.99598C123.084 9.37198 123.528 9.55998 124.04 9.55998ZM125.6 23V11H122.504V23H125.6ZM133.64 23.336C135.32 23.336 136.624 22.752 137.552 21.584V23H140.648V11H137.552V12.416C136.624 11.248 135.32 10.664 133.64 10.664C132.04 10.664 130.668 11.276 129.524 12.5C128.38 13.724 127.808 15.224 127.808 17C127.808 18.776 128.38 20.276 129.524 21.5C130.668 22.724 132.04 23.336 133.64 23.336ZM134.216 20.384C133.256 20.384 132.464 20.072 131.84 19.448C131.216 18.808 130.904 17.992 130.904 17C130.904 16.008 131.216 15.196 131.84 14.564C132.464 13.932 133.256 13.616 134.216 13.616C135.176 13.616 135.972 13.932 136.604 14.564C137.236 15.196 137.552 16.008 137.552 17C137.552 17.992 137.236 18.804 136.604 19.436C135.972 20.068 135.176 20.384 134.216 20.384ZM146.552 23V5.47998H143.456V23H146.552Z",fill:"#3C4555"}),Object(L.jsx)("path",{d:"M7.48025 25.5198C2.22263 20.2622 2.22263 11.7379 7.48025 6.48029C12.6648 1.2957 21.026 1.22369 26.2988 6.26427L26.5198 6.48029L27.5804 7.54095L25.4591 9.66227L24.3984 8.60161C20.3124 4.51557 13.6876 4.51557 9.60157 8.60161C5.51553 12.6877 5.51553 19.3124 9.60157 23.3985C13.6206 27.4175 20.0959 27.4834 24.1955 23.5961L24.3984 23.3985L25.4591 22.3378L27.5804 24.4591L26.5198 25.5198C21.2621 30.7774 12.7379 30.7774 7.48025 25.5198Z",fill:"#12B0EE"}),Object(L.jsx)("path",{d:"M22.9839 10.8787L25.1214 12.9837L15.1218 23.1377L9.87891 17.8139L12.0164 15.7089L15.1212 18.8619L22.9839 10.8787Z",fill:"#12B0EE"}),Object(L.jsx)("path",{d:"M5.45197 42.156C6.31597 42.156 7.01597 41.938 7.55197 41.502C8.08797 41.066 8.35597 40.48 8.35597 39.744C8.35597 39.568 8.33797 39.402 8.30197 39.246C8.26597 39.09 8.22397 38.952 8.17597 38.832C8.12797 38.712 8.04997 38.594 7.94197 38.478C7.83397 38.362 7.73997 38.264 7.65997 38.184C7.57997 38.104 7.45797 38.02 7.29397 37.932C7.12997 37.844 6.99997 37.776 6.90397 37.728C6.80797 37.68 6.65797 37.616 6.45397 37.536C6.24997 37.456 6.09997 37.4 6.00397 37.368C5.90797 37.336 5.74397 37.284 5.51197 37.212C4.86397 37.004 4.40797 36.804 4.14397 36.612C3.87997 36.42 3.74797 36.14 3.74797 35.772C3.74797 35.388 3.88797 35.084 4.16797 34.86C4.44797 34.636 4.81597 34.524 5.27197 34.524C6.18397 34.524 6.81997 34.956 7.17997 35.82L8.11597 35.28C7.86797 34.728 7.49797 34.284 7.00597 33.948C6.51397 33.612 5.93597 33.444 5.27197 33.444C4.53597 33.444 3.91197 33.658 3.39997 34.086C2.88797 34.514 2.63197 35.092 2.63197 35.82C2.63197 36.124 2.68597 36.396 2.79397 36.636C2.90197 36.876 3.02397 37.07 3.15997 37.218C3.29597 37.366 3.50197 37.51 3.77797 37.65C4.05397 37.79 4.28397 37.894 4.46797 37.962C4.65197 38.03 4.91997 38.12 5.27197 38.232C5.98397 38.456 6.49197 38.668 6.79597 38.868C7.09997 39.068 7.25197 39.368 7.25197 39.768C7.25197 40.16 7.09997 40.474 6.79597 40.71C6.49197 40.946 6.05197 41.064 5.47597 41.064C4.30797 41.064 3.55997 40.556 3.23197 39.54L2.27197 40.092C2.49597 40.732 2.88597 41.236 3.44197 41.604C3.99797 41.972 4.66797 42.156 5.45197 42.156ZM12.532 42.156C13.412 42.156 14.16 41.852 14.776 41.244C15.392 40.636 15.7 39.888 15.7 39C15.7 38.112 15.392 37.364 14.776 36.756C14.16 36.148 13.412 35.844 12.532 35.844C11.652 35.844 10.906 36.148 10.294 36.756C9.68197 37.364 9.37597 38.112 9.37597 39C9.37597 39.888 9.68197 40.636 10.294 41.244C10.906 41.852 11.652 42.156 12.532 42.156ZM12.532 41.136C11.94 41.136 11.44 40.932 11.032 40.524C10.624 40.116 10.42 39.608 10.42 39C10.42 38.392 10.624 37.884 11.032 37.476C11.44 37.068 11.94 36.864 12.532 36.864C13.132 36.864 13.636 37.068 14.044 37.476C14.452 37.884 14.656 38.392 14.656 39C14.656 39.608 14.452 40.116 14.044 40.524C13.636 40.932 13.132 41.136 12.532 41.136ZM19.756 42.156C20.34 42.156 20.872 42.014 21.352 41.73C21.832 41.446 22.2 41.068 22.456 40.596L21.568 40.08C21.4 40.4 21.156 40.654 20.836 40.842C20.516 41.03 20.156 41.124 19.756 41.124C19.156 41.124 18.654 40.92 18.25 40.512C17.846 40.104 17.644 39.6 17.644 39C17.644 38.392 17.846 37.884 18.25 37.476C18.654 37.068 19.156 36.864 19.756 36.864C20.156 36.864 20.514 36.96 20.83 37.152C21.146 37.344 21.38 37.6 21.532 37.92L22.408 37.416C22.176 36.936 21.824 36.554 21.352 36.27C20.88 35.986 20.348 35.844 19.756 35.844C18.852 35.844 18.1 36.146 17.5 36.75C16.9 37.354 16.6 38.104 16.6 39C16.6 39.896 16.9 40.646 17.5 41.25C18.1 41.854 18.852 42.156 19.756 42.156ZM24.016 34.908C24.208 34.908 24.372 34.84 24.508 34.704C24.644 34.568 24.712 34.404 24.712 34.212C24.712 34.02 24.644 33.854 24.508 33.714C24.372 33.574 24.208 33.504 24.016 33.504C23.816 33.504 23.648 33.574 23.512 33.714C23.376 33.854 23.308 34.02 23.308 34.212C23.308 34.404 23.376 34.568 23.512 34.704C23.648 34.84 23.816 34.908 24.016 34.908ZM24.532 42V36H23.488V42H24.532ZM28.828 42.156C29.82 42.156 30.576 41.76 31.096 40.968V42H32.14V36H31.096V37.032C30.576 36.24 29.82 35.844 28.828 35.844C27.988 35.844 27.272 36.15 26.68 36.762C26.088 37.374 25.792 38.12 25.792 39C25.792 39.88 26.088 40.626 26.68 41.238C27.272 41.85 27.988 42.156 28.828 42.156ZM28.96 41.148C28.36 41.148 27.856 40.942 27.448 40.53C27.04 40.118 26.836 39.608 26.836 39C26.836 38.392 27.04 37.882 27.448 37.47C27.856 37.058 28.36 36.852 28.96 36.852C29.568 36.852 30.076 37.058 30.484 37.47C30.892 37.882 31.096 38.392 31.096 39C31.096 39.608 30.892 40.118 30.484 40.53C30.076 40.942 29.568 41.148 28.96 41.148ZM34.768 42V33.24H33.724V42H34.768ZM40.588 42V35.448L43.336 40.008H43.48L46.228 35.436V42H47.332V33.6H46.072L43.408 38.04L40.732 33.6H39.472V42H40.588ZM51.724 42.156C52.716 42.156 53.472 41.76 53.992 40.968V42H55.036V36H53.992V37.032C53.472 36.24 52.716 35.844 51.724 35.844C50.884 35.844 50.168 36.15 49.576 36.762C48.984 37.374 48.688 38.12 48.688 39C48.688 39.88 48.984 40.626 49.576 41.238C50.168 41.85 50.884 42.156 51.724 42.156ZM51.856 41.148C51.256 41.148 50.752 40.942 50.344 40.53C49.936 40.118 49.732 39.608 49.732 39C49.732 38.392 49.936 37.882 50.344 37.47C50.752 37.058 51.256 36.852 51.856 36.852C52.464 36.852 52.972 37.058 53.38 37.47C53.788 37.882 53.992 38.392 53.992 39C53.992 39.608 53.788 40.118 53.38 40.53C52.972 40.942 52.464 41.148 51.856 41.148ZM57.664 42V38.82C57.664 38.164 57.848 37.688 58.216 37.392C58.584 37.096 59.024 36.96 59.536 36.984V35.892C58.632 35.892 58.008 36.264 57.664 37.008V36H56.62V42H57.664ZM61.6 42V39.156L64.336 42H65.632L62.668 38.904L65.536 36H64.192L61.6 38.652V33.6H60.556V42H61.6ZM68.932 42.156C70.108 42.156 70.988 41.704 71.572 40.8L70.684 40.296C70.324 40.88 69.748 41.172 68.956 41.172C68.388 41.172 67.91 41.024 67.522 40.728C67.134 40.432 66.888 40.016 66.784 39.48H71.812C71.836 39.32 71.848 39.164 71.848 39.012C71.848 38.14 71.57 37.394 71.014 36.774C70.458 36.154 69.74 35.844 68.86 35.844C67.932 35.844 67.176 36.144 66.592 36.744C66.008 37.344 65.716 38.096 65.716 39C65.716 39.912 66.014 40.666 66.61 41.262C67.206 41.858 67.98 42.156 68.932 42.156ZM70.792 38.568H66.784C66.872 38.04 67.1 37.618 67.468 37.302C67.836 36.986 68.3 36.828 68.86 36.828C69.34 36.828 69.76 36.976 70.12 37.272C70.48 37.568 70.704 38 70.792 38.568ZM74.128 41.778C74.552 42.046 75.22 42.12 76.132 42V41.064C75.78 41.08 75.484 41.086 75.244 41.082C75.004 41.078 74.826 41.014 74.71 40.89C74.594 40.766 74.536 40.556 74.536 40.26V37.008H76.132V36H74.536V34.32L73.492 34.632V36H72.304V37.008H73.492V40.26C73.492 41.004 73.704 41.51 74.128 41.778ZM77.896 34.908C78.088 34.908 78.252 34.84 78.388 34.704C78.524 34.568 78.592 34.404 78.592 34.212C78.592 34.02 78.524 33.854 78.388 33.714C78.252 33.574 78.088 33.504 77.896 33.504C77.696 33.504 77.528 33.574 77.392 33.714C77.256 33.854 77.188 34.02 77.188 34.212C77.188 34.404 77.256 34.568 77.392 34.704C77.528 34.84 77.696 34.908 77.896 34.908ZM78.412 42V36H77.368V42H78.412ZM81.052 42V38.82C81.052 38.148 81.212 37.65 81.532 37.326C81.852 37.002 82.272 36.84 82.792 36.84C83.256 36.84 83.62 36.974 83.884 37.242C84.148 37.51 84.28 37.888 84.28 38.376V42H85.324V38.316C85.324 37.556 85.112 36.954 84.688 36.51C84.264 36.066 83.7 35.844 82.996 35.844C82.124 35.844 81.476 36.184 81.052 36.864V36H80.008V42H81.052ZM89.728 44.556C90.568 44.556 91.288 44.31 91.888 43.818C92.488 43.326 92.788 42.636 92.788 41.748V36H91.756V37.032C91.236 36.24 90.484 35.844 89.5 35.844C88.644 35.844 87.92 36.146 87.328 36.75C86.736 37.354 86.44 38.092 86.44 38.964C86.44 39.836 86.736 40.576 87.328 41.184C87.92 41.792 88.644 42.096 89.5 42.096C90.476 42.096 91.228 41.696 91.756 40.896V41.748C91.756 42.316 91.578 42.764 91.222 43.092C90.866 43.42 90.376 43.584 89.752 43.584C88.776 43.584 88.124 43.248 87.796 42.576L86.884 43.092C87.132 43.564 87.5 43.926 87.988 44.178C88.476 44.43 89.056 44.556 89.728 44.556ZM89.62 41.1C89.012 41.1 88.504 40.896 88.096 40.488C87.688 40.08 87.484 39.572 87.484 38.964C87.484 38.364 87.688 37.86 88.096 37.452C88.504 37.044 89.012 36.84 89.62 36.84C90.228 36.84 90.736 37.044 91.144 37.452C91.552 37.86 91.756 38.364 91.756 38.964C91.756 39.572 91.552 40.08 91.144 40.488C90.736 40.896 90.228 41.1 89.62 41.1ZM100.192 42.156C101.056 42.156 101.756 41.938 102.292 41.502C102.828 41.066 103.096 40.48 103.096 39.744C103.096 39.568 103.078 39.402 103.042 39.246C103.006 39.09 102.964 38.952 102.916 38.832C102.868 38.712 102.79 38.594 102.682 38.478C102.574 38.362 102.48 38.264 102.4 38.184C102.32 38.104 102.198 38.02 102.034 37.932C101.87 37.844 101.74 37.776 101.644 37.728C101.548 37.68 101.398 37.616 101.194 37.536C100.99 37.456 100.84 37.4 100.744 37.368C100.648 37.336 100.484 37.284 100.252 37.212C99.604 37.004 99.148 36.804 98.884 36.612C98.62 36.42 98.488 36.14 98.488 35.772C98.488 35.388 98.628 35.084 98.908 34.86C99.188 34.636 99.556 34.524 100.012 34.524C100.924 34.524 101.56 34.956 101.92 35.82L102.856 35.28C102.608 34.728 102.238 34.284 101.746 33.948C101.254 33.612 100.676 33.444 100.012 33.444C99.276 33.444 98.652 33.658 98.14 34.086C97.628 34.514 97.372 35.092 97.372 35.82C97.372 36.124 97.426 36.396 97.534 36.636C97.642 36.876 97.764 37.07 97.9 37.218C98.036 37.366 98.242 37.51 98.518 37.65C98.794 37.79 99.024 37.894 99.208 37.962C99.392 38.03 99.66 38.12 100.012 38.232C100.724 38.456 101.232 38.668 101.536 38.868C101.84 39.068 101.992 39.368 101.992 39.768C101.992 40.16 101.84 40.474 101.536 40.71C101.232 40.946 100.792 41.064 100.216 41.064C99.048 41.064 98.3 40.556 97.972 39.54L97.012 40.092C97.236 40.732 97.626 41.236 98.182 41.604C98.738 41.972 99.408 42.156 100.192 42.156ZM104.836 34.908C105.028 34.908 105.192 34.84 105.328 34.704C105.464 34.568 105.532 34.404 105.532 34.212C105.532 34.02 105.464 33.854 105.328 33.714C105.192 33.574 105.028 33.504 104.836 33.504C104.636 33.504 104.468 33.574 104.332 33.714C104.196 33.854 104.128 34.02 104.128 34.212C104.128 34.404 104.196 34.568 104.332 34.704C104.468 34.84 104.636 34.908 104.836 34.908ZM105.352 42V36H104.308V42H105.352ZM107.992 42V38.664C107.992 38.056 108.138 37.6 108.43 37.296C108.722 36.992 109.088 36.84 109.528 36.84C109.92 36.84 110.23 36.968 110.458 37.224C110.686 37.48 110.8 37.84 110.8 38.304V42H111.844V38.664C111.844 38.048 111.978 37.59 112.246 37.29C112.514 36.99 112.872 36.84 113.32 36.84C113.72 36.84 114.04 36.968 114.28 37.224C114.52 37.48 114.64 37.84 114.64 38.304V42H115.684V38.268C115.684 37.524 115.476 36.934 115.06 36.498C114.644 36.062 114.1 35.844 113.428 35.844C112.588 35.844 111.96 36.184 111.544 36.864C111.176 36.184 110.588 35.844 109.78 35.844C108.996 35.844 108.4 36.164 107.992 36.804V36H106.948V42H107.992ZM118.18 44.4V40.968C118.7 41.76 119.456 42.156 120.448 42.156C121.288 42.156 122.004 41.85 122.596 41.238C123.188 40.626 123.484 39.88 123.484 39C123.484 38.12 123.188 37.374 122.596 36.762C122.004 36.15 121.288 35.844 120.448 35.844C119.456 35.844 118.7 36.24 118.18 37.032V36H117.136V44.4H118.18ZM120.316 41.148C119.708 41.148 119.2 40.942 118.792 40.53C118.384 40.118 118.18 39.608 118.18 39C118.18 38.392 118.384 37.882 118.792 37.47C119.2 37.058 119.708 36.852 120.316 36.852C120.916 36.852 121.42 37.058 121.828 37.47C122.236 37.882 122.44 38.392 122.44 39C122.44 39.608 122.236 40.118 121.828 40.53C121.42 40.942 120.916 41.148 120.316 41.148ZM125.776 42V33.24H124.732V42H125.776ZM127.9 34.908C128.092 34.908 128.256 34.84 128.392 34.704C128.528 34.568 128.596 34.404 128.596 34.212C128.596 34.02 128.528 33.854 128.392 33.714C128.256 33.574 128.092 33.504 127.9 33.504C127.7 33.504 127.532 33.574 127.396 33.714C127.26 33.854 127.192 34.02 127.192 34.212C127.192 34.404 127.26 34.568 127.396 34.704C127.532 34.84 127.7 34.908 127.9 34.908ZM128.416 42V36H127.372V42H128.416ZM131.512 42V37.008H133.732V42H134.776V36H131.512V35.82C131.512 35.316 131.64 34.962 131.896 34.758C132.152 34.554 132.552 34.452 133.096 34.452C133.432 34.452 133.844 34.484 134.332 34.548V33.6C133.836 33.496 133.424 33.444 133.096 33.444C131.344 33.444 130.468 34.236 130.468 35.82V36H129.508V37.008H130.468V42H131.512ZM139.252 42.156C140.428 42.156 141.308 41.704 141.892 40.8L141.004 40.296C140.644 40.88 140.068 41.172 139.276 41.172C138.708 41.172 138.23 41.024 137.842 40.728C137.454 40.432 137.208 40.016 137.104 39.48H142.132C142.156 39.32 142.168 39.164 142.168 39.012C142.168 38.14 141.89 37.394 141.334 36.774C140.778 36.154 140.06 35.844 139.18 35.844C138.252 35.844 137.496 36.144 136.912 36.744C136.328 37.344 136.036 38.096 136.036 39C136.036 39.912 136.334 40.666 136.93 41.262C137.526 41.858 138.3 42.156 139.252 42.156ZM141.112 38.568H137.104C137.192 38.04 137.42 37.618 137.788 37.302C138.156 36.986 138.62 36.828 139.18 36.828C139.66 36.828 140.08 36.976 140.44 37.272C140.8 37.568 141.024 38 141.112 38.568ZM146.056 42.156C147.048 42.156 147.804 41.76 148.324 40.968V42H149.368V33.6H148.324V37.032C147.804 36.24 147.048 35.844 146.056 35.844C145.216 35.844 144.5 36.15 143.908 36.762C143.316 37.374 143.02 38.12 143.02 39C143.02 39.88 143.316 40.626 143.908 41.238C144.5 41.85 145.216 42.156 146.056 42.156ZM146.188 41.148C145.588 41.148 145.084 40.942 144.676 40.53C144.268 40.118 144.064 39.608 144.064 39C144.064 38.392 144.268 37.882 144.676 37.47C145.084 37.058 145.588 36.852 146.188 36.852C146.796 36.852 147.304 37.058 147.712 37.47C148.12 37.882 148.324 38.392 148.324 39C148.324 39.608 148.12 40.118 147.712 40.53C147.304 40.942 146.796 41.148 146.188 41.148Z",fill:"#8695AC"})]})}),Object(L.jsxs)("main",{className:j.a.Form_Section,children:[Object(L.jsxs)("div",{className:j.a.Form_Header,children:[Object(L.jsx)("div",{className:j.a.Back_Btn,children:Object(L.jsx)(p.b,{to:"/",children:Object(L.jsx)("svg",{width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(L.jsx)("path",{d:"M8 1L1.8858 6.24074C1.42019 6.63984 1.42019 7.36016 1.8858 7.75926L8 13",stroke:"#24272c",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"bevel"})})})}),Object(L.jsx)("div",{className:j.a.Header_Text,children:Object(L.jsx)("h1",{children:"Login or Register"})})]}),Object(L.jsx)("div",{className:j.a.Form,ref:this.inputRef.current,children:Object(L.jsxs)("form",{onSubmit:function(C){return C.preventDefault()},children:[n,Object(L.jsxs)("button",{onClick:function(){C.props.updateUserData(e[0].config.value,e[1].config.value)},children:["Next",Object(L.jsxs)("svg",{width:"24",height:"20",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(L.jsx)("g",{"clip-path":"url(#clip0)",children:Object(L.jsx)("path",{d:"M506.134 241.843C506.128 241.837 506.123 241.83 506.116 241.824L401.612 137.824C393.783 130.033 381.12 130.062 373.327 137.892C365.535 145.721 365.565 158.384 373.394 166.176L443.558 236H20C8.954 236 0 244.954 0 256C0 267.046 8.954 276 20 276H443.557L373.395 345.824C365.566 353.616 365.536 366.279 373.328 374.108C381.121 381.939 393.785 381.966 401.613 374.176L506.117 270.176C506.123 270.17 506.128 270.163 506.135 270.157C513.968 262.339 513.943 249.635 506.134 241.843Z",fill:"white"})}),Object(L.jsx)("defs",{children:Object(L.jsx)("clipPath",{id:"clip0",children:Object(L.jsx)("rect",{width:"512",height:"512",fill:"white"})})})]})]})]})})]})]})})}}]),t}(s.Component);e.default=Object(u.b)((function(C){return{collectionId:C.auth.collectionId,userId:C.auth.userId}}),(function(C){return{updateUserData:function(e,t){return C(H.hb(e,t))},checkUserDetail:function(){return C(H.h())}}}))(M)}}]);
//# sourceMappingURL=112.bec6307e.chunk.js.map