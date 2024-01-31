import React from 'react'
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate()
    return (
        <div className="relative bg-[#060707] text-white">
            <nav className=" relative  flex justify-between z-10 items-center px-5 py-5 w-full ">
                <div className="text-4xl font-IBMPlexBold">PayTM.</div>
                <div className="flex font-IBMPlexBold">
                    <button onClick={() => navigate("/signin")} className='m-4 p-2 bg-black font-bold rounded-[25%] hover:bg-slate-600'>Signin</button>
                    <button onClick={() => navigate("/signup")} className='m-4 p-2 bg-black font-bold rounded-[25%] hover:bg-slate-600'>Signup</button>
                </div>
            </nav>
            <div className=" items-center min-h-screen flex justify-around relative flex-wrap px-5">
                <>
                    <div className="bg-[#15d98bfd] h-[362px] w-[362px] absolute rounded-full blur-[120px] filter -top-[100px]  -left-20 opacity-75"></div>
                </>
                <div className="max-w-xl relative">
                    <h1 className="font-IBMPlexBold text-6xl max-w-md text-left uppercase">
                        PayTM <span className="text-[#02C173]">Banking</span> Service
                    </h1>
                    <p className="font-IBMPlexRegular text-left">
                        Welcome to PayTM, where innovation meets convenience in the digital world. As a pioneering force in revolutionizing online payments and financial services, we bring seamless transactions and unparalleled accessibility to millions around the globe.
                    </p>
                    <div className="hidden md:block py-5">
                        <svg
                            width="108"
                            height="108"
                            viewBox="0 0 138 138"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_2_70)">
                                <path
                                    d="M74.0661 17.1364L75.7731 6.09745L82.6557 7.33685L82.4258 8.82347L77.3072 7.90172L76.8107 11.1122L81.7404 11.9999L81.5105 13.4865L76.5808 12.5988L76.0599 15.9674L81.1786 16.8892L80.9487 18.3758L74.0661 17.1364Z"
                                    fill="white"
                                />
                                <path
                                    d="M90.0353 21.4714L88.1262 20.7743L87.617 18.239L87.1534 15.8225L87.0632 15.7896L85.2719 17.3827L83.3609 19.0343L81.5721 18.3811L86.5488 14.1036L85.1986 7.82233L87.1077 8.51942L87.5605 10.8128L88.0087 13.1726L88.0839 13.2001L89.8003 11.6307L91.5272 10.1332L93.316 10.7864L88.6082 14.8556L90.0353 21.4714Z"
                                    fill="white"
                                />
                                <path
                                    d="M90.6489 21.7419L95.749 11.804L99.3766 13.8742C100.303 14.403 100.871 15.0706 101.08 15.8771C101.298 16.6889 101.169 17.5599 100.692 18.4901C100.214 19.4203 99.5935 20.0111 98.8296 20.2623C98.075 20.5189 97.2344 20.3828 96.3078 19.854L94.2368 18.6722L92.2056 22.6302L90.6489 21.7419ZM94.9164 17.348L96.7511 18.3951C97.7147 18.945 98.4304 18.7644 98.898 17.8532L99.2122 17.2409C99.6749 16.3392 99.4245 15.6134 98.4608 15.0634L96.6261 14.0164L94.9164 17.348Z"
                                    fill="white"
                                />
                                <path
                                    d="M99.0086 25.4792L105.665 16.5088L107.053 17.6423L101.293 25.4046L105.236 28.623L104.339 29.831L99.0086 25.4792Z"
                                    fill="white"
                                />
                                <path
                                    d="M107.616 33.5322C107.151 33.0037 106.838 32.4545 106.677 31.8846C106.531 31.3152 106.522 30.7323 106.65 30.1357C106.785 29.5472 107.057 28.945 107.466 28.3292C107.875 27.7134 108.411 27.0874 109.072 26.4511C109.725 25.8222 110.362 25.32 110.983 24.9444C111.611 24.5614 112.212 24.3239 112.784 24.2318C113.363 24.1477 113.914 24.2091 114.437 24.4158C114.974 24.6232 115.476 24.9912 115.941 25.5197C116.406 26.0482 116.712 26.5971 116.858 27.1664C117.019 27.7363 117.032 28.3155 116.897 28.9041C116.769 29.5006 116.497 30.1105 116.08 30.7337C115.671 31.3495 115.139 31.9719 114.486 32.6007C113.825 33.237 113.184 33.7429 112.563 34.1185C111.943 34.4941 111.343 34.7239 110.763 34.808C110.191 34.9001 109.636 34.8425 109.099 34.6351C108.576 34.4283 108.082 34.0607 107.616 33.5322ZM108.689 32.5001C109.218 33.1006 109.806 33.3179 110.455 33.1518C111.112 32.9783 111.813 32.5327 112.559 31.8151L113.908 30.5167C114.646 29.8064 115.121 29.12 115.333 28.4575C115.552 27.7876 115.398 27.1523 114.869 26.5518C114.34 25.9512 113.747 25.7377 113.091 25.9112C112.442 26.0772 111.748 26.5154 111.01 27.2257L109.65 28.5352C108.912 29.2454 108.433 29.9355 108.213 30.6055C108.002 31.268 108.16 31.8995 108.689 32.5001Z"
                                    fill="white"
                                />
                                <path
                                    d="M112.149 38.9006L111.206 37.3949L120.435 31.1016L122.651 34.642C123.217 35.5464 123.4 36.402 123.201 37.2088C123.007 38.0247 122.479 38.7272 121.615 39.3163C120.91 39.7971 120.218 40.0175 119.538 39.9774C118.859 39.9372 118.26 39.6232 117.741 39.0351L115.248 43.8518L114.195 42.1698L116.667 37.6196L115.877 36.358L112.149 38.9006ZM118.205 37.3643C118.793 38.3048 119.506 38.4895 120.344 37.9185L120.912 37.5308C121.75 36.9598 121.874 36.204 121.285 35.2635L120.148 33.4458L117.067 35.5466L118.205 37.3643Z"
                                    fill="white"
                                />
                                <path
                                    d="M115.783 44.8495L125.94 40.2012L128.65 46.6479L127.282 47.2739L125.266 42.4794L122.312 43.8313L124.254 48.4488L122.886 49.0748L120.945 44.4573L117.845 45.8758L119.861 50.6703L118.493 51.2963L115.783 44.8495Z"
                                    fill="white"
                                />
                                <path
                                    d="M121.44 67.3673L124.339 66.2647L124.058 62.7231L121.026 62.1347L120.882 60.316L132.268 62.6056L132.461 65.0464L121.591 69.2657L121.44 67.3673ZM130.565 64.0061L130.555 63.8785L125.568 62.9295L125.795 65.8011L130.565 64.0061Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M121.368 71.7568L121.508 69.986L132.636 70.9509L132.307 75.1147C132.222 76.1782 131.861 76.9607 131.222 77.4621C130.582 77.9742 129.741 78.1851 128.7 78.0948C127.849 78.021 127.164 77.7528 126.644 77.2901C126.124 76.8274 125.831 76.2024 125.765 75.4149L120.907 77.5797L121.063 75.6015L125.746 73.6303L125.864 72.1466L121.368 71.7568ZM127.129 74.4088C127.042 75.5149 127.503 76.1117 128.513 76.1992L129.198 76.2587C130.208 76.3462 130.757 75.8369 130.844 74.7308L131.013 72.5931L127.299 72.2711L127.129 74.4088Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M128.996 85.3231L119.651 82.8522L120.073 81.1104L129.418 83.5812L130.244 80.1753L131.698 80.5598L129.624 89.1135L128.169 88.729L128.996 85.3231Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M118.503 86.8884L128.97 90.7992L128.362 92.2449L122.299 89.9099L119.626 88.8802L119.577 88.9982L125.14 92.934L124.452 94.5715L117.908 92.9666L117.859 93.0846L120.395 94.4389L126.142 97.5263L125.559 98.913L115.712 93.527L116.642 91.3141L122.962 92.9572L123.011 92.8392L117.573 89.1013L118.503 86.8884Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M112.878 97.7807C113.252 97.1838 113.683 96.736 114.172 96.4371C114.664 96.1533 115.203 96.0049 115.79 95.9921C116.371 95.9882 116.999 96.1198 117.674 96.3869C118.35 96.654 119.067 97.046 119.825 97.5629C120.574 98.0738 121.201 98.5985 121.707 99.1368C122.221 99.6812 122.594 100.232 122.824 100.789C123.048 101.355 123.13 101.927 123.07 102.505C123.013 103.098 122.798 103.694 122.424 104.29C122.05 104.887 121.618 105.328 121.126 105.611C120.637 105.91 120.102 106.062 119.521 106.065C118.934 106.078 118.299 105.948 117.615 105.675C116.939 105.408 116.227 105.019 115.477 104.508C114.719 103.991 114.088 103.464 113.582 102.925C113.076 102.387 112.711 101.835 112.487 101.269C112.257 100.712 112.171 100.137 112.228 99.5435C112.288 98.9651 112.505 98.3775 112.878 97.7807ZM114.108 98.6192C113.683 99.2974 113.63 99.945 113.948 100.562C114.275 101.185 114.866 101.788 115.721 102.371L117.268 103.426C118.114 104.003 118.872 104.32 119.541 104.376C120.219 104.438 120.77 104.13 121.194 103.452C121.619 102.774 121.668 102.123 121.341 101.5C121.023 100.883 120.441 100.286 119.594 99.7091L118.034 98.6452C117.188 98.0681 116.426 97.7485 115.748 97.6862C115.079 97.63 114.532 97.9409 114.108 98.6192Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M108.861 103.553L110.035 102.22L118.083 109.966L115.323 113.101C114.618 113.901 113.867 114.303 113.07 114.305C112.266 114.315 111.487 113.958 110.734 113.232C110.119 112.641 109.749 111.996 109.624 111.299C109.499 110.602 109.648 109.917 110.071 109.244L105.001 107.937L106.313 106.448L111.129 107.799L112.113 106.682L108.861 103.553ZM111.733 109.291C111 110.123 110.999 110.891 111.729 111.594L112.225 112.071C112.955 112.774 113.687 112.709 114.42 111.876L115.837 110.267L113.15 107.681L111.733 109.291Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M104.768 114.652L104.808 112.453L102.748 109.677L104.136 108.543L110.792 117.514L109.404 118.647L106.219 114.355L106.157 114.406L106.209 116.757L106.169 121.289L104.569 122.594L104.617 116.488L97.8016 113.715L99.3883 112.42L104.768 114.652Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M93.6414 114.538C94.4847 114.057 95.2715 113.804 96.0018 113.78C96.7322 113.756 97.4118 113.89 98.0406 114.181L97.544 115.735C96.9396 115.491 96.3728 115.379 95.8438 115.398C95.3197 115.427 94.7935 115.593 94.2654 115.894C93.6538 116.243 93.2589 116.652 93.0808 117.122C92.8933 117.597 92.936 118.101 93.2088 118.632C93.428 119.059 93.7165 119.318 94.0743 119.408C94.437 119.508 94.937 119.444 95.5744 119.215L96.7184 118.783C97.2207 118.595 97.6732 118.496 98.0759 118.487C98.4835 118.487 98.8455 118.551 99.1618 118.677C99.4831 118.813 99.7655 119.001 100.009 119.243C100.248 119.499 100.453 119.793 100.624 120.125C101.106 121.065 101.175 121.946 100.83 122.769C100.491 123.601 99.8018 124.313 98.764 124.905C97.9949 125.344 97.2759 125.589 96.6069 125.639C95.9336 125.704 95.3132 125.604 94.7458 125.339L95.2073 123.787C95.6465 123.966 96.1026 124.049 96.5755 124.037C97.0441 124.04 97.547 123.888 98.0845 123.581C98.659 123.253 99.0333 122.874 99.2076 122.443C99.3775 122.027 99.3382 121.577 99.0898 121.093C98.8803 120.685 98.5989 120.428 98.2454 120.323C97.8876 120.233 97.3808 120.307 96.7249 120.546L95.6014 120.948C94.6475 121.284 93.8448 121.319 93.193 121.053C92.5462 120.796 92.0425 120.316 91.682 119.614C91.4482 119.158 91.3126 118.696 91.2753 118.226C91.2287 117.762 91.2901 117.31 91.4595 116.869C91.6196 116.434 91.8831 116.014 92.2499 115.608C92.6124 115.217 93.0762 114.861 93.6414 114.538Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M77.8533 123.202C78.6303 123.062 79.2084 123.137 79.5877 123.426C79.9565 123.717 80.1817 124.127 80.2632 124.654L80.3365 125.128C80.3773 125.392 80.378 125.641 80.3388 125.876C80.2995 126.11 80.2081 126.322 80.0646 126.51C79.9227 126.709 79.7225 126.881 79.4642 127.025C79.2059 127.169 78.8825 127.276 78.494 127.346C78.1055 127.416 77.7674 127.428 77.4798 127.382C77.1921 127.336 76.9512 127.244 76.7571 127.106C76.5647 126.978 76.4146 126.81 76.3068 126.602C76.1991 126.393 76.1249 126.158 76.0841 125.894L76.0107 125.42C75.9292 124.892 76.0243 124.425 76.296 124.019C76.5572 123.614 77.0763 123.342 77.8533 123.202Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M63.5116 121.072L61.8046 132.111L54.9219 130.872L55.1518 129.385L60.2705 130.307L60.7669 127.096L55.8372 126.208L56.0671 124.722L60.9968 125.61L61.5177 122.241L56.399 121.319L56.6289 119.833L63.5116 121.072Z"
                                    fill="white"
                                />
                                <path
                                    d="M47.5421 116.737L49.4512 117.434L49.9604 119.97L50.424 122.386L50.5142 122.419L52.3055 120.826L54.2165 119.174L56.0053 119.827L51.0286 124.105L52.3788 130.386L50.4697 129.689L50.0169 127.396L49.5687 125.036L49.4935 125.009L47.7771 126.578L46.0502 128.075L44.2614 127.422L48.9692 123.353L47.5421 116.737Z"
                                    fill="white"
                                />
                                <path
                                    d="M46.9285 116.467L41.8284 126.405L38.2008 124.334C37.2742 123.806 36.7063 123.138 36.4973 122.331C36.279 121.52 36.4085 120.649 36.8859 119.718C37.3632 118.788 37.9839 118.197 38.7477 117.946C39.5024 117.69 40.343 117.826 41.2696 118.354L43.3405 119.536L45.3718 115.578L46.9285 116.467ZM42.661 120.86L40.8263 119.813C39.8627 119.263 39.147 119.444 38.6794 120.355L38.3652 120.968C37.9025 121.869 38.1529 122.595 39.1166 123.145L40.9513 124.192L42.661 120.86Z"
                                    fill="white"
                                />
                                <path
                                    d="M38.5685 112.729L31.9123 121.7L30.5239 120.566L36.2837 112.804L32.3416 109.586L33.238 108.377L38.5685 112.729Z"
                                    fill="white"
                                />
                                <path
                                    d="M29.9609 104.676C30.4262 105.205 30.7394 105.754 30.9003 106.324C31.0466 106.893 31.0557 107.476 30.9277 108.073C30.7927 108.661 30.5205 109.263 30.1113 109.879C29.702 110.495 29.1669 111.121 28.5058 111.757C27.8525 112.386 27.2154 112.888 26.5946 113.264C25.9662 113.647 25.3659 113.885 24.7937 113.977C24.2146 114.061 23.6635 113.999 23.1406 113.793C22.603 113.585 22.1015 113.217 21.6362 112.689C21.1709 112.16 20.8652 111.611 20.7189 111.042C20.5579 110.472 20.545 109.893 20.68 109.304C20.808 108.708 21.0804 108.098 21.4974 107.475C21.9066 106.859 22.438 106.237 23.0913 105.608C23.7524 104.971 24.3933 104.466 25.014 104.09C25.6348 103.714 26.2348 103.485 26.814 103.4C27.3861 103.308 27.941 103.366 28.4786 103.573C29.0015 103.78 29.4956 104.148 29.9609 104.676ZM28.8886 105.708C28.3599 105.108 27.771 104.891 27.122 105.057C26.4653 105.23 25.7641 105.676 25.0185 106.393L23.6695 107.692C22.9316 108.402 22.4567 109.088 22.2448 109.751C22.0252 110.421 22.1798 111.056 22.7085 111.657C23.2373 112.257 23.83 112.471 24.4867 112.297C25.1357 112.131 25.8292 111.693 26.5671 110.983L27.9276 109.673C28.6656 108.963 29.1443 108.273 29.3639 107.603C29.5758 106.941 29.4174 106.309 28.8886 105.708Z"
                                    fill="white"
                                />
                                <path
                                    d="M25.4289 99.3079L26.3713 100.814L17.1428 107.107L14.9267 103.566C14.3606 102.662 14.1773 101.807 14.3765 101C14.5701 100.184 15.0988 99.4813 15.9626 98.8922C16.6678 98.4114 17.3599 98.191 18.039 98.2311C18.7181 98.2713 19.3171 98.5853 19.8361 99.1734L22.3298 94.3567L23.3826 96.0387L20.9108 100.589L21.7004 101.85L25.4289 99.3079ZM19.3727 100.844C18.7841 99.9037 18.071 99.719 17.2337 100.29L16.6651 100.678C15.8278 101.249 15.7035 102.004 16.2921 102.945L17.4299 104.763L20.5105 102.662L19.3727 100.844Z"
                                    fill="white"
                                />
                                <path
                                    d="M21.7948 93.359L11.6378 98.0073L8.92742 91.5606L10.2953 90.9346L12.311 95.7291L15.265 94.3772L13.3237 89.7597L14.6915 89.1337L16.6328 93.7512L19.7323 92.3327L17.7166 87.5382L19.0844 86.9122L21.7948 93.359Z"
                                    fill="white"
                                />
                                <path
                                    d="M16.1374 70.8412L13.2389 71.9438L13.5194 75.4854L16.5518 76.0738L16.6958 77.8925L5.30965 75.6029L5.11635 73.1621L15.987 68.9428L16.1374 70.8412ZM7.01269 74.2023L7.0228 74.33L12.0101 75.279L11.7827 72.4074L7.01269 74.2023Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M16.2097 66.4517L16.0694 68.2225L4.94102 67.2576L5.27076 63.0938C5.35499 62.0303 5.71661 61.2478 6.35562 60.7464C6.99548 60.2343 7.83622 60.0234 8.87785 60.1137C9.72815 60.1875 10.4132 60.4557 10.9331 60.9184C11.4529 61.3811 11.7459 62.0061 11.812 62.7936L16.6708 60.6288L16.5141 62.6069L11.8312 64.5782L11.7137 66.0618L16.2097 66.4517ZM10.4481 63.7997C10.5357 62.6936 10.0746 62.0968 9.06484 62.0093L8.37928 61.9498C7.36954 61.8623 6.82087 62.3716 6.73327 63.4776L6.56398 65.6154L10.2788 65.9374L10.4481 63.7997Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M8.58186 52.8853L17.9266 55.3562L17.5041 57.098L8.15941 54.6272L7.33337 58.0331L5.87906 57.6486L7.95359 49.0948L9.4079 49.4794L8.58186 52.8853Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M19.0744 51.3201L8.60729 47.4093L9.2151 45.9636L15.2781 48.2985L17.9511 49.3283L18.0007 49.2103L12.4372 45.2745L13.1256 43.637L19.6691 45.2419L19.7187 45.1239L17.1822 43.7696L11.4355 40.6822L12.0185 39.2955L21.8654 44.6815L20.9351 46.8944L14.6159 45.2513L14.5663 45.3693L20.0048 49.1072L19.0744 51.3201Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M24.6992 40.4278C24.3257 41.0247 23.8944 41.4725 23.4055 41.7714C22.9134 42.0552 22.3741 42.2036 21.7875 42.2164C21.2066 42.2203 20.5784 42.0887 19.9029 41.8216C19.2275 41.5545 18.5107 41.1625 17.7527 40.6456C17.0035 40.1347 16.376 39.61 15.8704 39.0716C15.3559 38.5273 14.9837 37.9767 14.7537 37.4198C14.5294 36.8539 14.4473 36.2818 14.5075 35.7035C14.5645 35.1101 14.7798 34.515 15.1534 33.9181C15.5269 33.3213 15.9598 32.8809 16.4518 32.5971C16.9407 32.2982 17.4757 32.1469 18.0566 32.143C18.6432 32.1302 19.2786 32.2603 19.9629 32.5333C20.6384 32.8004 21.3507 33.1894 22.0999 33.7003C22.8579 34.2173 23.4898 34.7449 23.9954 35.2833C24.5011 35.8217 24.8661 36.3738 25.0904 36.9397C25.3204 37.4965 25.4069 38.0716 25.3499 38.665C25.2897 39.2434 25.0728 39.831 24.6992 40.4278ZM23.4696 39.5893C23.8942 38.9111 23.9474 38.2635 23.6293 37.6465C23.3023 37.0236 22.7114 36.4206 21.8564 35.8375L20.3095 34.7826C19.4633 34.2056 18.7057 33.8889 18.0366 33.8327C17.3587 33.7704 16.8075 34.0784 16.383 34.7566C15.9584 35.4349 15.9096 36.0855 16.2366 36.7084C16.5547 37.3254 17.1368 37.9224 17.983 38.4994L19.5431 39.5633C20.3893 40.1404 21.1513 40.46 21.8292 40.5223C22.4983 40.5785 23.0451 40.2676 23.4696 39.5893Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M28.7164 34.6554L27.5425 35.9887L19.4946 28.2425L22.2547 25.1076C22.9597 24.3069 23.7108 23.9055 24.5078 23.9034C25.3119 23.8934 26.0906 24.2508 26.8439 24.9759C27.4589 25.5678 27.8287 26.2122 27.9535 26.9092C28.0782 27.6062 27.9294 28.2914 27.507 28.9647L32.5763 30.2714L31.265 31.7608L26.4484 30.4089L25.4649 31.5259L28.7164 34.6554ZM25.8443 28.9176C26.5775 28.0849 26.579 27.3171 25.8488 26.6142L25.353 26.137C24.6227 25.4342 23.891 25.4991 23.1578 26.3319L21.7407 27.9414L24.4272 30.5271L25.8443 28.9176Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M32.8098 23.5561L32.7698 25.7556L34.8296 28.5315L33.4412 29.665L26.785 20.6947L28.1734 19.5612L31.3585 23.8536L31.4204 23.803L31.3679 21.4519L31.4089 16.9197L33.008 15.6141L32.9604 21.7202L39.7758 24.4934L38.1891 25.7888L32.8098 23.5561Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M43.9362 23.6703C43.093 24.1515 42.3062 24.4042 41.5758 24.4283C40.8454 24.4524 40.1659 24.3187 39.537 24.0272L40.0336 22.4737C40.6381 22.7178 41.2048 22.83 41.7338 22.8103C42.2579 22.7812 42.7841 22.6159 43.3123 22.3145C43.9238 21.9655 44.3187 21.5561 44.4969 21.0863C44.6843 20.6111 44.6416 20.1078 44.3689 19.5763C44.1497 19.1491 43.8611 18.8904 43.5033 18.8001C43.1406 18.7003 42.6406 18.7648 42.0033 18.9935L40.8592 19.4255C40.357 19.6139 39.9045 19.7126 39.5018 19.7216C39.0942 19.721 38.7322 19.6576 38.4158 19.5313C38.0946 19.3956 37.8121 19.2071 37.5685 18.9657C37.3292 18.7095 37.1243 18.4154 36.9538 18.0832C36.4716 17.1435 36.4028 16.2624 36.7474 15.4399C37.0871 14.6079 37.7758 13.8957 38.8136 13.3035C39.5827 12.8646 40.3017 12.6199 40.9707 12.5695C41.644 12.5043 42.2644 12.6043 42.8318 12.8696L42.3703 14.4214C41.9311 14.2426 41.4751 14.1592 41.0021 14.1714C40.5336 14.1688 40.0306 14.3209 39.4932 14.6276C38.9187 14.9554 38.5443 15.3348 38.37 15.7655C38.2002 16.1815 38.2395 16.6316 38.4879 17.1157C38.6973 17.5238 38.9788 17.7804 39.3322 17.8855C39.69 17.9758 40.1969 17.9013 40.8528 17.662L41.9763 17.2602C42.9301 16.9245 43.7329 16.8897 44.3846 17.1559C45.0315 17.4126 45.5351 17.8922 45.8956 18.5945C46.1294 19.0501 46.265 19.5127 46.3023 19.9823C46.3489 20.4466 46.2875 20.8989 46.1181 21.3391C45.958 21.7741 45.6945 22.1944 45.3277 22.6001C44.9652 22.991 44.5014 23.3478 43.9362 23.6703Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M59.7241 15.0062C58.9471 15.1461 58.369 15.0714 57.9897 14.7821C57.6209 14.4909 57.3957 14.0817 57.3142 13.5545L57.2409 13.08C57.2001 12.8165 57.1993 12.5673 57.2386 12.3327C57.2779 12.0981 57.3693 11.8865 57.5128 11.6981C57.6547 11.4992 57.8548 11.3277 58.1132 11.1836C58.3715 11.0396 58.6949 10.9326 59.0834 10.8626C59.4719 10.7927 59.81 10.7805 60.0976 10.8263C60.3853 10.872 60.6262 10.9641 60.8203 11.1025C61.0127 11.2304 61.1628 11.3985 61.2706 11.6066C61.3783 11.8148 61.4525 12.0507 61.4933 12.3143L61.5667 12.7887C61.6482 13.3159 61.5531 13.7828 61.2814 14.1893C61.0202 14.594 60.5011 14.8663 59.7241 15.0062Z"
                                    fill="#02C173"
                                />
                                <path
                                    d="M85.6667 69L86.3739 68.2929L87.081 69L86.3739 69.7071L85.6667 69ZM52.3334 70C51.7811 70 51.3334 69.5523 51.3334 69C51.3334 68.4477 51.7811 68 52.3334 68V70ZM76.3739 58.2929L86.3739 68.2929L84.9596 69.7071L74.9596 59.7071L76.3739 58.2929ZM86.3739 69.7071L76.3739 79.7071L74.9596 78.2929L84.9596 68.2929L86.3739 69.7071ZM85.6667 70H52.3334V68H85.6667V70Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_70">
                                    <rect width="138" height="138" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div>
                    <img
                        width="500"
                        height="500"
                        alt="bg-image"
                        src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651418249/new-nft_tlfisy.png"
                    />
                </div>
            </div>
        </div>
    )


}

export default Home